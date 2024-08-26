<script>
  // Ensure the file exists at the correct path
  import { getGenres } from "../lib/gameAPI"; // Check this path
  const genres = getGenres(); // This should work if the import is correct
</script>
  

<h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
<p class="text-lg">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
  {#each genres as genre}
    <li>{genre.name}</li>
  {/each}
</ul>