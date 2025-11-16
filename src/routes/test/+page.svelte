<script lang="ts">
  import { browser } from "$app/environment";
  import gsap from "gsap";

  function startlouder() {
    let counterElement = document.querySelector(".counter")!;
    let currentValue = 0;
    function updateCounter() {
      if (currentValue === 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) {
        currentValue = 100;
      }
      counterElement.textContent = currentValue.toString();
      let delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }
    updateCounter();
  }

  if (browser) {
    startlouder();
    gsap.to(".counter", {
      duration: 0.25,
      delay: 3.5,
      opacity: 0,
    });

    gsap.to(".bar", {
      duration: 1.5,
      delay: 3.5,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power2.inOut",
    });

    gsap.from(".h1", {
      duration: 1.5,
      delay: 4,
      y: 700,
      stagger: { amount: 0.5 },
      ease: "power2.inOut",
    });

    gsap.from(".hero", {
      duration: 2,
      delay: 5,
      y: 400,
      ease: "power2.inOut",
    });
  }
</script>

<h1
  class="counter fixed w-full h-full flex justify-end items-end z-50 text-blue-600 text-8xl p-10"
>
  0
</h1>
<div class="overlay fixed w-screen h-screen z-40 flex">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
<div class="container bg-amber-400">
  <p>dsdsds sadasd asa</p>
  <div class="header w-full flex justify-between p-[2em]">
    <div class="h1">R</div>
    <div class="h1">A</div>
    <div class="h1">Y</div>
    <div class="h1">A</div>
    <div class="h1">N</div>
  </div>
  <div
    class="hero relative h-full w-[calc(100vw-4em)] m-0 rounded-2xl border-4"
  ></div>
</div>

<style>
  .header .h1 {
    position: relative;
    font-size: 32vw;
    line-height: 1.125;
  }
  .bar {
    width: 10vw;
    height: 105vh;
    background-color: aqua;
  }
</style>
