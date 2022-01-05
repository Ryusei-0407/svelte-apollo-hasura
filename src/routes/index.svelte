<script>
	import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';

	const client = new ApolloClient({
		uri: 'http://localhost:8080/v1/graphql',
		cache: new InMemoryCache()
	});

  client.query({
    query: gql`
      query GetBooks {
        book {
          id
          name
        }
      }
    `
  }).then(res => console.log(res.data.book));

</script>

<h1>Hello, Svelte</h1>
