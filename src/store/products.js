import { defineStore, setActivePinia, createPinia } from 'pinia';
import { useCategoriesStore } from './categories';

const pinia = createPinia();
setActivePinia(pinia)

const categories = useCategoriesStore()

let testProducts = [
  {
    name: "Shirt",
    imgAlt: "alt1",
    img: "https://i.pinimg.com/564x/15/f1/da/15f1dae2caac44e7bcec9611ec721b61.jpg",
    price: 29.99,
    createdAt: new Date().getTime(),
    state: "new",
    link: "",
    sale: 10,
    gender: 2, // 1 -> Men / 2 -> Women / 3 -> Onisex
    categories: categories.categories[1] 
  },
  {
    name: "Jacket",
    imgAlt: "alt2",
    img: "https://i.pinimg.com/564x/3c/5c/63/3c5c63f8b7a2e430f6edc3174a5dd582.jpg",
    price: 59.99,
    createdAt: new Date().getTime(),
    state: "new",
    link: "",
    sale: 0,
    gender: 3,
    categories: categories.categories[0]
  },
  {
    name: "Shirt",
    imgAlt: "alt2",
    img: "https://i.pinimg.com/564x/5e/a9/b6/5ea9b64cddb01bf45be651c4b24ba5b2.jpg",
    price: 29.99,
    createdAt: new Date().getTime(),
    state: "new",
    link: "",
    sale: 0,
    gender: 2,
    categories: categories.categories[1]
  },
  {
    name: "Jacket",
    imgAlt: "alt2",
    img: "https://i.pinimg.com/564x/50/2f/d2/502fd290fd3a5e938272fbc294ad8f24.jpg",
    price: 59.99,
    createdAt: new Date().getTime(),
    state: "new",
    link: "",
    sale: 0,
    gender: 1,
    categories: categories.categories[0]
  },
  {
    name: "Shirt",
    imgAlt: "alt2",
    img: "https://i.pinimg.com/564x/dd/61/aa/dd61aa76ff411cbba1542f783386222f.jpg",
    price: 29.99,
    createdAt: new Date().getTime(),
    state: "new",
    link: "",
    sale: 0,
    gender: 2,
    categories: categories.categories[1]
  },
];

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: JSON.parse(localStorage.getItem('products')) || testProducts,
  }),
  actions: {
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
    editProduct(id, name, imgAlt, img, price, state, sale, gender, categories) {
      console.log(this.products[id].name)
      console.log(name)
      this.products[id].name = name;
      this.products[id].imgAlt = imgAlt;
      this.products[id].img = img;
      this.products[id].price = price;
      this.products[id].state = state;
      this.products[id].sale = sale;
      this.products[id].gender = gender;
      this.products[id].categories = categories;
    },
    deleteProduct(id) {
      this.products.splice(id, 1)
    },
  },
});
