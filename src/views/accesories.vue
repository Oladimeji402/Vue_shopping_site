<template>
  <div class="container mt-5 pt-5">
    <h1 class="text-center mb-4">Accessories</h1>
    <p class="text-muted text-center mb-4">
      Explore our stylish and functional accessories for every occasion.
    </p>

    <!-- Search Bar -->
    <div class="input-group mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Search for accessories (e.g., Hat, Bag)"
        v-model="searchQuery"
      />
      <button class="btn btn-outline-secondary" @click="searchProducts">
        Search
      </button>
    </div>

    <!-- Product Grid -->
    <div class="row">
      <!-- Filtered Product Cards -->
      <div
        class="col-lg-3 col-md-4 col-sm-6 mb-4"
        v-tilt="{ max: 25, speed: 400, glare: true, maxGlare: 0.5 }"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <div class="card h-100">
          <img :src="product.image" class="card-img-top" :alt="product.name" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text text-muted">{{ product.description }}</p>
            <p class="card-text fw-bold mt-auto"> ₦ {{ product.price }}</p>
            <button
              class="btn btn-secondary w-100 mt-2"
              @click="addToCartWithAlert(product)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!-- No Products Found -->
      <div v-if="filteredProducts.length === 0" class="text-center">
        <p class="text-muted">No products found for "{{ searchQuery }}"</p>
      </div>
    </div>
  </div>
</template>

<script>
import Fire from "@/lib/sweetalert";
import { inject } from "vue";

export default {
  name: "Accessories",
  data() {
    return {
      searchQuery: "",
      products: [
        {
          id: 17,
          name: "Leather Wallet",
          description: "Elegant and durable wallet.",
          price: 2999,
          image: "/src/assets/images/LeatherWallet.png",
          category: "Wallet",
        },
        {
          id: 18,
          name: "Backpack",
          description: "Spacious and trendy backpack.",
          price: 4999,
          image: "/src/assets/images/Backpack.png",
          category: "Bag",
        },
        {
          id: 19,
          name: "Belt",
          description: "Luxury Genuine Leather Men belt",
          price: 1999,
          image: "/src/assets/images/Bel.png",
          category: "Eyewear",
        },
        {
          id: 20,
          name: "Wool Scarf",
          description: "Soft and warm wool scarf.",
          price: 2499,
          image: "/src/assets/images/wool.png",
          category: "Winter Wear",
        },
        {
          id: 21,
          name: "Sun Hat",
          description: "Protective hat for sunny weather.",
          price: 1499,
          image: "/src/assets/images/sunHat1.png",
          category: "Hat",
        },
        {
          id: 22,
          name: "Leather Belt",
          description: "Premium leather belt.",
          price: 3499,
          image: "/src/assets/images/belt.png",
          category: "Belt",
        },
        {
          id: 23,
          name: "Wristwatch",
          description: "Elegant wristwatch for all occasions.",
          price: 8999,
          image: "/src/assets/images/wrist.png",
          category: "Watch",
        },
        {
          id: 24,
          name: "Gloves",
          description: "Comfortable gloves for winter.",
          price: 1999,
          image: "/src/assets/images/glove.png",
          category: "Winter Wear",
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  setup() {
    const addToCart = inject("addToCart"); // Inject the global addToCart function

    // Add to cart with alert
    const addToCartWithAlert = (product) => {
      addToCart(product); // Add product to the cart
      Fire(`${product.name} is in your cart! 😉`, "", "success"); // Display success message
    };

    return { addToCartWithAlert }; // Return the modified addToCart function
  },
};
</script>

