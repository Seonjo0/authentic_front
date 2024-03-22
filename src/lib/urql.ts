import { Client, cacheExchange, fetchExchange } from '@urql/svelte';

const client: Client = new Client({
	url: 'http://localhost:3000/api/graphql',
	exchanges: [cacheExchange, fetchExchange],
});


export default client;