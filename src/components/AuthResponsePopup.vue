<script setup>
import { useCurrentUserStore } from '../stores/currentUser'
import { watch, ref } from 'vue'

const userPreviouslySignedIn = ref(false)

const currentUserStore = useCurrentUserStore()

watch(currentUserStore.getCurrentUser, (newAuthStatus, oldAuthStatus) => {
  if (newAuthStatus === null && oldAuthStatus !== null) {
    userPreviouslySignedIn.value = true
  }
})
</script>

<template>
  <span v-if="currentUserStore.currentUser">Successfully signed in!</span>
  <span v-if="!currentUserStore.currentUser && userPreviouslySignedIn">Successfully signed out!</span>
</template>

<style scoped>
span {
  position: absolute;
  top: 19px;
  left: calc(50% - 110px);
  color: rgb(65, 151, 65);
  animation-name: fadeOut;
  animation-duration: 4000ms;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
