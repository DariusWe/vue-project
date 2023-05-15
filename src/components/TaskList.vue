<script setup>
import { useTasksStore } from '../stores/tasks'
import Task from './Task.vue'

const tasksStore = useTasksStore()
</script>

<template>
  <div class="task-list-container">
    <Task
    v-for="task in tasksStore.tasks"
      :id = "task.id"
      :title="task.title"
      :description="task.description"
    />
  </div>
</template>

<style scoped>
.task-list-container {
  height: calc(100vh - (2 * var(--header-height)));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  overflow-y: scroll;
}
</style>
