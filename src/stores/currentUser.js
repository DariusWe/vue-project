import { defineStore } from 'pinia'

export const useCurrentUserStore = defineStore('currentUserStore', {
  state: () => ({
    currentUser: null,
    isUserMenuOpen: false,
  }),
  actions: {
    getCurrentUser() {
      return this.currentUser
    },
    setCurrentUser(user) {
      this.currentUser = user
    },
    getIsUserMenuOpen() {
      return this.isUserMenuOpen
    },
    setIsUserMenuOpen(bool) {
      this.isUserMenuOpen = bool
    },
  },
})
