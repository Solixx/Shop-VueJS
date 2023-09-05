import { defineStore } from 'pinia'

const templateStates = [
    'new',
    'sale',
]

export const useStateStore = defineStore("state", {
  state: () => ({
    state: templateStates,
  }),
  actions: {
  },
});
