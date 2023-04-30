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
      >Vue.js (Composition API) &nbsp;&#x2022;&nbsp; Java &nbsp;&#x2022;&nbsp; Spring Security &nbsp;&#x2022;&nbsp;
      PostgreSQL</span
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
  color: #f6f6f6;
}

span:nth-child(2) {
  z-index: 2;
  font-weight: 300;
  color: #f6f6f6;
}

.gradient-canvas {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* --gradient-color-1: #abcd4e;
  --gradient-color-2: #46a258;
  --gradient-color-3: #c3a656;
  --gradient-color-4: #d55ac3; */
  --gradient-color-1: #addc66;
  --gradient-color-2: #6bd680;
  --gradient-color-3: #e3c061;
  --gradient-color-4: #d87cc4;
}
</style>
