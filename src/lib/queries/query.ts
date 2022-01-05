import { gql } from '@apollo/client/core';

export const GET_TODOS = gql`
  query GetTodos {
    todo (order_by: { created_at: desc } ) {
      id
      task
      is_completed
    }
  }
`

export const ADD_TODO = gql`
  mutation AddTodo ($task: String!) {
    insert_todo_one(object: {task: $task}) {
      task
      id
      is_completed
      created_at
      updated_at
    }
  }
`
