<script lang="ts">
  import HomeGrid from "@/components/Home/FeaturedGrid.svelte";
  import GenreGames from "@/components/Home/GenreGames.svelte";
  import type { PageData } from "./$types";
  import { getGenres } from "@/lib/gameAPI";

  export let data: PageData; // This will contain the games fetched server-side
  let genres = getGenres();



</script>

<div class="flex flex-col gap-4">
  <div class="flex flex-col gap-2">
    <h2 class="text-3xl font-bold">Featured Games</h2>
    <span class="text-lg text-slate-400">
      Discover the latest games and stay up-to-date with the gaming world.
    </span>
  </div>

  <section class="flex mb-8">
    <HomeGrid items={data?.games?.results || []} />
  </section>

  <section class="flex flex-col gap-4">
    {#each genres as genre}
      <GenreGames {genre} />
    {/each}
  </section>
</div>