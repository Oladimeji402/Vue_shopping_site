import './assets/main.css';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JS

import VanillaTilt from "vanilla-tilt";

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Create a global directive for VanillaTilt
const app = createApp(App);

app.directive("tilt", {
  mounted(el, binding) {
    VanillaTilt.init(el, {
      max: binding.value?.max || 25,
      speed: binding.value?.speed || 400,
      glare: binding.value?.glare || false,
      "max-glare": binding.value?.maxGlare || 0.5,
    });
  },
  unmounted(el) {
    el.vanillaTilt.destroy(); // Cleanup when the directive is removed
  },
});

app.use(router);

app.mount('#app');
