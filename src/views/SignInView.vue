<script setup>
import { RouterLink } from 'vue-router'
import FormWrapper from '../components/FormWrapper.vue'
import InputField from '../components/InputField.vue'
import Button from '../components/Button.vue'
</script>

<template>
  <FormWrapper @on-submit="handleFormSubmit">
    <template v-slot:title> Welcome back! </template>
    <template v-slot:form>
      <InputField type="email" placeholder="Email" required />
      <InputField type="password" placeholder="Password" required />
      <Button type="submit" label="Sign in" />
    </template>
    <template v-slot:footnote>
      Don't have an account yet? <br />
      Register <RouterLink to="/sign-up" style="text-decoration: underline">here.</RouterLink>
    </template>
  </FormWrapper>
</template>

<style scoped></style>
