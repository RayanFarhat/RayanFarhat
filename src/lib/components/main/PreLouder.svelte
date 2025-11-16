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
      opacity: 0,
      stagger: { amount: 0.5 },
      ease: "power2.inOut",
    });
    gsap.to(".louder", {
      duration: 1.5,
      delay: 3.5,
      opacity: 0,
      stagger: { amount: 0.5 },
      ease: "power2.inOut",
      onComplete() {
        document
          .querySelectorAll(".counter, .bar, .louder, .louderbg")
          .forEach((el) => el.remove());
      },
    });
  }
</script>

<h1
  class="counter fixed w-full h-full flex justify-center items-end z-50 text-(--color-8) text-[120px]"
>
  0
</h1>
<div
  class="louder fixed w-screen h-screen z-50 flex bg-transparent items-center justify-center"
>
  <p
    class="bg-(--bg) w-40 h-40 border-2 border-(--color-8) flex justify-center items-center font-bold"
  >
    <img src="favicon.svg" alt="" />
  </p>
</div>
<div class="fixed louderbg w-screen h-screen z-40 flex">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar border-r border-(--color-8)"></div>
</div>

<style>
  .bar {
    width: 10vw;
    height: 105vh;
    background-color: var(--bg);
    border-left: 1px solid var(--color-8);
  }
</style>
