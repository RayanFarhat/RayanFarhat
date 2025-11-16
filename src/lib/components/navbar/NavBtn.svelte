<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

  export let link: string = "#";
  export let label: string = "Click Me";

  let btn: HTMLAnchorElement | null = null;
  let svgTopLeft: SVGSVGElement | null = null;
  let svgBottomRight: SVGSVGElement | null = null;

  // Timelines
  let enterTL: gsap.core.Timeline | null = null;
  let leaveTL: gsap.core.Timeline | null = null;

  function enter() {
    // Kill opposite animation
    leaveTL?.kill();

    const textEl = btn?.querySelector(".label") as HTMLElement;
    if (!textEl) return;

    enterTL = gsap.timeline();

    // Scramble text
    enterTL.to(textEl, {
      duration: 0.7,
      scrambleText: {
        text: label,
        chars: "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛋᛏᛒᛖᛗ",
        speed: 0.4,
      },
      ease: "power2.out",
    });

    // Top-left corner
    if (svgTopLeft) {
      enterTL.fromTo(
        svgTopLeft,
        { opacity: 0, x: -10, y: -10 },
        { opacity: 1, x: 0, y: 0, duration: 0.45, ease: "power2.out" },
        0 // start at same time
      );
    }

    // Bottom-right corner
    if (svgBottomRight) {
      enterTL.fromTo(
        svgBottomRight,
        { opacity: 0, x: 10, y: 10 },
        { opacity: 1, x: 0, y: 0, duration: 0.45, ease: "power2.out" },
        0.05 // slight delay
      );
    }
  }

  function leave() {
    // Kill opposite animation
    enterTL?.kill();

    const textEl = btn?.querySelector(".label") as HTMLElement;
    if (!textEl) return;

    leaveTL = gsap.timeline();

    leaveTL.to(textEl, {
      duration: 0.5,
      scrambleText: { text: label, speed: 0.5 },
      ease: "power2.out",
    });

    if (svgTopLeft) {
      leaveTL.to(
        svgTopLeft,
        {
          opacity: 0,
          x: -6,
          y: -6,
          duration: 0.35,
          ease: "power2.in",
        },
        0
      );
    }

    if (svgBottomRight) {
      leaveTL.to(
        svgBottomRight,
        {
          opacity: 0,
          x: 6,
          y: 6,
          duration: 0.35,
          ease: "power2.in",
        },
        0
      );
    }
  }

  onMount(() => {
    gsap.registerPlugin(ScrambleTextPlugin);

    if (svgTopLeft) gsap.set(svgTopLeft, { opacity: 0 });
    if (svgBottomRight) gsap.set(svgBottomRight, { opacity: 0 });
  });
</script>

<a
  bind:this={btn}
  href={link}
  on:pointerenter={enter}
  on:pointerleave={leave}
  class="relative inline-block px-6 py-3 text-(--text) rounded-lg font-semibold text-base overflow-hidden no-underline cursor-pointer"
>
  <span class="label relative z-10 mono">{label}</span>

  <!-- Top-left corner SVG -->
  <svg
    bind:this={svgTopLeft}
    viewBox="0 0 100 100"
    class="absolute top-1 left-3 w-14 h-14 pointer-events-none opacity-0 stroke-(--color-7)"
  >
    <line x1="4" y1="4" x2="28" y2="4" stroke-width="4" />
    <line x1="4" y1="4" x2="4" y2="28" stroke-width="4" />
  </svg>

  <!-- Bottom-right corner SVG -->
  <svg
    bind:this={svgBottomRight}
    viewBox="0 0 100 100"
    class="absolute -bottom-9 -right-8 w-14 h-14 pointer-events-none opacity-0 stroke-(--color-7)"
  >
    <line x1="24" y1="0" x2="24" y2="24" stroke-width="4" />
    <line x1="0" y1="24" x2="24" y2="24" stroke-width="4" />
  </svg>
</a>
