<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'
import { signInFirebaseUserWithEmailAndPassword } from '../utils/firebase.utils'
import FormWrapper from './FormWrapper.vue'
import InputField from './InputField.vue'
import Button from './Button.vue'

const router = useRouter()

const email = ref('')
const password = ref('')

const emailErrMessage = ref('')
const passwordErrMessage = ref('')

const handleFormSubmit = async () => {
  const result = await signInFirebaseUserWithEmailAndPassword(email.value, password.value)
  if (result === 'auth/user-not-found') emailErrMessage.value = 'Email not found'
  if (result === 'auth/wrong-password') passwordErrMessage.value = 'Invalid password'
  if (result === 'success') router.push('/')

}
</script>

<template>
  <FormWrapper @on-submit="handleFormSubmit">
    <template v-slot:title> Welcome back! </template>
    <template v-slot:form>
      <InputField
        v-model="email"
        type="email"
        placeholder="Email"
        :errMsg="emailErrMessage"
        @remove-err-message="emailErrMessage = ''"
      />
      <InputField
        v-model="password"
        type="password"
        placeholder="Password"
        :errMsg="passwordErrMessage"
        @remove-err-message="passwordErrMessage = ''"
      />
      <Button type="submit" label="Sign in" />
    </template>
    <template v-slot:footnote>
      Don't have an account yet? <br />
      Register <RouterLink to="/sign-up" style="text-decoration: underline">here.</RouterLink>
    </template>
  </FormWrapper>
</template>
