<script lang="ts">
  import type { Game } from "@/types/gameAPI";
  export let HeroGame: Game | null ;
</script>

{#if HeroGame}
  <div class="grid grid-cols-2 gap-4 ">
  
      <div class="relative">
      <div class="absolute top-0 left-0 bg-gradient-to-l from-violet-500/20 to-indigo-500/20 w-full h-full rounded-2xl"></div>
    
        <div class="absolute bottom-2 left-2 bg-gradient-to-r from-violet-800 to-indigo-800 p-2 rounded-lg text-white">
          <h3 class="text-lg font-bold">{HeroGame.name}</h3>
          <span class="text-md text-gray-400">Available on: {HeroGame.platforms?.map(platform => platform.platform.name).join(', ')}</span>
        </div> 
    
        <img
          class="w-full h-full aspect-square object-center object-cover rounded-2xl "
          src={HeroGame.background_image}
          alt={HeroGame.name}
        />
      </div>
    
      <div class="relative">
        <div class="grid grid-cols-2 gap-4">
          {#if HeroGame.short_screenshots}
            {#each HeroGame.short_screenshots as game, index}
              <div class="w-full relative">
          
                <div class="absolute top-0 left-0 bg-gradient-to-l from-violet-500/20 to-indigo-500/20 w-full h-full rounded-2xl"></div>
  
                <div class="absolute bottom-2 left-2 bg-gradient-to-r from-violet-800 to-indigo-800 p-2 rounded-lg text-white">
                    <h3 class="text-sm font-bold">Image {index + 1}</h3>
                  </div> 
  
                <img
                  class="w-full h-auto rounded-2xl "
                  src={game.image}
                  alt={HeroGame.name}
                />
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>
{/if}