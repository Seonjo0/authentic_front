<script>
	import { setContextClient } from '@urql/svelte';
	import client from '$lib/urql';

	setContextClient(client);
</script>

<slot />