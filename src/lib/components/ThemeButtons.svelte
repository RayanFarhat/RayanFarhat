<script>
  import { theme } from "$lib/stores/theme";
  import { onMount } from "svelte";
  onMount(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      theme.set(storedTheme);
    }
  });
</script>

<div class="flex gap-4 items-center justify-center">
  <button
    title="green"
    class="circle {$theme === 'green' ? 'active' : 'glow'}"
    style="background-color: oklch(57.81% 0.1776 147.5); color: oklch(57.81% 0.1776 147.5);"
    on:click={() => theme.set("green")}
  ></button>

  <button
    title="red"
    class="circle {$theme === 'red' ? 'active' : 'glow'}"
    style="background-color: oklch(58.01% 0.227 25.12); color: oklch(58.01% 0.227 25.12);"
    on:click={() => theme.set("red")}
  ></button>

  <button
    title="yellow"
    class="circle {$theme === 'yellow'
      ? 'active'
      : 'glow'} bg-var(--theme-yellow)"
    style="background-color: oklch(81.87% 0.1969 76.46); color: oklch(81.87% 0.1969 76.46);"
    on:click={() => theme.set("yellow")}
  ></button>

  <button
    title="blue"
    class="circle {$theme === 'blue' ? 'active' : 'glow'}"
    style="background-color: oklch(51.51% 0.2307 257.85); color: oklch(51.51% 0.2307 257.85);"
    on:click={() => theme.set("blue")}
  ></button>
</div>

<style>
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    outline: none;
    transition:
      box-shadow 0.3s,
      transform 0.2s;
  }

  /* subtle glow for inactive circles */
  .circle.glow {
    box-shadow: 0 0 5px currentColor;
  }

  /* big glow for active circle */
  .circle.active {
    box-shadow:
      0 0 15px currentColor,
      0 0 30px currentColor;
    transform: scale(1.3);
  }
</style>
