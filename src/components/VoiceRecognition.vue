<script setup>
import { ref, onMounted } from "vue";
import App from "../App.vue";

const emit = defineEmits(["toggleAddProduct"]);

const transcript = ref("");
const isRecording = ref(false);

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const sr = new Recognition();

onMounted(() => {
  sr.continuous = true;
  sr.interimResults = true;

  sr.onstart = () => {
    isRecording.value = true;
  };

  sr.onend = () => {
    isRecording.value = false;
  };

  sr.onresult = (evt) => {
    for (let i = 0; i < evt.results.length; i++) {
      const result = evt.results[i];

      if (result.isFinal) CheckForComand(result);
    }

    const t = Array.from(evt.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    transcript.value = t;
  };
});

const CheckForComand = (result) => {
  const t = result[0].transcript;

  if (t.toLowerCase().includes("stop recording")) {
    sr.stop();
  } else if (
    t.toLowerCase().includes("add product") ||
    t.toLowerCase().includes("ad product") ||
    t.toLowerCase().includes("open product form")
  ) {
    sr.stop();
    setTimeout(() => emit("toggleProduct", { value: true, trigger: 'addProduct' }), 100);
    setTimeout(() => sr.start(), 100);
  } else if (
    t.toLowerCase().includes("close add product") ||
    t.toLowerCase().includes("close ad product") ||
    t.toLowerCase().includes("close product form")
  ) {
    sr.stop();
    setTimeout(() => emit("toggleProduct", { value: false, trigger: 'addProduct' }), 100);
    setTimeout(() => sr.start(), 100);
  } else if (
    t.toLowerCase().includes("edit product") ||
    t.toLowerCase().includes("open edit product form")
  ) {
    sr.stop();
    setTimeout(() => emit("toggleProduct", { value: true, trigger: 'editProduct' }), 100);
    setTimeout(() => sr.start(), 100);
  } else if (
    t.toLowerCase().includes("close edit product") ||
    t.toLowerCase().includes("close edit product form")
  ) {
    sr.stop();
    setTimeout(() => emit("toggleProduct", { value: false, trigger: 'editProduct' }), 100);
    setTimeout(() => sr.start(), 100);
  } else if (
    t.toLowerCase().includes("delte product") ||
    t.toLowerCase().includes("open delte product form")
  ) {
    sr.stop();
    setTimeout(() => emit("toggleProduct", { value: true, trigger: 'delteProduct' }), 100);
    setTimeout(() => sr.start(), 100);
  } else if (
    t.toLowerCase().includes("close delte product") ||
    t.toLowerCase().includes("close delte product form")
  ) {
    sr.stop();
    setTimeout(() => emit("toggleProduct", { value: false, trigger: 'delteProduct' }), 100);
    setTimeout(() => sr.start(), 100);
  }
};

const ToggleMic = () => {
  if (isRecording.value) {
    sr.stop();
  } else {
    sr.start();
  }
};
</script>

<template>
  <div class="app">
    <button
      :class="`mic`"
      @click="ToggleMic"
      v-if="!isRecording"
      class="glow-icon-active"
    >
      <font-awesome-icon icon="fa-solid fa-microphone" size="3x" />
    </button>
    <button :class="`mic`" @click="ToggleMic" v-else class="glow-icon-disabled">
      <font-awesome-icon icon="fa-solid fa-microphone-slash" size="3x" />
    </button>
  </div>
</template>

<style scoped>
button {
  background: none;
  border: none;
  appearance: no-repeat;
}

.glow-icon-active {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #fff, inset 20px 0 80px rgb(5, 174, 30),
    inset -20px 0 80px #0ff, inset 20px 0 300px rgb(5, 174, 30),
    inset -20px 0 300px #0ff;
}

.glow-icon-disabled {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #fff, inset 20px 0 80px rgb(168, 6, 6),
    inset -20px 0 80px #0ff, inset 20px 0 300px rgb(168, 6, 6),
    inset -20px 0 300px #0ff;
}
</style>
