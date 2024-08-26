<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
</script>

<div class="container mx-auto p-12 bg-gray-200">
  <Header title="Game List" />

  <slot />
</div>
