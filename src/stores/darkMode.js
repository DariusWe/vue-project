import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkModeStore', {
  state: () => ({
    darkModeActive: true,
  }),
})
