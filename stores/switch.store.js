import { defineStore } from 'pinia'

export const useSwitchStore = defineStore('switch', {
  state: () => ({ isSave: true }),
  actions: {
    toggleAnnual() {
      this.isSave = !this.isSave
    }
  }
})
