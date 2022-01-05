import { ApolloClient, InMemoryCache, } from '@apollo/client/core';

export const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',
    cache: new InMemoryCache()
  });
}
