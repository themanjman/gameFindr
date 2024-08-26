<script lang="ts">
  import { getGenres } from "$lib/gameAPI"; // Check this path
  const genres = getGenres(); // This should work if the import is correct
  import * as Tabs from "$lib/components/ui/tabs";
</script>

<Tabs.Root value="all">
  <div class="flex items-center">
    <Tabs.List>
      {#each genres as genre}
        <Tabs.Trigger value={genre.name}>{genre.name}</Tabs.Trigger>
      {/each}
    </Tabs.List>
  </div>
</Tabs.Root>

