<script lang="ts">
  import { onMount } from 'svelte';
  import type { Genre } from "@/types/gameAPI";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  export let genre: Genre;

  let games = []; // Declare a variable to hold the games data

  onMount(async () => {
    // Fetch data from the server-side endpoint
    const res = await fetch(`/api/gamesbygenre/${genre.id}`);

    console.log("fetching...", res);


    if (res.ok) {
      const data = await res.json();

      games = data.results; // Assign the returned games data to the variable
    } else {
      console.error("Failed to load data", res.status);
    }
  });
</script>

<div class="relative flex flex-col gap-4">
    <h3 class="text-4xl font-bold">{genre.name}</h3>


    <Carousel.Root>
      <Carousel.Content>
        {#each games as game}
        <Carousel.Item class="basis-1/6">
          <div class="w-full h-full aspect-square relative">
            <div
              class="absolute top-0 left-0 bg-gradient-to-l from-violet-500/30 to-indigo-500/30 w-full h-full rounded-2xl"
            ></div>
    
            <div
              class="absolute bottom-2 left-2 bg-gradient-to-r from-violet-800 to-indigo-800 p-2 rounded-lg text-white"
            >
              <h3 class="text-lg font-bold">{game.name}</h3>
            </div>
    
            <img
              class="w-full h-full aspect-square rounded-2xl object-cover"
              src={game.background_image}
              alt={game.name}
            />
          </div>
        </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous class="bg-slate-700 border-slate-700" />
      <Carousel.Next class="bg-slate-700 border-slate-700" />
    </Carousel.Root>




</div>
