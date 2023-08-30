<script setup>
import { ref, onMounted } from "vue";
import defaultImage from "../assets/tml_flag.jpg";

const imageSrc = ref("");
const fileInput = ref(null);

const openFileInput = () => {
  fileInput.value.click();
};

const handleFileInput = (e) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      imageSrc.value = reader.result;
      localStorage.setItem("mainImg", imageSrc.value);
    };
    reader.readAsDataURL(selectedFile);
  }
};

onMounted(() => {
  imageSrc.value = localStorage.getItem("mainImg") || defaultImage;
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
      <img :src="imageSrc" alt="Selected Image" @click="openFileInput" />
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
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.main-img {
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

.shop-men-women {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 90vh;
}

.shop-men, .shop-women{
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

.shop-men-women .shop-men button, .shop-men-women .shop-women button{
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

.shop-men-women .shop-men button:hover, .shop-men-women .shop-women button:hover{
  background-position: right;
  color: #111;
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
