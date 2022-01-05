import { gql } from '@apollo/client/core';

export const GET_TODOS = gql`
  query GetTodos {
    todo {
      id
      task
      is_completed
    }
  }
`
