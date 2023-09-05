<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "../store/products";

const route = useRoute();
const store = useProductsStore();
const product = ref(store.products[route.params.id]);

const deleteProd = () => {
  if (confirm("Want to delete this Porducts?")) {
    store.deleteProduct(route.params.id);
  }
};
</script>

<template>
  <main>
    <section class="product">
      <div class="product-info">
        <div class="product-img">
          <img :src="product.img" alt="" />
        </div>
        <div class="product-text">
          <div class="product-info-top">
            <h2>{{ product.name }}</h2>
            <div class="product-price">
              <h2 :class="{ onSale: product.sale > 0 }">
                €{{ product.price }}
              </h2>
              <h2 v-if="product.sale > 0" class="salePrice">
                €{{
                  product.price -
                  (product.price * (product.sale / 100)).toFixed(2)
                }}
              </h2>
            </div>
            <h2 v-if="product.sale > 0" class="salePrice">
              {{ product.sale }}%
            </h2>
            <h3>{{ product.categories }}</h3>
            <h4>{{ product.createdDate }}</h4>
          </div>

          <div class="product-info-bottom">
            <h2 v-if="product.gender === 1">Men</h2>
            <h2 v-else-if="product.gender === 2">Women</h2>
            <h2 v-else>Onisex</h2>
            <h3>{{ product.state }}</h3>
            <router-link
              :to="{ name: 'AdminPanel', params: { id: route.params.id } }"
              ><button class="editBtn">Edit Product</button></router-link
            >
            <button @click="deleteProd" class="deleteBtn">
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.product {
  margin: 1rem;
  margin-top: 10rem;
}

.product-info {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.product-img {
  margin-left: 0;
}

.product-img img {
  width: 100%;
}

.product-text {
  margin-left: 0;
  display: flex;
  flex-direction: column;
}

.product-price {
  display: flex;
  flex-direction: row;
}

.onSale {
  text-decoration: line-through;
  color: rgb(149, 149, 149, 0.7);
}

.salePrice {
  color: #087727;
}

.product-info-top {
  position: relative;
  top: 0;
}

.product-info-bottom {
  position: relative;
  bottom: 0;
}

button {
  width: 300px;
  margin-bottom: 0.5rem;
  padding: 0 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-weight: bold;
  color: whitesmoke;
  background-color: #111;
  height: 45px !important;
  transition: 0.3s;
}

button:hover {
  background-color: #202020;
}

.editBtn {
  background-color: rgb(1, 163, 1);
}

.deleteBtn {
  background-color: rgb(187, 2, 2);
}

@media only screen and (min-width: 1440px) {
  .product-info {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .product-img {
    margin-left: -35rem;
  }

  .product-img img {
    width: auto;
  }

  .product-text {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
  }

  .product-price {
    display: flex;
    flex-direction: row;
  }

  .product-price h2:first-child {
    margin-right: 1rem;
  }

  .product-info-top {
    position: absolute;
    top: 0;
  }

  .product-info-bottom {
    position: absolute;
    bottom: 0;
  }
}
</style>
