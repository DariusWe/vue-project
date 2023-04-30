<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { onAuthStateChangedListener } from './utils/firebase.utils'
import { useCurrentUserStore } from './stores/currentUser'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer.vue'
import InfoPopup from './components/InfoPopup.vue'

const currentUserStore = useCurrentUserStore()

onMounted(() => {
  onAuthStateChangedListener((user) => {
    if (user) {
      // When a user signs up the first time, the displayName will not be accessible. This is a Firebase bug (see SignUpView.vue).
      const { uid, displayName } = user
      currentUserStore.setCurrentUser({uid, displayName})
    } else {
      currentUserStore.setCurrentUser(null)
    }
  })
})
</script>

<template>
  <Header />
  <RouterView />
  <InfoPopup />
  <Footer />
</template>

<style scoped></style>
