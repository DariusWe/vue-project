<script setup>
import { ref, defineProps, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import INFO_TEXTS from '../assets/InfoTexts'

const route = useRoute()
const infoText = computed(() => {
  switch (route.path) {
    case '/':
      return INFO_TEXTS.homeText
      break
    case '/sign-in':
      return INFO_TEXTS.signInText
      break
    case '/sign-up':
      return INFO_TEXTS.signUpText
      break
    case '/notes':
      return INFO_TEXTS.notesText
      break
    default:
      return INFO_TEXTS.homeText
      break
  }
})
const routeIsHome = computed(() => route.path === '/')

const timeoutFinished = ref(false)
const popupIsOpen = ref(false)

onMounted(() => {
  setTimeout(() => {
    timeoutFinished.value = true
  }, 1200)
})
</script>

<template>
  <i
    v-if="timeoutFinished"
    :class="routeIsHome ? 'route-is-home material-icons' : 'material-icons'"
    @mouseover="popupIsOpen = !popupIsOpen"
    @mouseout="popupIsOpen = !popupIsOpen"
  >
    info
  </i>
  <Transition>
    <span v-show="popupIsOpen" :class="routeIsHome ? 'route-is-home' : ''"> {{ infoText }}</span>
  </Transition>
</template>

<style scoped>
i {
  position: absolute;
  bottom: calc(var(--header-height) + 30px);
  left: 40px;
  font-size: 3.6rem;
  color: var(--text-color);
  animation-name: Popup;
  animation-duration: 700ms;
  animation-timing-function: ease;
  transition: transform 0.1s;
  cursor: context-menu;
}

i.route-is-home {
  color: #f1f1f1;
}

@keyframes Popup {
  0% {
    transform: scale(1) rotate(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.4) rotate(90deg);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

span {
  position: absolute;
  color: var(--main-bg-color);
  font: initial;
  font-family: 'Satoshi', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  bottom: calc(var(--header-height) + 72px);
  left: 40px;
  width: 260px;
  background-color: var(--text-color);
  border-radius: 3px;
  padding: 15px;
  pointer-events: none;
  transform-origin: bottom left;
  z-index: 10;
}

span.route-is-home {
  background-color: #f1f1f1;
  color: #111;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease-out;
}

.v-enter-from,
.v-leave-to {
  transform: scale(0);
}
</style>
