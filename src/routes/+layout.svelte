<script>
  import "../app.css";
  import Header from "../components/Layout/Header.svelte";
</script>

<div class="container mx-auto pt-12">
  <div class="flex flex-col gap-4">
    <Header />
    <slot />
  </div>
</div>
