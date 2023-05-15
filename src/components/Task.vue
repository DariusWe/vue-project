<script setup>
import { useTasksStore } from '../stores/tasks';

defineProps(['id', 'title', 'description'])

const tasksStore = useTasksStore()
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span>
      <i class="material-icons" @click="tasksStore.setCurrentlyEditedTask(id)"> edit </i>
      <i class="material-icons" @click="tasksStore.deleteTask(id)"> delete </i>
    </span>
  </div>
</template>

<style scoped>
div {
  /* Rename --button-color to sth. like --accent-color */
  /* box-shadow: 6px 10px 30px rgba(0, 0, 0, 0.08); */
  width: 100%;
  padding: 20px;
  padding-bottom: 10px;
  border: 1px solid var(--border-color);
}
i {
  color: lightgray;
  font-size: 2rem;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 8px;
}
i:hover {
  color: var(--text-color);
}
</style>
