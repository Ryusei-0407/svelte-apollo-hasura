<script lang="ts">
	import { Circle2 } from 'svelte-loading-spinners';
	import { createApolloClient } from '../lib/apolloClient';
	import {
		GET_TODOS,
		ADD_TODO,
		EDIT_TODO,
		COMPLETE_TASK,
		UNCOMPLETE_TASK,
		DELETE_TASK
	} from '../lib/queries/query';

	const getTodos = async () => {
		const client = createApolloClient();

		const res = await client.query({ query: GET_TODOS, fetchPolicy: 'network-only' });
		const data = await res.data;

		return await data;
	};
	let promise = getTodos();

	let task = '';

	const createTodo = async (task) => {
		const client = createApolloClient();

		const res = await client.mutate({ mutation: ADD_TODO, variables: { task } });
		console.log(res);
		let _promise = getTodos();
		promise = _promise;
	};

	/*
    const editTodo = async (id: String, task: String) => {
      const client = createApolloClient();

      const res = await client.mutate({  });
    }
  */

	const update_task = async (id, is_completed) => {
		const client = createApolloClient();

		if (is_completed) {
			const res = await client.mutate({ mutation: UNCOMPLETE_TASK, variables: { id } });
			console.log(res);
		} else {
			const res = await client.mutate({ mutation: COMPLETE_TASK, variables: { id } });
			console.log(res);
		}
		let _promise = getTodos();
		promise = _promise;
	};

	const delete_task = async (id) => {
		const client = createApolloClient();

		const res = await client.mutate({ mutation: DELETE_TASK, variables: { id } });
		console.log(res);
		let _promise = getTodos();
		promise = _promise;
	};
</script>

<div class="flex justify-center items-center">
	<h1 class="text-red-500 font-mono text-4xl py-10">Svelte-Kit & GraphQL</h1>
</div>

<div class="flex justify-center items-center py-3">
	<input class="border-2 border-red-500 rounded font-mono py-0.5" type="text" bind:value={task} />
	<button
		class="bg-red-500 hover:bg-red-700 text-white font-mono ml-3 py-1 px-3 rounded"
		disabled={!task}
		on:click={createTodo(task)}>Add Todo</button
	>
</div>

<div class="py-5">
	{#await promise}
		<div class="flex justify-center items-center py-5">
			<Circle2 size="100" />
		</div>
	{:then data}
		{#each data.todo as todo}
			<div class="flex justify-center items-center w-full">
				<table class="font-mon w-full">
					<tbody class="flex justify-center items-center border">
						<tr>
							{#if !todo.is_completed}
								<td class="px-10 w-60">{todo.task}</td>
							{:else}
								<td class="line-through px-10 w-60">{todo.task}</td>
							{/if}
							<td>
								<button
									class="bg-red-500 hover:bg-red-700 text-white text-sm font-mono ml-2 px-2 rounded"
									>Edit</button
								>
							</td>
							<td>
								{#if todo.is_completed}
									<button
										class="bg-red-500 hover:bg-red-700 text-white text-sm font-mono ml-2 px-2 rounded"
										on:click={update_task(todo.id, true)}>UnCompleted</button
									>
								{:else}
									<button
										class="bg-red-500 hover:bg-red-700 text-white text-sm font-mono ml-2 px-4 rounded"
										on:click={update_task(todo.id, false)}>Completed</button
									>
								{/if}
							</td>
							<td>
								<button
									class="bg-red-500 hover:bg-red-700 text-white text-sm font-mono ml-2 px-2 rounded"
									on:click={delete_task(todo.id)}>Delete</button
								>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		{/each}
	{:catch error}
		<div class="flex justify-center items-center">
			<p>{error.message}</p>
		</div>
	{/await}
</div>
