<!-- Wrapped content -->
<div class="box">
  <slot />
</div>

<style>
  .box {
    border: 1px solid #0000;
    border-radius: 12px;
    background:
      linear-gradient(#131219, #131219) padding-box,
      linear-gradient(var(--angle), #070707, #ff0000) border-box;
    animation: 4s rotate linear infinite;
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
</style>
