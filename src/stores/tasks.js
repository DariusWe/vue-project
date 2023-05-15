import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([
    {
      id: 1,
      title: 'Serverless architectures',
      description:
        'In a serverless setup, the developer does not need to worry about maintaining and scaling servers, as the infrastructure is managed by the cloud provider. This can save time and resources, and allows developers to focus on building and deploying their applications.',
    },
    {
      id: 2,
      title: 'Web accessibility',
      description:
        'Web accessibility is a hot topic in web development. Making websites and applications accessible to users with disabilities is important for ensuring that everyone can use the web. This includes things like providing alt text for images, using clear and descriptive headings, and designing for keyboard navigation. Developers are increasingly incorporating accessibility best practices into their workflow to create more inclusive and user-friendly web experiences.',
    },
  ])

  const currentlyEditedTask = ref()

  function addTask(task) {
    tasks.value = [
      ...tasks.value,
      {
        id: new Date().valueOf(),
        title: task.title,
        description: task.description,
      },
    ]
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter((task) => task.id !== id)
  }

  function getCurrentlyEditedTask() {
    return currentlyEditedTask.value
  }

  function setCurrentlyEditedTask(id) {
    currentlyEditedTask.value = id
  }

  function updateTask(id, newTitle, newDescription) {
    tasks.value.map((task) => {
      if (task.id === id) {
        task.title = newTitle
        task.description = newDescription
      }
    })
  }

  return { tasks, currentlyEditedTask, addTask, deleteTask, getCurrentlyEditedTask, setCurrentlyEditedTask, updateTask }
})
