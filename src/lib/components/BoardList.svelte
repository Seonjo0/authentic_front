<script lang="ts">
	import BoardListItem from '$lib/components/BoardListItem.svelte';

	async function fetchData() {
		const res = await fetch('http://localhost/3000/api/board');
		const data = await res.json()
	}

	let articles: string[] = ['제목, 내용, 글쓴이', '제목2, 내용2, 글쓴이2', '제목3, 내용3, 글쓴이3']
</script>

<div class="article-container">
	{#each articles as item, i(item)}
		<BoardListItem articles={(item.split(','))} />
	{/each}
</div>


<style>

</style>