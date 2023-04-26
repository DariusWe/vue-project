<script setup>
import { RouterLink } from 'vue-router'
import FormWrapper from '../components/FormWrapper.vue'
import InputField from '../components/InputField.vue';
import Button from '../components/Button.vue';
</script>

<template>
  <FormWrapper>
    <h2 class="title">Welcome back!</h2>
    <form @submit="handleFormSubmit">
      <InputField type="email" placeholder="Email" required />
      <InputField type="password" placeholder="Password" required />
      <Button type="submit" label="Sign in" />
    </form>
    <span>
      Don't have an account yet? <br />
      Register <RouterLink to="/sign-up" style="text-decoration: underline">here.</RouterLink>
    </span>
  </FormWrapper>
</template>

<style scoped>
.title {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  margin: 50px 0 20px 0;
}

span {
  display: block;
  font-size: 1.4rem;
  text-align: center;
}
</style>
