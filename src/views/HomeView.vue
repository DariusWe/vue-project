<script setup>
import { onMounted } from 'vue'
import { Gradient } from '../assets/Gradient'

onMounted(() => {
  const gradient = new Gradient()
  gradient.initGradient('.gradient-canvas')
})
</script>

<template>
  <main>
    <span>My first Vue.js project</span>
    <span
      >Vue.js (Composition API) &nbsp;&#x2022;&nbsp; Firebase Auth &nbsp;&#x2022;&nbsp; Java &nbsp;&#x2022;&nbsp;
      MySQL</span
    >
    <canvas class="gradient-canvas" data-transition-in />
  </main>
</template>

<style scoped>
main {
  min-height: calc(100vh - (2 * var(--header-height)));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

span:first-child {
  z-index: 2;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2px;
  color: var(--text-color-lightgray);
}

span:nth-child(2) {
  z-index: 2;
  font-weight: 300;
  color: var(--text-color-lightgray);
}

.gradient-canvas {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  --gradient-color-1: #330a3d;
  --gradient-color-2: #34112d;
  --gradient-color-3: #801b39;
  --gradient-color-4: #80141b;
}
</style>
