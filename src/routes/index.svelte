<script>
  import { createApolloClient } from '../lib/apolloClient';
  import { GET_TODOS } from '../lib/queries/query';

  const getbook = async () => {
    const client = createApolloClient();

    const res = await client.query({ query: GET_TODOS });
    const data = await res.data;

    return await data;
  };
  let promise = getbook();

</script>

<div class="flex justify-center items-center">
  <h1 class="text-red-500 font-mono text-2xl py-3">Hello, Svelte</h1>
</div>

{#await promise}
  <div class="flex justify-center items-center">
    <p class="font-sans text-xl">...loading</p>
  </div>
{:then data}
  {#each data.todo as todo}
    <div class="flex justify-center items-center">
      <ul class="font-mono">
        {#if !todo.is_completed}
          <li>{todo.task}</li>
        {:else}
          <li class="line-through">{todo.task}</li>
        {/if}
      </ul>
    </div>
  {/each}
{:catch error}
  <div class="flex justify-center items-center">
    <p>{error.message}</p>
  </div>
{/await}
