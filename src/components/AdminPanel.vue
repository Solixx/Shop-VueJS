<script setup>
import { ref } from "vue";

const props = defineProps({
  products: {
    type: Array
  }
});

const emit = defineEmits(['addNewProduct']);

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
  emit('addNewProduct', newProduct);

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
    <input type="file" placeholder="Img" @change="handleImgChange" />
    <input type="number" placeholder="Price" v-model="inputPrice" />
    <input type="text" placeholder="State" v-model="inputState" />
    <button>Submit</button>
  </form>
</template>

<style scoped></style>
