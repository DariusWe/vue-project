<script setup>
import FormWrapper from '../components/FormWrapper.vue'
import Button from '../components/Button.vue'
import InputField from '../components/InputField.vue'
</script>

<template>
  <FormWrapper>
    <h2 class="title">Create an account</h2>
    <form @submit="handleFormSubmit">
      <InputField type="text" placeholder="Name" required />
      <InputField type="email" placeholder="Email" required />
      <InputField type="password" placeholder="Password" required />
      <InputField type="password" placeholder="Confirm Password" required />
      <Button type="submit" label="Create Account" />
    </form>
    <span
      >Already have an account?<br />
      <RouterLink to="/sign-in" style="text-decoration: underline">Sign in</RouterLink>
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
