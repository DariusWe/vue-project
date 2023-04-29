<script setup>
import { ref, defineProps, onMounted } from 'vue'

const timeoutFinished = ref(false)
const popupIsOpen = ref(false)

defineProps(['text'])

onMounted(() => {
  setTimeout(() => {
    timeoutFinished.value = true
  }, 1200)
})
</script>

<template>
  <i v-if="timeoutFinished" class="material-icons" @mouseover="popupIsOpen = !popupIsOpen" @mouseout="popupIsOpen = !popupIsOpen"> info </i>
  <Transition>
    <span v-show="popupIsOpen"> {{ text }}</span>
  </Transition>
</template>

<style scoped>
i {
  position: absolute;
  bottom: calc(var(--header-height) + 30px);
  left: 40px;
  font-size: 4rem;
  color: var(--text-color);
  animation-name: Popup;
  animation-duration: 700ms;
  animation-timing-function: ease;
  transition: transform 0.1s;
  cursor: context-menu;
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
  bottom: calc(var(--header-height) + 80px);
  left: 40px;
  width: 260px;
  background-color: var(--text-color);
  border-radius: 3px;
  padding: 15px;
  pointer-events: none;
  transform-origin: bottom left;
  z-index: 10;
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
