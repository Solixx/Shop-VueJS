import { defineStore } from 'pinia'

const templateCategories = [
    'Jacket',
    'Shirt',
    'Pants',
    'Shorts',
    'T-Shirt',
    'Hoddie',
    'Hat'
]

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: templateCategories,
  }),
  actions: {
  },
});
