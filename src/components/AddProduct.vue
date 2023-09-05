<script setup>
import { ref, watch } from "vue";
import { useProductsStore } from "../store/products";
import { useCategoriesStore } from "../store/categories";
import { useStateStore } from "../store/state";

const store = useProductsStore();
const categories = useCategoriesStore();
const state = useStateStore();

const inputName = ref("");
const inputImgAlt = ref("");
const inputImg = ref("");
const inputPrice = ref(0);
const inputState = ref("");
const inputSale = ref(0);
const selectGender = ref(3);
const selectCategorie = ref(categories.categories[0]);

let imgSlected = ref(false);

const addProduct = () => {
  if (
    inputName.value.trim() === "" ||
    inputImgAlt.value.trim() === "" ||
    inputImg.value.trim() === "" ||
    inputPrice.value <= 0 ||
    inputSale.value < 0
  ) {
    return;
  }

  if (inputState.value.trim() === "" && inputSale.value > 0) {
    inputState.value = "sale";
  }

  const newProduct = {
    name: inputName.value,
    imgAlt: inputImgAlt.value,
    img: inputImg.value,
    price: inputPrice.value,
    createdAt: new Date().getTime(),
    state: inputState.value,
    link: "",
    sale: inputSale.value,
    gender: selectGender.value,
    categories: selectCategorie.value,
  };

  store.addProduct(newProduct);

  emptyProductInput();
};

const handleImgChange = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      inputImg.value = reader.result; // Atualizar o valor de inputImg com o conteúdo do arquivo
    };
    reader.readAsDataURL(selectedFile);
  }
};

const emptyProductInput = () => {
  inputName.value = "";
  inputImgAlt.value = "";
  inputImg.value = "";
  inputPrice.value = 0;
  inputState.value = "";
};

watch(inputImg, (newInputImg) => {
  if (newInputImg.trim() !== "" && newInputImg.trim()) imgSlected.value = true;
  else  imgSlected.value = false
});
</script>

<template>
  <form @submit.prevent="addProduct">
    <h3>Add Product</h3>
    <input type="text" placeholder="Name" v-model="inputName" />
    <input type="text" placeholder="ImageAlt" v-model="inputImgAlt" />
    <label for="file-upload" class="custom-file-upload" :class="{withImg: imgSlected}"> Image File </label>
    <input
      id="file-upload"
      type="file"
      placeholder="Img"
      @change="handleImgChange"
    />
    <input type="number" placeholder="Price" step=".01" v-model="inputPrice" />
    <input type="number" placeholder="Sale" step=".01" v-model="inputSale" />
    <!-- <input type="text" placeholder="State" v-model="inputState" /> -->
    <select name="state" v-model="inputState">
      <option value="">Default</option>
      <option v-for="stat in state.state" :value="stat">{{ stat }}</option>
    </select>
    <select name="gender" v-model="selectGender">
      <option value="1">Men</option>
      <option value="2">Women</option>
      <option value="3">Onisex</option>
    </select>
    <select name="category" v-model="selectCategorie">
      <option v-for="(cat, index) in categories.categories" :value="cat">
        {{ cat }}
      </option>
    </select>
    <button>Submit</button>
    <slot />
  </form>
</template>

<style scoped>
h3 {
  margin-bottom: 1rem;
}

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
  transition: 0.5s;
}

.custom-file-upload:hover {
  background-color: #ebebeb;
  border: 1px solid black;
  color: black;
}

button {
  font-weight: bold;
  color: whitesmoke;
  background-color: #111;
  height: 45px !important;
  transition: 0.3s;
}

button:hover {
  background-color: #202020;
}

.withImg{
  background-color: #313131;
  color: rgb(243, 243, 243);
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
