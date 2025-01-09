<template>
    <div class="container mt-5 pt-5">
      <h1 class="text-center mb-4">Your Cart</h1>
      <div v-if="cart.length > 0">
        <table class="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td><img :src="item.image" alt="item.name" class="cart-image" /></td>
              <td>{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>$ {{ item.price.toFixed(2) }}</td>
              <td>$ {{ (item.quantity * item.price).toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else class="text-center">Your cart is empty.</p>
    </div>
  </template>
  
  <script>
  import { inject } from "vue";
  
  export default {
    name: "CartPage",
    setup() {
      const cart = inject("cart"); // Access global cart state
      return { cart };
    },
  };
  </script>
  
  <style scoped>
  .cart-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  </style>
  