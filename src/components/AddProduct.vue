<script setup>
import { ref } from "vue";
import { useStore } from "vuex"; // Import the Vuex store

const store = useStore(); // Access the Vuex store

const inputName = ref("");
const inputImgAlt = ref("");
const inputImg = ref("");
const inputPrice = ref(0);
const inputState = ref("");

const addProduct = () => {
  if (
    inputName.value.trim() === "" ||
    inputImgAlt.value.trim() === "" ||
    inputImg.value.trim() === "" ||
    inputPrice.value <= 0 ||
    inputState.value.trim() === ""
  ) {
    return;
  }

  const newProduct = {
    name: inputName.value,
    imgAlt: inputImgAlt.value,
    img: inputImg.value,
    price: inputPrice.value,
    createdAt: new Date().getTime(),
    state: inputState.value,
    link: "",
  };
  
  store.dispatch("addProduct", newProduct)

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
</script>

<template>
  <form @submit.prevent="addProduct">
    <h2>Add Product</h2>
    <input type="text" placeholder="Name" v-model="inputName" />
    <input type="text" placeholder="ImageAlt" v-model="inputImgAlt" />
    <label for="file-upload" class="custom-file-upload">
      Image File
    </label>
    <input id="file-upload" type="file" placeholder="Img" @change="handleImgChange" />
    <input type="number" placeholder="Price" v-model="inputPrice" />
    <input type="text" placeholder="State" v-model="inputState" />
    <button>Submit</button>
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

input, label, .custom-file-upload{
    width: 300px;
    height: 30px;
    margin-bottom: 0.5rem;
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
</style>
