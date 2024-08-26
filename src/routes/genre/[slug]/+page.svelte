<script lang="ts">
    import { page } from '$app/stores'; // Import the page store
    import GameHero from "@/components/GameHero.svelte";
    import type { PageData } from './$types'; // Adjusted path to point to the correct location

  
    export let data: PageData; // This will contain the games fetched server-side

    $: games = data.games;    // Get the slug from the page store
    $: slug = $page.params.slug.charAt(0).toUpperCase() + $page.params.slug.slice(1); // Capitalise the first letter of the slug


  </script>
  
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-bold">{slug} Games</h2>
      <span class="text-lg text-slate-400">
        Discover the latest {slug.toLowerCase()} games and stay up-to-date with the latest {slug.toLowerCase()} games.
      </span>
    </div>

    <GameHero HeroGame={games.results ? games.results[0] : null} />

  </div>