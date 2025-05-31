<script lang="ts">
  import { onMount } from "svelte";
  import * as BABYLON from "@babylonjs/core";
  import "@babylonjs/loaders/glTF";
  import gsap from "gsap";

  let mesh: BABYLON.AbstractMesh | null = null;

  onMount(async () => {
    // Dynamically import and register ScrollTrigger in browser context
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }

    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0); // Transparent background
    scene.useRightHandedSystem = true;

    await BABYLON.LoadAssetContainerAsync("/bee_minecraft.glb", scene).then(
      (container) => {
        container.addAllToScene();
        mesh = container.meshes[0];
        mesh.position.set(0, 0, 0);
        mesh.rotation.set(0, 3, 0);
        mesh.scaling.set(0.5, 0.5, 0.5);
      },
    );

    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 4,
      10,
      BABYLON.Vector3.Zero(),
      scene,
    );
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 10, 0),
      scene,
    );

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });

    // GSAP scroll animation
    window.addEventListener("scroll", () => {
      if (!mesh) return;

      const scrollY = window.scrollY || window.pageYOffset;
      console.log(scrollY);

      // Map scrollY to a reasonable mesh Y position, e.g. 0 to 5
      const targetY = Math.min(5, Math.max(-5, scrollY / 200));
      gsap.to(mesh.position, {
        scrollTrigger: ".box",
        x: targetY,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(mesh.rotation, {
        y: targetY,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });
</script>

<div id="countainer3D">
  <canvas id="canvas"></canvas>
</div>

<style>
  #countainer3D {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background-color: transparent;
    pointer-events: none;
  }
  #countainer3D canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
