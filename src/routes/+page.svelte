<script>
  import Landing3DLayer from "$lib/components/Landing3DLayer.svelte";
  import ThemeSelector from "$lib/components/ThemeSelector.svelte";
  import { onMount } from "svelte";

  let heroRef = $state();
  let isLoaded = $state(false);

  onMount(() => {
    // Simulate component loading
    setTimeout(() => {
      isLoaded = true;
    }, 500);
  });

  // Placeholder for 3D scene initialization
  function init3DScene() {
    // This is where you'd initialize your Babylon.js scene
    console.log("3D Scene would be initialized here");
  }

  const techStack = ["Babylon.js", "SvelteKit", "GSAP", "Blender", "Tailwind"];

  const stats = [
    { number: "50+", label: "Components" },
    { number: "2-5x", label: "Faster Dev" },
    { number: "15+", label: "Happy Clients" },
  ];
</script>

<main
  class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
>
  <Landing3DLayer />
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute inset-0"
      style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"
    ></div>
  </div>

  <!-- Hero Section -->
  <section bind:this={heroRef} class="relative min-h-screen flex items-center">
    <!-- Theme Selector - Top Right -->
    <div class="absolute top-6 right-6 z-10">
      <ThemeSelector />
    </div>
    <div class="container mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Column - Content -->
        <div class="space-y-8 {isLoaded ? 'animate-fade-in' : 'opacity-0'}">
          <!-- Personal Branding -->
          <div class="flex items-center space-x-4 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold"
            >
              YN
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-300">Your Name</h3>
              <p class="text-sm text-gray-400">3D Web Developer</p>
            </div>
          </div>

          <!-- Main Headlines -->
          <div class="space-y-4">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Interactive
              <span
                class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                3D Components
              </span>
              for the Web
            </h1>

            <p
              class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Build stunning 3D web experiences with reusable components and
              optimized models. Specializing in <strong>Babylon.js</strong>,
              <strong>SvelteKit</strong>, and performance-first development.
            </p>
          </div>

          <!-- Tech Stack Badges -->
          <div class="flex flex-wrap gap-3">
            {#each techStack as tech}
              <span
                class="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm font-medium hover:border-blue-500/50 transition-colors"
              >
                {tech}
              </span>
            {/each}
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 py-6">
            {#each stats as stat}
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-bold text-blue-400">
                  {stat.number}
                </div>
                <div class="text-sm text-gray-400">{stat.label}</div>
              </div>
            {/each}
          </div>

          <!-- Call to Actions -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button
              onclick={() => {}}
              class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              🛒 Explore Components
            </button>

            <button
              onclick={() => {}}
              class="px-8 py-4 border-2 border-slate-600 hover:border-blue-500 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50"
            >
              📁 View Portfolio
            </button>

            <button
              onclick={() => {}}
              class="px-8 py-4 border-2 border-slate-600 hover:border-purple-500 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50"
            >
              💬 Contact Me
            </button>
          </div>

          <!-- Personal Statement -->
          <div
            class="bg-slate-800/30 border border-slate-700 rounded-lg p-6 backdrop-blur-sm"
          >
            <p class="text-gray-300 italic">
              "I believe in building <strong>reusable components</strong> instead
              of full projects. Why spend months on a complete game when you can
              build the parts and sell them for 2x the profit?"
            </p>
          </div>
        </div>

        <!-- Right Column - 3D Visual -->
        <div class="relative">
          <!-- 3D Scene Container -->
          <div
            class="relative w-full h-96 lg:h-[600px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 overflow-hidden"
          >
            <!-- Placeholder for 3D Scene -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center space-y-4">
                <!-- Animated 3D Cube Placeholder -->
                <div class="w-32 h-32 mx-auto relative">
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg animate-pulse"
                  ></div>
                  <div
                    class="absolute inset-2 bg-gradient-to-tl from-blue-400 to-purple-500 rounded-lg animate-pulse"
                    style="animation-delay: 0.5s;"
                  ></div>
                  <div
                    class="absolute inset-4 bg-gradient-to-br from-blue-300 to-purple-400 rounded-lg animate-pulse"
                    style="animation-delay: 1s;"
                  ></div>
                </div>

                <div class="space-y-2">
                  <p class="text-lg font-semibold text-gray-300">
                    Interactive 3D Scene
                  </p>
                  <p class="text-sm text-gray-400">
                    Babylon.js integration ready
                  </p>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div
              class="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-600"
            >
              <span class="text-xs text-gray-300">WebGL Ready</span>
            </div>

            <div
              class="absolute bottom-4 left-4 bg-slate-800/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-600"
            >
              <span class="text-xs text-gray-300">60 FPS Optimized</span>
            </div>
          </div>

          <!-- Feature Highlights -->
          <div
            class="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-600 rounded-lg p-4 backdrop-blur-sm"
          >
            <div class="flex items-center space-x-2">
              <div
                class="w-3 h-3 bg-green-500 rounded-full animate-pulse"
              ></div>
              <span class="text-sm font-medium">Performance Optimized</span>
            </div>
          </div>

          <div
            class="absolute -top-6 -right-6 bg-slate-800 border border-slate-600 rounded-lg p-4 backdrop-blur-sm"
          >
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span class="text-sm font-medium">Mobile Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div class="box">sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
  <div>sss</div>
</main>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }

  /* Custom scrollbar for webkit browsers */
  :global(::-webkit-scrollbar) {
    width: 8px;
  }

  :global(::-webkit-scrollbar-track) {
    background: #1e293b;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: #475569;
    border-radius: 4px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: #64748b;
  }
</style>
