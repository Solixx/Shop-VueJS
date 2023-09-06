<script setup>
import { ref, watch } from "vue";
import { useProductsStore } from "../store/products";
import { useCategoriesStore } from "../store/categories";
import { useStateStore } from "../store/state";
</script>

<template>
  <footer>
    <div class="store-info">
      <h2>COH</h2>
      <h4>Store</h4>
      <div class="socials">
        <a href="https://www.instagram.com/_.manuelj._/" target="_blank">
          <font-awesome-icon
            class="socialIcon"
            icon="fa-brands fa-instagram"
            size="xl"
        /></a>
        <a href="https://twitter.com/Solixx4" target="_blank">
          <font-awesome-icon
            class="socialIcon"
            icon="fa-brands fa-twitter"
            size="xl"
        /></a>
        <a
          href="https://www.linkedin.com/in/manuel-goncalves-8717401a4/"
          target="_blank"
        >
          <font-awesome-icon
            class="socialIcon"
            icon="fa-brands fa-linkedin"
            size="xl"
        /></a>
        <a href="https://github.com/Solixx" target="_blank">
          <font-awesome-icon
            class="socialIcon"
            icon="fa-brands fa-github"
            size="xl"
        /></a>
      </div>
      <div class="made-by">
        <h5>made by: Manuel Gonçalves | Solixx</h5>
        <h5>
          mywebsite:
          <a href="https://solixx.vercel.app/" target="_blank"
            >https://solixx.vercel.app/</a
          >
        </h5>
      </div>
    </div>
    <div class="img-autors">
      <h4>IMGs Fonts</h4>
      <a href="https://store.tomorrowland.com/" target="_blank">
        <h5>TML Store</h5>
      </a>
      <a
        href="https://twitter.com/shyroceruss/status/1429620727028666373?lang=zh-Hant" target="_blank"
        ><h5>
          @Shyrose
        </h5>
      </a>
      <a
        href="https://no.pinterest.com/pin/671880838165270172/" target="_blank"
        ><h5>
            Twitter Inc.
        </h5>
      </a>
      <a
        href="https://pinterest.pt/pin/698620960970903196/" target="_blank"
        ><h5>
            @Hu________Tao
        </h5>
      </a>
      <a
        href="https://twitter.com/Hu________Tao" target="_blank"
        ><h5>
            @NTPTNPKT3
        </h5>
      </a>
      <a
        href="https://www.pinterest.pt/pin/698620960970903226/" target="_blank"
        ><h5>
            @NTPTNPKT3
        </h5>
      </a>
      <a
        href="https://www.pinterest.pt/pin/698620960970903201/" target="_blank"
        ><h5>
            @NTPTNPKT3
        </h5>
      </a>
      <a
        href="https://www.pinterest.pt/pin/698620960970903232/" target="_blank"
        ><h5>
            NoRef
        </h5>
      </a>
      <a
        href="https://www.pinterest.pt/pin/698620960970903202/" target="_blank"
        ><h5>
            @nesdzaki
        </h5>
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 25vh;
  background-color: #111;
  color: whitesmoke;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 5rem;
}

footer .made-by a {
  text-decoration: none;
  color: #d72041;
}

.store-info {
  display: flex;
  flex-direction: column;
}

.socials {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.socials .socialIcon {
  margin-right: 0.5rem;
}

footer .socials a, .img-autors a {
  text-decoration: none;
  color: whitesmoke;
  transition: 0.3s;
}

footer .socials a:hover, .img-autors a:hover {
  color: #d72041;
}

.img-autors {
  width: 100%;
  max-width: 15ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
