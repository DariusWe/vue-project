<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useCurrentUserStore } from '../../stores/currentUser'
import { signOutFirebaseUser } from '../../utils/firebase.utils'
import DarkModeIcon from './DarkModeIcon.vue'
import LoadingAnimation from './LoadingAnimation.vue'

const userDropdownMenuOpen = ref(false)
const currentUserStore = useCurrentUserStore()
</script>

<template>
  <nav>
    <ul>
      <li>
        <DarkModeIcon />
      </li>
      <li>
        <RouterLink to="/tasks">Manage Tasks</RouterLink>
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
        @click="userDropdownMenuOpen = !userDropdownMenuOpen"
      >
        {{ currentUserStore.currentUser.displayName }}
        <i class="material-icons"> {{ userDropdownMenuOpen ? 'expand_less' : 'expand_more' }} </i>
        <span v-if="userDropdownMenuOpen" class="dropDown" @click="signOutFirebaseUser">Sign Out</span>
      </li>
    </ul>
  </nav>
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
  top: 85%;
  left: -10px;
  width: 160px;
  background-color: var(--main-bg-color);
  border: 1px solid #333;
  cursor: pointer;
  z-index: 2;
}
</style>
