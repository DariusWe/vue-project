<template>
  <input />
</template>

<style scoped>
input {
  padding: 10px;
  margin: 10px 0;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  color: var(--text-color-light);
  outline: none;
  border: none;
  border: 1px solid var(--border-color-semi-dark);
}

input[type='password'] {
  font: small-caption;
  font-size: 1.5rem;
}

input:focus {
  border-color: #999;
}
</style>
