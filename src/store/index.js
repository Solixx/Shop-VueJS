import { createStore } from 'vuex';

let testProducts = [
  {
    name: "Shirt",
    imgAlt: "alt1",
    img: "https://i.pinimg.com/564x/15/f1/da/15f1dae2caac44e7bcec9611ec721b61.jpg",
    price: 29.99,
    createdAt: new Date().getTime(),
    state: "new",
    link: "",
  },
  {
    name: "Jacket",
    imgAlt: "alt2",
    img: "https://i.pinimg.com/564x/3c/5c/63/3c5c63f8b7a2e430f6edc3174a5dd582.jpg",
    price: 59.99,
    createdAt: new Date().getTime(),
    state: "new",
    link: "",
  },
  {
    name: "Shirt",
    imgAlt: "alt2",
    img: "https://i.pinimg.com/564x/5e/a9/b6/5ea9b64cddb01bf45be651c4b24ba5b2.jpg",
    price: 29.99,
    createdAt: new Date().getTime(),
    state: "new",
    link: "",
  },
  {
    name: "Jacket",
    imgAlt: "alt2",
    img: "https://i.pinimg.com/564x/50/2f/d2/502fd290fd3a5e938272fbc294ad8f24.jpg",
    price: 59.99,
    createdAt: new Date().getTime(),
    state: "new",
    link: "",
  },
  {
    name: "Shirt",
    imgAlt: "alt2",
    img: "https://i.pinimg.com/564x/dd/61/aa/dd61aa76ff411cbba1542f783386222f.jpg",
    price: 29.99,
    createdAt: new Date().getTime(),
    state: "new",
    link: "",
  },
];

export default createStore({
  state: {
    products: JSON.parse(localStorage.getItem('products')) || testProducts, // Initialize with an empty array
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addProduct(state, newProduct) {
      // Push the new product to the products array
      state.products.push(newProduct);
    },
    // Define other mutations for editing and deleting products
  },
  actions: {
    addProduct({ commit }, newProduct) {
      commit('addProduct', newProduct);
    },
    // Define actions for making API calls, handling CRUD operations, etc.
  },
  getters: {
    // Define getters to access and manipulate the products state
  },
});