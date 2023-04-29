import { defineStore } from 'pinia'

export const useCurrentUserStore = defineStore('currentUserStore', {
  state: () => ({
    currentUser: null,
  }),
  actions: {
    setCurrentUser(user) {
        this.currentUser = user
    }
  }
})
