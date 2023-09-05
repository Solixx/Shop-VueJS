<script setup>
import { ref, computed, watch } from "vue";
import { useProductsStore } from "../store/products";
import { useCategoriesStore } from "../store/categories";
import { useStateStore } from "../store/state";
import { faL } from "@fortawesome/free-solid-svg-icons";

const store = useProductsStore();
const categories = useCategoriesStore();
const state = useStateStore();

let inputId = ref(0);
let inputName = ref(store.products[inputId.value].name);
let inputImgAlt = ref(store.products[inputId.value].imgAlt);
let inputImg = ref(store.products[inputId.value].img);
let inputPrice = ref(store.products[inputId.value].price);
let inputState = ref(store.products[inputId.value].state);
let inputSale = ref(store.products[inputId.value].sale);
let selectGender = ref(store.products[inputId.value].gender);
let selectCategorie = ref(store.products[inputId.value].categories);

let imgSlected = ref(true);

const editProduct = () => {
  if (
    inputName.value.trim() === "" ||
    inputImgAlt.value.trim() === "" ||
    inputImg.value.trim() === "" ||
    inputPrice.value <= 0 ||
    inputSale.value < 0
  ) {
    return;
  }

  if (inputState.value.trim() === "sale" && inputSale.value == 0) {
    inputState.value = "";
  } else if(inputState.value.trim() === "" && inputSale.value > 0){
    inputState.value = "sale";
  }

  store.editProduct(
    inputId.value,
    inputName.value,
    inputImgAlt.value,
    inputImg.value,
    inputPrice.value,
    inputState.value,
    inputSale.value,
    selectGender.value,
    selectCategorie.value
  );
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
  inputId.value = 0;
  inputName.value = "";
  inputImgAlt.value = "";
  inputImg.value = "";
  inputPrice.value = 0;
  inputState.value = "";
};

watch(inputId, (newInputId) => {
  if (newInputId >= store.products.length) emptyProductInput();
  else if(newInputId < 0) inputId.value = store.products.length-1
  inputName = ref(store.products[inputId.value].name);
  inputImgAlt = ref(store.products[inputId.value].imgAlt);
  inputImg = ref(store.products[inputId.value].img);
  inputPrice = ref(store.products[inputId.value].price);
  inputState = ref(store.products[inputId.value].state);
  inputSale = ref(store.products[inputId.value].sale);
  selectGender = ref(store.products[inputId.value].gender);
  selectCategorie = ref(store.products[inputId.value].categories);
});

watch(inputImg, (newInputImg) => {
  if ((newInputImg.trim() !== "" && newInputImg.trim())) imgSlected.value = true;
  else  imgSlected.value = false
});
</script>

<template>
  <form @submit.prevent="editProduct">
    <h3>Edit Product</h3>
    <input type="number" name="prodId" v-model="inputId" />
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
      <option v-for="(stat) in state.state" :value="stat">{{ stat }}</option>
    </select>
    <select name="gender" v-model="selectGender">
      <option value="1">Men</option>
      <option value="2">Women</option>
      <option value="3">Onisex</option>
    </select>
    <select name="category" v-model="selectCategorie">
      <option v-for="(cat) in categories.categories" :value="cat">
        {{ cat }}
      </option>
    </select>
    <button>Submit</button>
    <slot />
  </form>
</template>

<style scoped>

h3{
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

button {
  font-weight: bold;
  color: whitesmoke;
  background-color: #111;
  height: 45px !important;
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
