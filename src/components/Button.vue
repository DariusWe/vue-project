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
  border: 1px solid var(--button-border-color);
  color: var(--text-color-light);
  background-color: #262626;
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;
  cursor: pointer;
}

button:hover {
  background-color: #2c2c2c;
}
</style>
