<script setup>
import { ref } from "vue";
import AddProduct from "./AddProduct.vue"

const props = defineProps({
  products: {
    type: Array
  }
});

</script>

<template>
  <AddProduct :products="products" />
</template>

<style scoped></style>
