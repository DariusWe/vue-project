<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import FormWrapper from '../components/FormWrapper.vue'
import InputField from '../components/InputField.vue'
import Button from '../components/Button.vue'

const email = ref('')
const password = ref('')

const handleFormSubmit = () => {
  console.log("Form data is ready to be submitted. Send email and pw to server, validate there and send response back to client.")
}
</script>

<template>
  <FormWrapper @on-submit="handleFormSubmit">
    <template v-slot:title> Welcome back! </template>
    <template v-slot:form>
      <InputField v-model="email" type="email" placeholder="Email" required />
      <InputField v-model="password" type="password" placeholder="Password" required />
      <Button type="submit" label="Sign in" />
    </template>
    <template v-slot:footnote>
      Don't have an account yet? <br />
      Register <RouterLink to="/sign-up" style="text-decoration: underline">here.</RouterLink>
    </template>
  </FormWrapper>
</template>
