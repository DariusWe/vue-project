<script setup>
import { watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useCurrentUserStore } from '../../stores/currentUser'
import { signOutFirebaseUser } from '../../utils/firebase.utils'
import DarkModeIcon from './DarkModeIcon.vue'
import LoadingAnimation from './LoadingAnimation.vue'

const currentUserStore = useCurrentUserStore()

const clickHandler = () => {
  currentUserStore.isUserMenuOpen = false
}

watch(currentUserStore.getIsUserMenuOpen, (newValue, oldValue) => {
  if (newValue === true) {
    // If event listener is added without setTimeout, Vue will add it and run it immediatly (as the click event 
    // and adding event listener happen in the same render cycle. 
    setTimeout(() => {
      window.addEventListener('click', clickHandler)
    }, 50)
  } else {
    window.removeEventListener('click', clickHandler)
  }
})
</script>

<template>
  <nav>
    <ul>
      <li>
        <DarkModeIcon />
      </li>
      <li>
        <RouterLink to="/notes">Manage Notes</RouterLink>
      </li>
      <li v-if="!currentUserStore.currentUser">
        <RouterLink to="/sign-in">Sign in</RouterLink>
      </li>
      <li v-if="currentUserStore.currentUser && !currentUserStore.currentUser.displayName">
        <LoadingAnimation />
      </li>
      <li
        v-if="currentUserStore.currentUser && currentUserStore.currentUser.displayName"
        class="user-name"
        @click="currentUserStore.isUserMenuOpen = !currentUserStore.isUserMenuOpen"
      >
        {{ currentUserStore.currentUser.displayName }}
        <i class="material-icons"> {{ currentUserStore.isUserMenuOpen ? 'expand_less' : 'expand_more' }} </i>
      </li>
    </ul>
  </nav>
  <span v-if="currentUserStore.isUserMenuOpen" class="dropDown" @click="signOutFirebaseUser">Sign Out</span>
</template>

<style scoped>
ul {
  display: flex;
  padding-right: 20px;
}

li {
  display: flex;
  align-items: center;
  height: var(--header-height);
  margin: 8px;
  font-weight: 400;
  color: var(--text-color);
  transition: color 0.15s;
}

li > * {
  padding: 10px;
}

.user-name {
  cursor: pointer;
}

i {
  margin-top: 2px;
  margin-left: -5px;
}

.dropDown {
  position: absolute;
  top: 100%;
  right: -1px;
  padding: 12px 20px;
  width: 187px;
  background-color: var(--main-bg-color);
  border: 1px solid var(--border-color);
  cursor: pointer;
  z-index: 2;
  /* background-color: red; */
}
</style>
