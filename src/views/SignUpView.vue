<script setup>
import { ref } from 'vue'
import { createFirebaseUserWithEmailAndPassword, updateFirebaseUser } from '../utils/firebase.utils'
import { useCurrentUserStore } from '../stores/currentUser'
import { useRouter } from 'vue-router'
import FormWrapper from '../components/FormWrapper.vue'
import Button from '../components/Button.vue'
import InputField from '../components/InputField.vue'

const router = useRouter()
const currentUserStore = useCurrentUserStore()

const nameRegex = /^[a-zA-ZäÄüÜöÖ\s]{3,30}$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const nameErrMessage = ref('')
const emailErrMessage = ref('')
const passwordErrMessage = ref('')
const confirmPasswordErrMessage = ref('')

const validateName = () => {
  if (name.value && !nameRegex.test(name.value)) {
    nameErrMessage.value = 'Name should be 3 - 30 characters and not contain any special characters or numbers'
  }
}

const validateEmail = () => {
  if (email.value && !emailRegex.test(email.value)) {
    emailErrMessage.value = 'Please enter a valid email address'
  }
}

const validatePassword = () => {
  if (password.value && !passwordRegex.test(password.value)) {
    passwordErrMessage.value =
      'Password must be at least 6 characters and contain at least one number and one special character. '
  }
}

const validateConfirmPassword = () => {
  if (confirmPassword.value && password.value !== confirmPassword.value) {
    confirmPasswordErrMessage.value = 'Passwords do not match'
  }
}

const handleFormSubmit = async () => {
  if (nameErrMessage.value || emailErrMessage.value || passwordErrMessage.value || confirmPasswordErrMessage.value)
    return

  let fieldIsEmpty = false

  if (!name.value) {
    nameErrMessage.value = 'This field is required'
    fieldIsEmpty = true
  }
  if (!email.value) {
    emailErrMessage.value = 'This field is required'
    fieldIsEmpty = true
  }
  if (!password.value) {
    passwordErrMessage.value = 'This field is required'
    fieldIsEmpty = true
  }
  if (!confirmPassword.value) {
    confirmPasswordErrMessage.value = 'This field is required'
    fieldIsEmpty = true
  }

  if (fieldIsEmpty) return

  await createFirebaseUserWithEmailAndPassword(email.value, password.value)
  // The updateProfile() method will - in contrary to what firebase docs are saying - NOT trigger onAuthStateChanged().
  // The displayName of the user will be updated in Firebase, however it will not be accessible in the callback passed to
  // onAuthStateChanged() in App.vue yet. If the user logs in the next time, the displayName will be accessible.
  // To also have access to the users displayName when he first signs up, another solution must be found.
  await updateFirebaseUser({ displayName: name.value })
  currentUserStore.currentUser.displayName = name.value
  router.push('/')
}
</script>

<template>
  <FormWrapper @on-submit="handleFormSubmit">
    <template v-slot:title> Create an account </template>
    <template v-slot:form>
      <InputField
        v-model="name"
        type="text"
        placeholder="Name"
        :errMsg="nameErrMessage"
        @remove-err-message="nameErrMessage = ''"
        @blur="validateName"
      />
      <InputField
        v-model="email"
        type="email"
        placeholder="Email"
        :errMsg="emailErrMessage"
        @remove-err-message="emailErrMessage = ''"
        @blur="validateEmail"
      />
      <InputField
        v-model="password"
        type="password"
        placeholder="Password"
        :errMsg="passwordErrMessage"
        @remove-err-message="passwordErrMessage = ''"
        @blur="validatePassword"
      />
      <InputField
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        :errMsg="confirmPasswordErrMessage"
        @remove-err-message="confirmPasswordErrMessage = ''"
        @blur="validateConfirmPassword"
      />
      <Button type="submit" label="Create Account" />
    </template>
    <template v-slot:footnote>
      Already have an account?<br />
      <RouterLink to="/sign-in" style="text-decoration: underline">Sign in</RouterLink>
    </template>
  </FormWrapper>
</template>
