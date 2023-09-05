<script setup>
import { ref } from "vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";
import DeleteProduct from "../components/DeleteProduct.vue";
</script>

<template>
  <main>
    <section class="adminPanel">
      <h2 style="text-align: center">AdminPanel</h2>
      <AddProduct />
      <EditProduct />
      <DeleteProduct />
    </section>
  </main>
</template>

<style scoped>
.adminPanel {
  margin: 10px;
  margin-top: 10rem;
}
</style>
