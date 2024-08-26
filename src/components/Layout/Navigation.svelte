<script lang="ts">
  import { getGenres } from "$lib/gameAPI"; // Check this path
  const genres = getGenres(); // This should work if the import is correct
</script>




<nav class="bg-slate-800 text-white rounded-2xl">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {#each genres as genre}
                <li>
                    <a href="/" class="text-white hover:underline" aria-current="page">{genre.name}</a>
                </li>
              {/each}
            </ul>
        </div>
    </div>
</nav>
