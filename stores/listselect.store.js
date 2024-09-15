import { defineStore } from 'pinia'

export const useListselectStore = defineStore('list-select', {
  state: () => ({ optionSelected: 'View all' }),
  actions: {
    chooseOption(category) {
      this.optionSelected = category
      console.log(this.optionSelected)
    }
  }
})
