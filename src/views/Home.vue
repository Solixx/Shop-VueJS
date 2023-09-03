<script setup>
import { ref, computed, watch, onBeforeMount, onMounted } from "vue";
import defaultImage from "../assets/tml_flag.jpg";
import primeImage from "../assets/Senju_Kawaragi22_4.0.jpg";
import AdminPanel from "../components/AdminPanel.vue";
import { useProductsStore } from '../store/products';

const store = useProductsStore();

const mainSrc = ref("");
const primeSrc = ref(primeImage);
const fileInput = ref(null);
let windowWidth = ref(window.innerWidth);

const openFileInput = () => {
  fileInput.value.click();
};

const handleFileInput = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      mainSrc.value = reader.result;
      localStorage.setItem("mainImg", mainSrc.value);
    };
    reader.readAsDataURL(selectedFile);
  }
};

const productsShort = computed(() =>
  store.products.sort((a, b) => {
    return a.createdAt - b.createdAt;
  })
);

const productsNew = computed(() => {
  const newProds = store.products.filter((prods) => prods.state === "new");

  newProds.sort((a, b) => {
    return a.createdAt - b.createdAt;
  });

  return newProds;
});

const typeOfWindowWidth = computed(() => {
  if (windowWidth.value < 600) return 0;
  else if (windowWidth.value >= 600 && windowWidth.value < 1024) return 1;
  else if (windowWidth.value >= 1024 && windowWidth.value < 1920) return 2;
  else if (windowWidth.value >= 1920) return 3;
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

watch(
  store.products,
  (newProduct) => {
    console.log(newProduct)
    localStorage.setItem("products", JSON.stringify(newProduct));
  },
  { deep: true }
);

onMounted(() => {
  mainSrc.value = localStorage.getItem("mainImg") || defaultImage;
  window.addEventListener("resize", handleResize);
});

onBeforeMount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <main>
    <section class="main-img">
      <input
        ref="fileInput"
        type="file"
        style="display: none"
        @change="handleFileInput"
      />
      <img :src="mainSrc" alt="Selected Image" @click="openFileInput" />
      <div class="text-box">
        <h4>Design For The People Of Tomorrow</h4>
        <h1>Summer Collection</h1>
        <button>Descover Now</button>
      </div>
    </section>
    <section class="shop-men-women">
      <div class="shop-men">
        <img src="../assets/mikey13.jpg" alt="Men Shop" />
        <a href="men.html"><button>Shop Men</button></a>
      </div>
      <div class="shop-women">
        <img src="../assets/hutao render2.jpg" alt="Female Shop" />
        <button>Shop Women</button>
      </div>
    </section>
    <section class="new-arrivals">
      <h2 class="new-arrivals-title">New Arrivals</h2>
      <div class="new-arrivals-content">
        <div
          class="new-arrivals-gallery"
          v-if="typeOfWindowWidth == 0"
          v-for="product in productsNew.slice(0, 1)"
        >
          <div class="arrivals-box" v-if="product.state === 'new'">
            <div class="arrivals-img-box">
              <img :src="product.img" :alt="product.imgAlt" />
              <h4 class="new-arrivals-text">New</h4>
            </div>
            <h4>{{ product.name }}</h4>
            <h4>€{{ product.price }}</h4>
          </div>
        </div>
        <div
          class="new-arrivals-gallery"
          v-else-if="typeOfWindowWidth == 1"
          v-for="product in productsNew.slice(0, 2)"
        >
          <div class="arrivals-box" v-if="product.state === 'new'">
            <div class="arrivals-img-box">
              <img :src="product.img" :alt="product.imgAlt" />
              <h4 class="new-arrivals-text">New</h4>
            </div>
            <h4>{{ product.name }}</h4>
            <h4>€{{ product.price }}</h4>
          </div>
        </div>
        <div
          class="new-arrivals-gallery"
          v-else-if="typeOfWindowWidth == 2"
          v-for="product in productsNew.slice(0, 3)"
        >
          <div class="arrivals-box" v-if="product.state === 'new'">
            <div class="arrivals-img-box">
              <img :src="product.img" :alt="product.imgAlt" />
              <h4 class="new-arrivals-text">New</h4>
            </div>
            <h4>{{ product.name }}</h4>
            <h4>€{{ product.price }}</h4>
          </div>
        </div>
        <div
          class="new-arrivals-gallery"
          v-else
          v-for="product in productsNew.slice(0, 5)"
        >
          <div class="arrivals-box" v-if="product.state === 'new'">
            <div class="arrivals-img-box">
              <img :src="product.img" :alt="product.imgAlt" />
              <h4 class="new-arrivals-text">New</h4>
            </div>
            <h4>{{ product.name }}</h4>
            <h4>€{{ product.price }}</h4>
          </div>
        </div>
      </div>
    </section>
    <section class="prime-img">
      <input type="file" style="display: none" />
      <img :src="primeSrc" alt="Selected Image" />
      <div class="text-box">
        <h4>DESIGN FOR THE PRIME PEOPLE</h4>
        <h1>PRIME COLLECTIONn</h1>
        <button>Descover Now</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.main-img {
  position: relative;
  background-image: url();
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: 0.1s ease;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 10rem 10rem;
}

.main-img:hover {
  background-image: url(../assets/plus.png);
}

.main-img img {
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
}

.main-img img:hover {
  opacity: 0.8;
}

.prime-img {
  position: relative;
  background-image: url();
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: 0.1s ease;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 10rem 10rem;
}

.prime-img img {
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
}

.text-box {
  position: absolute;
  z-index: 2;
  height: 150px;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.text-box button {
  width: 200px;
  border: none;
  appearance: none;
  height: 50px;
  font-weight: bold;
  background-image: linear-gradient(to right, whitesmoke 50%, #d72041 50%);
  background-size: 200%;
  transition: 0.4s;
}

.text-box button:hover {
  background-position: right;
  color: whitesmoke;
}

.prime-img .text-box {
  position: absolute;
  z-index: 2;
  height: 150px;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  color: goldenrod;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.prime-img .text-box button {
  width: 200px;
  border: none;
  appearance: none;
  height: 50px;
  font-weight: bold;
  background-image: linear-gradient(to right, #111 50%, goldenrod 50%);
  background-size: 200%;
  transition: 0.4s;
  color: whitesmoke;
}

.prime-img .text-box button:hover {
  background-position: right;
  color: whitesmoke;
}

.shop-men-women {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 90vh;
}

.shop-men,
.shop-women {
  position: relative;
}

.shop-men-women img {
  width: 100%;
  height: 40vh;
}

.shop-men-women .shop-men {
  margin: 0 0 0 0;
  width: 100%;
}
.shop-men-women .shop-women {
  margin: 0 0 0 0;
  width: 100%;
}

.shop-men-women .shop-men img,
.shop-men-women .shop-women img {
  object-position: 50% 20%;
}

.shop-men-women .shop-men button,
.shop-men-women .shop-women button {
  appearance: none;
  outline: none;
  border: none;

  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;

  width: 150px;
  height: 50px;
  background-image: linear-gradient(to right, #111 50%, whitesmoke 50%);
  background-size: 200%;
  font-weight: bold;
  color: white;
  transform: translate(-50%, -50%);
  transition: 0.4s;
}

.shop-men-women .shop-men button:hover,
.shop-men-women .shop-women button:hover {
  background-position: right;
  color: #111;
}

.new-arrivals {
  z-index: 1;
  position: relative;
}

.new-arrivals .new-arrivals-title {
  margin-bottom: 35px;
  text-align: center;
}

.new-arrivals .new-arrivals-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.new-arrivals .new-arrivals-gallery {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 500px;
}

.new-arrivals .new-arrivals-gallery .arrivals-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 250px;
  height: 100%;
}

.new-arrivals .new-arrivals-gallery .arrivals-img-box {
  width: 100%;
  height: 400px;
}

.new-arrivals .new-arrivals-gallery .arrivals-img-box img {
  width: 100%;
  height: 100%;
}

.new-arrivals .new-arrivals-gallery .arrivals-img-box .new-arrivals-text {
  width: 100%;
  text-align: center;
  color: goldenrod;
  background-color: #111;
  top: 100;
  transform: translate(0, -100%);
}

@media only screen and (min-width: 600px) {
  .shop-men-women img {
    height: 43vh;
  }
}

@media only screen and (min-width: 1024px) {
  .shop-men-women {
    flex-direction: row;
  }

  .shop-men-women img {
    width: 100%;
    height: 100%;
  }

  .shop-men-women .shop-men {
    margin: 0 5px 0 10px;
    width: 100%;
  }
  .shop-men-women .shop-women {
    margin: 0 10px 0 5px;
    width: 100%;
  }
}
</style>