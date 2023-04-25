<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header">
    <span
      ><RouterLink to="/"><span class="logo">VueApp</span></RouterLink></span
    >
    <nav>
      <ul>
        <li>
          <RouterLink to="/about"><span class="nav-item">About</span></RouterLink>
        </li>
        <li>
          <RouterLink to="/sign-in"><span class="nav-item">Sign in</span></RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.header {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color-dark);
}

.logo {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-color-lightgray);
  /* color: rgb(192, 135, 60); */
  padding: 0 40px;
}

ul {
  display: flex;
  padding-right: 20px;
}

.nav-item {
  height: var(--header-height);
  padding: 20px;
  cursor: pointer;
  font-weight: 400;
  color: var(--text-color-lightgray);
  transition: color 0.15s;
}

.nav-item:hover {
  color: rgb(194, 61, 59);
}
</style>
