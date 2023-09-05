<script setup>
import { ref, computed, watch } from "vue";
import { useProductsStore } from "../store/products";
import { useCategoriesStore } from "../store/categories";

const store = useProductsStore();
const categories = useCategoriesStore();

let inputId = ref(0);
let inputName = ref(store.products[inputId.value].name);
let inputImgAlt = ref(store.products[inputId.value].imgAlt);
let inputImg = ref(store.products[inputId.value].img);
let inputPrice = ref(store.products[inputId.value].price);
let inputState = ref(store.products[inputId.value].state);
let inputSale = ref(store.products[inputId.value].sale);
let selectGender = ref(store.products[inputId.value].gender);
let selectCategorie = ref(store.products[inputId.value].categories);

const deleteProduct = () => {
  store.deleteProduct(
    inputId.value,
  );
  inputId.value++
};

const emptyProductInput = () => {
  inputId.value = 0;
  inputName.value = "";
  inputImgAlt.value = "";
  inputImg.value = "";
  inputPrice.value = 0;
  inputState.value = "";
};

watch(inputId, (newInputId) => {
  if (newInputId >= store.products.length || newInputId < 0) emptyProductInput();
  inputName = ref(store.products[inputId.value].name);
  inputImgAlt = ref(store.products[inputId.value].imgAlt);
  inputImg = ref(store.products[inputId.value].img);
  inputPrice = ref(store.products[inputId.value].price);
  inputState = ref(store.products[inputId.value].state);
  inputSale = ref(store.products[inputId.value].sale);
  selectGender = ref(store.products[inputId.value].gender);
  selectCategorie = ref(store.products[inputId.value].categories);
});
</script>

<template>
  <form @submit.prevent="deleteProduct">
    <h2>Delete Product</h2>
    <input type="number" name="prodId" v-model="inputId" />
    <input type="text" placeholder="Name" v-model="inputName" disabled />
    <input type="number" placeholder="Price" step=".01" v-model="inputPrice" disabled />
    <input type="number" placeholder="Sale" step=".01" v-model="inputSale" disabled />
    <input type="text" placeholder="State" v-model="inputState" disabled />
    <select name="gender" v-model="selectGender" disabled>
      <option value="1">Men</option>
      <option value="2">Women</option>
      <option value="3">Onisex</option>
    </select>
    <select name="category" v-model="selectCategorie" disabled>
      <option value="all">All</option>
      <option v-for="(cat, index) in categories.categories" :value="cat">
        {{ cat }}
      </option>
    </select>
    <button>Delete</button>
    <slot />
  </form>
</template>

<style scoped>
form {
  position: relative;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input,
label,
select,
button,
.custom-file-upload {
  width: 300px;
  height: 35px;
  margin-bottom: 0.5rem;
  padding: 0 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="file"] {
  display: none;
}

.custom-file-upload {
  background-color: white;
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  text-align: center;
}

button {
  font-weight: bold;
  color: whitesmoke;
  background-color: #111;
  height: 45px !important;
}

@media only screen and (min-width: 600px) {
  input,
  label,
  select,
  button,
  .custom-file-upload {
    width: 450px;
    height: 35px;
    margin-bottom: 0.5rem;
  }
}
</style>
