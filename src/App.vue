<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import InfoPopup from './components/InfoPopup.vue'
import INFO_TEXTS from './assets/InfoTexts'
import { ref, onMounted } from 'vue'

const timeoutFinished = ref(false)

onMounted(() => {
  setTimeout(() => {
    timeoutFinished.value = true
  }, 1200)
})
</script>

<template>
  <Header />
  <RouterView />
  <InfoPopup v-if="timeoutFinished" :text="INFO_TEXTS.homeText"/>
  <Footer />
</template>

<style scoped></style>
