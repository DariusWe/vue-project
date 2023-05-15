<script setup>
import CreateTaskForm from '../components/CreateTaskForm.vue'
import TaskList from '../components/TaskList.vue';
import Button from '../components/Button.vue';
import { useCurrentUserStore } from '../stores/currentUser';
import { RouterLink } from 'vue-router';

const currentUserStore = useCurrentUserStore();
</script>

<template>
  <div v-if="currentUserStore.currentUser" class="tasks-container">
    <CreateTaskForm />
    <TaskList />
  </div>
  <div v-if="!currentUserStore.currentUser" class="sign-in-note">
    <p>You have to be signed in to use this feature</p>
    <RouterLink to="/sign-in"><Button label="Sign In" /></RouterLink>
  </div>

</template>

<style scoped>
.sign-in-note {
  min-height: calc(100vh - (2 * var(--header-height)));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  margin-bottom: -10px;
}
.tasks-container {
  min-height: calc(100vh - (2 * var(--header-height)));
  display: flex;
  align-items: stretch;
}

.tasks-container > * {
  width: 50%;
}
</style>
