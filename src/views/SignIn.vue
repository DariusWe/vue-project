<script setup>
import { RouterLink } from 'vue-router'
import FormWrapper from '../components/FormWrapper.vue'
</script>

<template>
  <FormWrapper>
    <form @submit="handleFormSubmit">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign in</button>
      <span>Don't have an account yet? Sign up <RouterLink to="/sign-up">here.</RouterLink></span>
    </form>
  </FormWrapper>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
