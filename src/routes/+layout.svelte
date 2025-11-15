<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children, data } = $props();

  // Set theme from server/localStorage
  $effect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.dataset.theme = saved;
    } else {
      document.documentElement.dataset.theme = data.theme;
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
