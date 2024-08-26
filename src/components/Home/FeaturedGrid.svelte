<script lang="ts">
  import type { Game } from "../../types/gameAPI";
  export let items: Game[];

  $: featuredGames = items.length > 0 ? [items[0]] : [];
  $: games = items
  .filter(
    (game) => game.background_image && game.name !== featuredGames[0].name,
  )
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
</script>

<div class="grid grid-cols-2 gap-4 ">
 
  <div class="relative">
    <div class="absolute top-0 left-0 bg-gradient-to-l from-violet-500/20 to-indigo-500/20 w-full h-full rounded-2xl"></div>

    <div class="absolute bottom-2 left-2 bg-gradient-to-r from-violet-800 to-indigo-800 p-2 rounded-lg text-white">
      <h3 class="text-lg font-bold">{featuredGames[0].name}</h3>
    </div>

    <img
      class="w-full h-full aspect-square rounded-2xl object-cover"
      src={featuredGames[0].background_image}
      alt={featuredGames[0].name}
    />
  </div>

  <div class="relative">
    <div class="grid grid-cols-2 gap-4">
      {#each games as game}
        <div class="w-full h-full aspect-square relative">
          <div class="absolute top-0 left-0 bg-gradient-to-l from-violet-500/30 to-indigo-500/30 w-full h-full rounded-2xl"></div>

          <div class="absolute bottom-2 left-2 bg-gradient-to-r from-violet-800 to-indigo-800 p-2 rounded-lg text-white">
            <h3 class="text-lg font-bold">{game.name}</h3>
          </div>

          <img
            class="w-full h-full aspect-square rounded-2xl object-cover"
            src={game.background_image}
            alt={game.name}
          />
        </div>
      {/each}
    </div>
  </div>
</div>
