import { gql } from '@apollo/client/core';

export const GET_TODOS = gql`
	query GetTodos {
		todo(order_by: { created_at: desc }) {
			id
			task
			is_completed
		}
	}
`;

export const ADD_TODO = gql`
	mutation AddTodo($task: String!) {
		insert_todo_one(object: { task: $task }) {
			task
		}
	}
`;

export const COMPLETE_TASK = gql`
	mutation ($id: uuid!) {
		update_todo_by_pk(_set: { is_completed: true }, pk_columns: { id: $id }) {
			id
			task
			is_completed
		}
	}
`;

export const UNCOMPLETE_TASK = gql`
	mutation ($id: uuid!) {
		update_todo_by_pk(_set: { is_completed: false }, pk_columns: { id: $id }) {
			id
			task
			is_completed
		}
	}
`;

export const DELETE_TASK = gql`
	mutation ($id: uuid!) {
		delete_todo_by_pk(id: $id) {
			id
			task
		}
	}
`;
