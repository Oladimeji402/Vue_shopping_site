<template>
  <nav-bar />
  <div>
    <router-view />
  </div>
  <Footer />
  </template>

<script>
import { reactive, provide } from "vue";
import NavBar from './components/components/NavBar.vue';
import Footer from './components/components/FooterVue.vue';
import { onMounted, ref } from 'vue'
import { supabase } from './supabase'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})

export default {
  name: 'App',
  setup() {
    const cart = reactive([]);

    const addToCart = (product) => {
      const existingProduct = cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if product already exists
      } else {
        cart.push({ ...product, quantity: 1 }); // Add product with initial quantity
      }
    };

    provide("cart", cart); // Provide cart to all components
    provide("addToCart", addToCart); // Provide addToCart function to all components

    return { cart };
  },
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
body{
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
}
h1, h2, h3, h4, h5, h6, a, p, span, strong{
  font-family: 'Playfair Display', serif;
}
</style>