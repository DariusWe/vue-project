<script setup>
defineProps(['label'])
</script>

<template>
  <button>
    {{ label }}
  </button>
</template>

<style scoped>
button {
  padding: 10px;
  margin-top: 25px;
  margin-bottom: 20px;
  color: var(--text-color);
  background-color: var(--button-color);
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

button:hover {
  background-color: var(--button-hover-color);
}
</style>
