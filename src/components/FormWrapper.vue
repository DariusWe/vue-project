<template>
  <div class="outer-container">
    <div class="form-container">
      <slot></slot>
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
  border: 1px solid white;
  width: fit-content;
  padding: 40px;
}
</style>
