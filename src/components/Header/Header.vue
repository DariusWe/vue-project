<script setup>
import { RouterLink } from 'vue-router'
import Navbar from './Navbar.vue'
</script>

<template>
  <div class="header">
    <RouterLink to="/"><span class="logo">VueTaskTracker</span></RouterLink>
    <Navbar />
  </div>
</template>

<style scoped>
.header {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

.logo {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-color-light);
  padding: 0 40px;
}
</style>
