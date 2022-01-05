<script>
  import { createApolloClient } from '../lib/apolloClient';
  import { GET_BOOKS } from '../lib/queries/query';

	const client = createApolloClient();

  client.query({
    query: GET_BOOKS
  }).then(res => console.log(res.data.book));

</script>

<h1>Hello, Svelte</h1>
