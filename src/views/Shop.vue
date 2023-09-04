<script setup>
import { ref, computed, onBeforeMount, onMounted } from "vue";
import { useProductsStore } from "../store/products";

const store = useProductsStore();
let windowWidth = ref(window.innerWidth);

const rows = computed(() => {
  let chunkSize = 4;
  if (typeOfWindowWidth.value == 0) {
    chunkSize = 1;
  } else if (typeOfWindowWidth.value == 1) {
    chunkSize = 2;
  }

  const rows = [];

  for (let i = 0; i < store.products.length; i += chunkSize) {
    rows.push(store.products.slice(i, i + chunkSize));
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
      <h2 style="text-align: center">Shop Men</h2>
      <div class="filters">
        <div class="selects">
          <select name="" id="">
            <option value="">Size</option>
          </select>
          <select name="" id="">
            <option value="">Color</option>
          </select>
          <select name="" id="">
            <option value="">Fit</option>
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
                <div class="arrivals-img-box">
                  <img :src="element.img" alt="" />
                  <h5
                    v-if="element.state"
                    class="arrivals-text"
                    :class="getClassBasedOnState(element.state)"
                  >
                    {{ element.state }}
                  </h5>
                </div>
                <h4>{{ element.name }}</h4>
                <h4 :class="{ onSale: element.sale > 0 }">
                  €{{ element.price }}
                </h4>
                <h4 v-if="element.sale > 0" class="salePrice">
                  €{{ element.price - (element.price * (element.sale / 100)).toFixed(2) }}
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
