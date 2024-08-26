<script lang="ts">
    export let title = "Default Title";  // You can pass a title as a prop
    import Navigation from '@/components/Navigation.svelte';
  </script>
  
  <header class="bg-blue-600 text-white p-4">
    <Navigation />

    <h1 class="text-2xl font-bold">{title}</h1>
  </header>