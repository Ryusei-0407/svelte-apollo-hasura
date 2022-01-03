<script>
	import { initializeApollo } from '../lib/apolloClient';
	import { GET_USERS } from '../queries/schema';
	import { setClient, query } from 'svelte-apollo';

	const client = initializeApollo();
	setClient(client);

	const data = query(GET_USERS);
	$: console.log(data);

	const text = 'Svelte';
</script>

<div>
	<h1>Hello, {text}!</h1>
</div>
