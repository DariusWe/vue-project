<script setup>
import InputField from './InputField.vue'
import Button from './Button.vue'
import { computed, ref, watch } from 'vue'
import { useTasksStore } from '../stores/tasks'

const tasksStore = useTasksStore()

const title = ref('')
const description = ref('')

const titleErrMessage = ref('')
const descriptionErrMessage = ref('')

const handleFormSubmit = () => {
  if (titleErrMessage.value || descriptionErrMessage.value) return

  let fieldIsEmpty = false

  if (!title.value) {
    titleErrMessage.value = 'This field is required'
    fieldIsEmpty = true
  }
  if (!description.value) {
    console.log('asdasdasd')
    descriptionErrMessage.value = 'This field is required'
    fieldIsEmpty = true
  }

  if (fieldIsEmpty) return
  if (tasksStore.currentlyEditedTask) {
    tasksStore.updateTask(tasksStore.currentlyEditedTask, title.value, description.value)
    tasksStore.setCurrentlyEditedTask(null)
  } else {
    tasksStore.addTask({ title: title.value, description: description.value })
  }
  title.value = ''
  description.value = ''
}

watch(tasksStore.getCurrentlyEditedTask, (newId, oldId) => {
  if (newId !== null) {
    const currentlyEditedTask = tasksStore.tasks.filter((task) => task.id === newId)[0]
    title.value = currentlyEditedTask.title
    description.value = currentlyEditedTask.description
  } else {
    title.value = ''
    description.value = ''
  }
})

const buttonLabel = computed(() => (tasksStore.currentlyEditedTask ? 'Save' : 'Submit'))
</script>

<template>
  <form @submit.prevent="handleFormSubmit">
    <p>Create a new note and see it appear on the right side. You can further edit or delete notes.</p>
    <InputField
      v-model="title"
      type="text"
      placeholder="Title"
      :errMsg="titleErrMessage"
      @remove-err-message="titleErrMessage = ''"
    />
    <InputField
      :textarea="true"
      v-model="description"
      placeholder="Description"
      :errMsg="descriptionErrMessage"
      @remove-err-message="descriptionErrMessage = ''"
    />
    <Button type="submit" :label="buttonLabel" />
    <Button v-if="tasksStore.currentlyEditedTask" @click="tasksStore.setCurrentlyEditedTask(null)" label="Discard" />
  </form>
</template>

<style scoped>
form {
  padding: 40px;
  /* border-right: 1px solid lightgray; */
  border-right: 1px solid var(--border-color);
}

p {
  background-color: var(--button-color);
  padding: 20px;
  margin-bottom: 10px;
}

button {
  margin-right: 10px;
}
</style>
