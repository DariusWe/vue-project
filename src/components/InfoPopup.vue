<script setup>
import { ref, defineProps } from 'vue'

defineProps(['text'])

const popupIsOpen = ref(false)
</script>

<template>
  <i class="fa-solid fa-info" @mouseover="popupIsOpen = !popupIsOpen" @mouseout="popupIsOpen = !popupIsOpen"></i>
  <Transition>
    <span v-show="popupIsOpen"> {{ text }}</span>
  </Transition>
</template>

<style scoped>
i {
  position: absolute;
  bottom: calc(var(--header-height) + 30px);
  left: 40px;
  font-size: 2.2rem;
  color: #111;
  background-color: var(--text-color-light);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding-bottom: 2px;
  animation-name: Popup;
  animation-duration: 700ms;
  animation-timing-function: ease;
  transition: transform 0.1s;
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
  color: black;
  font: initial;
  font-family: 'Satoshi', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  bottom: calc(var(--header-height) + 80px);
  left: 40px;
  width: 260px;
  background-color: rgb(230, 230, 230);
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
