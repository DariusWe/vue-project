<script setup>
import { ref } from 'vue'

const darkModeActive = ref(true)

const handleClick = () => {
  if (darkModeActive.value) {
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  darkModeActive.value = !darkModeActive.value
}
</script>

<template>
  <span class="material-icons" title="Toggle dark / light mode" @click="handleClick">
    {{ darkModeActive ? 'light_mode' : 'dark_mode' }}
  </span>
</template>

<style scoped>
span {
  font-size: 1.8rem;
  cursor: pointer;
}
</style>
