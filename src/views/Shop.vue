<script setup>
import { ref, computed, onBeforeMount, onMounted } from "vue";
import { useProductsStore } from "../store/products";
import { useCategoriesStore } from "../store/categories";
import { useRoute } from "vue-router";

const store = useProductsStore();
const categories = useCategoriesStore();
const route = useRoute();
const gender = ref(
  route.params.gender == 1 || route.params.gender == 2 ? route.params.gender : 0
);
const searchCategorie = ref("all");
let windowWidth = ref(window.innerWidth);
let chunkSize = ref(4)

const rows = computed(() => {
  if (typeOfWindowWidth.value == 0) {
    chunkSize = 1;
  } else if (typeOfWindowWidth.value == 1) {
    chunkSize = 2;
  } else{
    chunkSize = 4
  }

  const filterProds = [];
  for (let i = 0; i < store.products.length; i++) {
    if (store.products[i].gender == gender.value || gender.value == 0) {
      if (
        searchCategorie.value.trim().toLowerCase() == "all" ||
        store.products[i].categories.trim().toLowerCase() ==
          searchCategorie.value.trim().toLowerCase()
      ) {
        filterProds.push(store.products[i]);
        continue;
      }
      /* if(searchCategorie.value.trim().toLowerCase() == 'all'){
        filterProds.push(store.products[i]);
        continue
      }
      let l = 0, r = store.products[i].categories.length-1
      while (l <= r){
        if(store.products[i].categories[l] == searchCategorie.value){
          filterProds.push(store.products[i]);
          break
        }
        if(store.products[i].categories[r] == searchCategorie.value){
          filterProds.push(store.products[i]);
          break
        }
        l++
        r--
      } */
    }
  }

  const rows = [];

  for (let i = 0; i < filterProds.length; i += chunkSize) {
    rows.push(filterProds.slice(i, i + chunkSize));
  }

  return rows;
});

const getClassBasedOnState = (state) => {
  if (state === "new") {
    return "new-arrival";
  } else if (state === "sale") {
    return "sale-arrival";
  } else {
    return "";
  }
};

const typeOfWindowWidth = computed(() => {
  if (windowWidth.value < 700) return 0;
  else if (windowWidth.value >= 700 && windowWidth.value < 1280) return 1;
  else if (windowWidth.value >= 1280 && windowWidth.value < 1920) return 2;
  else if (windowWidth.value >= 1920) return 3;
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeMount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <main>
    <section class="men-gallery-box">
      <h2 style="text-align: center" v-if="gender == 0">Shop</h2>
      <h2 style="text-align: center" v-else-if="gender == 1">Shop Men</h2>
      <h2 style="text-align: center" v-else-if="gender == 2">Shop Women</h2>
      <h2 style="text-align: center" v-else>Shop Onisex</h2>
      <div class="filters">
        <div class="selects">
          <select name="gender" v-model="gender">
            <option value="0">All</option>
            <option value="1">Men</option>
            <option value="2">Women</option>
            <option value="3">Onisex</option>
          </select>
          <select name="category" v-model="searchCategorie">
            <option value="all">All</option>
            <option v-for="(cat, index) in categories.categories" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>
        <hr />
      </div>

      <div class="men-arrivals">
        <div
          class="men-arrivals-row"
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
        >
          <div class="men-arrivals-content">
            <div
              class="men-arrivals-gallery"
              v-for="(element, columnIndex) in row"
              :key="columnIndex"
            >
              <div class="arrivals-box">
                <router-link :to="{ name: 'Product', params: { id: store.products.indexOf(element)}}"
                  ><div class="arrivals-img-box">
                    <img :src="element.img" alt="" />
                    <h5
                      v-if="element.state"
                      class="arrivals-text"
                      :class="getClassBasedOnState(element.state)"
                    >
                      {{ element.state }}
                    </h5>
                  </div></router-link
                >
                <h4>{{ element.name }}</h4>
                <h4 :class="{ onSale: element.sale > 0 }">
                  €{{ element.price }}
                </h4>
                <h4 v-if="element.sale > 0" class="salePrice">
                  €{{
                    element.price -
                    (element.price * (element.sale / 100)).toFixed(2)
                  }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.men-gallery-box {
  margin: 10px;
  margin-top: 10rem;
}
.filters {
  margin-top: 0.25rem;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.filters hr {
  border: 0;
  border-top: 2px solid rgb(149, 149, 149);
}

.filters select {
  border: 0;
  background-color: transparent;
  font-size: 1rem;
  margin-right: 1rem;
}

.men-arrivals {
  margin-top: 35px;
  z-index: 1;
  position: relative;
}

.men-arrivals h1 {
  margin-bottom: 35px;
}

.men-arrivals-row {
  display: flex;
  flex-direction: column;
}

.men-arrivals .men-arrivals-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 35px 0 0 0;
}

.men-arrivals h1 {
  text-align: center;
}

.men-arrivals .men-arrivals-gallery {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-height: 70vh;
}

.men-arrivals .men-arrivals-gallery .arrivals-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0 0 0 10px;
}

.men-arrivals .men-arrivals-gallery .arrivals-img-box {
  width: 100%;
  height: 530px;
}

.men-arrivals .men-arrivals-gallery .arrivals-img-box img {
  width: 100%;
  max-width: 400px;
  height: 100%;
}

.men-arrivals .men-arrivals-gallery .arrivals-img-box .arrivals-text {
  width: 100%;
  text-align: center;
  top: 100;
  transform: translate(0, -100%);
}

.new-arrival {
  color: goldenrod;
  background-color: #111;
}

.sale-arrival {
  color: whitesmoke;
  background-color: #087727;
}

.onSale {
  text-decoration: line-through;
  font-size: 1.15rem;
}

.salePrice {
  color: #044114;
}

@media only screen and (min-width: 700px) {
  .men-arrivals .men-arrivals-content {
    justify-content: space-evenly;
  }
}
</style>
