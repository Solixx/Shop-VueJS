<script setup>
import { ref, computed, watch, onBeforeMount, onMounted } from "vue";

import Navbar from "./components/Navbar.vue";
import AddProduct from "./components/AddProduct.vue";
import EditProduct from "./components/EditProduct.vue";
import DeleteProduct from "./components/DeleteProduct.vue";
import VoiceRecognition from "./components//VoiceRecognition.vue";
import { useProductsStore } from "./store/products";
import { useCategoriesStore } from "./store/categories";

const categories = useCategoriesStore();

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
    categories: categories.categories[1],
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
    categories: categories.categories[0],
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
    categories: categories.categories[1],
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
    categories: categories.categories[0],
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
    categories: categories.categories[1],
  },
];

const store = useProductsStore();

const popupTriggers = ref({
  addProduct: false,
  editProduct: false,
  deleteProduct: false,
});

const handleToggleAddProduct = (obj) => {
  popupTriggers.value[obj.trigger] = obj.value;
};

const togglePopup = (trigger) => {
  popupTriggers.value[trigger] = !popupTriggers.value[trigger];
};

watch(
  store.products,
  (newProduct) => {
    localStorage.setItem("products", JSON.stringify(newProduct));
  },
  { deep: true }
);

onMounted(() => {
  if (
    localStorage.getItem("products") === null ||
    localStorage.getItem("products") === [] ||
    !localStorage.getItem("products")
  ) {
    localStorage.setItem("products", JSON.stringify(testProducts));
  }
});
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <div class="popup" v-if="popupTriggers.addProduct">
    <AddProduct class="addProduct">
      <button
        class="addproducts-popup-close"
        @click="togglePopup('addProduct')"
      >
        X
      </button>
    </AddProduct>
    <EditProduct class="editProduct">
      <button
        class="editproducts-popup-close"
        @click="togglePopup('editProduct')"
      >
        X</button
      >></EditProduct
    >
    <DeleteProduct class="deleteProduct">
      <button
        class="deleteproducts-popup-close"
        @click="togglePopup('deleteProduct')"
      >
        X</button
      >></DeleteProduct
    >
  </div>
  <VoiceRecognition
    class="voiceRecognition"
    @toggleProduct="handleToggleAddProduct"
  />
</template>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;
}

.popup .addProduct, .editProduct, .deleteProduct {
  height: 500px;
  width: 500px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 1%;
}

.voiceRecognition {
  position: fixed;
  z-index: 99;
  bottom: 2.5%;
  right: 2.5%;
}
</style>
