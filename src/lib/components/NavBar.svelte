<script>
  import NavBtn from "./navbar/NavBtn.svelte";
  import ThemeButtons from "./ThemeButtons.svelte";
</script>

<div class="m-1 glow flex h-16 justify-around items-center bg-(--bg)">
  <div class="flex justify-between gap-4">
    <ThemeButtons />
    <p class="text-(--text) hidden lg:block font-bold">Rayan Farhat</p>
  </div>
  <div class="hidden lg:block">
    <NavBtn link="/" label="Home" />
    <NavBtn link="/about" label="About" />
    <NavBtn link="/projects" label="Projects" />
    <NavBtn link="/contact" label="Contact" />
  </div>
  <div class="p-2">
    <button
      class="angled bg-(--color-8) text-black cursor-pointer font-semibold tracking-wide
      border-2 border-(--color-8)
    px-6 py-2 rounded-lg transition hover:bg-(--bg) hover:text-(--text)"
    >
      Rayan Kit</button
    >
  </div>
</div>

<style>
  .glow {
    border: 1px solid #0000;
    border-radius: 10px;
    background:
      linear-gradient(var(--bg), var(--bg)) padding-box,
      linear-gradient(var(--angle), #070707, var(--color-9)) border-box;
    animation: 6s rotate ease-in infinite;
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  .angled {
    clip-path: polygon(
      12px 0,
      /* top-left slant */ 100% 0,
      /* top-right normal */ 100% calc(100% - 12px),
      /* bottom-right slant starts */ calc(100% - 12px) 100%,
      /* bottom-right slant end */ 0 100%,
      /* bottom-left normal */ 0 12px /* top-left normal end */
    );
  }
</style>
