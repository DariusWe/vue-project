<script setup>
import FormWrapper from '../components/FormWrapper.vue'
import Button from '../components/Button.vue'
import InputField from '../components/InputField.vue'
</script>

<template>
  <FormWrapper @on-submit="handleFormSubmit">
    <template v-slot:title> Create an account </template>
    <template v-slot:form>
      <InputField type="text" placeholder="Name" required />
      <InputField type="email" placeholder="Email" required />
      <InputField type="password" placeholder="Password" required />
      <InputField type="password" placeholder="Confirm Password" required />
      <Button type="submit" label="Create Account" />
    </template>
    <template v-slot:footnote>
      Already have an account?<br />
      <RouterLink to="/sign-in" style="text-decoration: underline">Sign in</RouterLink>
    </template>
  </FormWrapper>
</template>

<style scoped></style>
