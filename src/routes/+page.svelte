<script>
	import BoardList from '$lib/components/BoardList.svelte';
	import { queryStore, gql, getContextClient } from '@urql/svelte';

	const boardsQuery = queryStore({
		client: getContextClient(),
		query: gql`
      query {
        boards {
          title
          author
          content
        }
      }
    `,
	});

</script>

<div>
	<div class="topBar">
		<button>로그인</button>
		<button>글쓰기</button>
	</div>

	{#if $boardsQuery.fetching}
		<p>Loading...</p>
	{:else if $boardsQuery.error}
		<p>Error: {$boardsQuery.error.message}</p>
	{:else}
		<div>{$boardsQuery.data.boards}</div>
	{/if}

	<BoardList />
</div>

<style>
    .topBar {
        display: flex;
    }
</style>