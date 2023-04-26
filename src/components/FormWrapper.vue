<template>
  <div class="outer-container">
    <div class="form-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  min-height: calc(100vh - (2 * var(--header-height)));
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-container {
  width: fit-content;
  min-width: 420px;
  padding: 60px;
}
</style>
