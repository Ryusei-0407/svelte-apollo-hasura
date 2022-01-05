import { gql } from '@apollo/client/core';

export const GET_BOOKS = gql`
  query GetBooks {
    book {
      id
      name
    }
  }
`
