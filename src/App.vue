<script setup>
import { ref, computed, watch, onBeforeMount, onMounted } from "vue";

import Navbar from "./components/Navbar.vue";
import AddProduct from "./components/AddProduct.vue";
import VoiceRecognition from "./components//VoiceRecognition.vue";
import { useProductsStore } from './store/products';

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

const store = useProductsStore();

const popupTriggers = ref({
  addProduct: false
})

const handleToggleAddProduct = (val) => {
  popupTriggers.value.addProduct = val
}

const togglePopup = (trigger) => {
  popupTriggers.value[trigger] = !popupTriggers.value[trigger]
}

watch(
  store.products,
  (newProduct) => {
    localStorage.setItem("products", JSON.stringify(newProduct));
  },
  { deep: true }
);

onMounted(() => {
  if(localStorage.getItem('products') === null || localStorage.getItem('products') === [] || !localStorage.getItem('products')){
    localStorage.setItem('products', JSON.stringify(testProducts))
  }
});
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <!-- <Home :products="products" /> -->
  <!-- <AdminPanel :products="products" @addNewProduct="handleAddNewProduct"></AdminPanel> -->
  <div class="popup" v-if="popupTriggers.addProduct">
    <AddProduct
      class="addProduct"
    >
      <button class="addproducts-popup-close" @click="togglePopup('addProduct')">X</button>
    </AddProduct>
  </div>
  <VoiceRecognition class="voiceRecognition" @toggleAddProduct="handleToggleAddProduct" />
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

.popup .addProduct{
  height: 500px;
  width: 500px;
  background-color: 	rgba(255,255,255, 1);
  border-radius: 1%;
}

.voiceRecognition{
  position: fixed;
  z-index: 99;
  bottom: 2.5%;
  right: 2.5%;
}
</style>
