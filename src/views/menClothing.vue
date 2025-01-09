<template>
  <div class="container mt-5 pt-5">
    <h1 class="text-center mb-4">Men's Clothing</h1>
    <p class="text-muted text-center mb-4">
      Explore our wide range of men’s clothing, from casual wear to formal
      styles.
    </p>

    <!-- Search Bar -->
    <div class="input-group mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Search for products (e.g., Shirt, Shoes)"
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
import { inject } from "vue";

export default {
  name: "MenClothing",
  data() {
    return {
      searchQuery: "", // Bind search input
      products: [
        {
          id: 1,
          name: "Classic Shirt",
          description: "Premium cotton shirt with a classic fit.",
          price: 39999,
          image: "/src/assets/images/ClassicShirt.png",
          category: "Shirt",
        },
        {
          id: 2,
          name: "Slim Fit Jeans",
          description: "Stylish slim-fit denim jeans.",
          price: 49999,
          image: "/src/assets/images/menJeans.png",
          category: "Jeans",
        },
        {
          id: 3,
          name: "Leather Jacket",
          description: "Genuine leather jacket for a bold look.",
          price: 99999,
          image: "/src/assets/images/leather.png",
          category: "Jacket",
        },
        {
          id: 4,
          name: "Sneakers",
          description: "Comfortable and stylish sneakers for daily wear.",
          price: 79999,
          image: "/src/assets/images/sneakers1.png",
          category: "Shoes",
        },
        {
          id: 5,
          name: "Formal Suit",
          description: "Tailored formal suit for a sharp look.",
          price: 19999,
          image: "/src/assets/images/suit.png",
          category: "Suit",
        },
        {
          id: 6,
          name: "Casual Hoodie",
          description: "Soft and comfortable hoodie for a relaxed day.",
          price: 59999,
          image: "/src/assets/images/hoddie.png",
          category: "Hoodie",
        },
        {
          id: 7,
          name: "Chinos",
          description: "Versatile chinos perfect for any occasion.",
          price: 45999,
          image: "/src/assets/images/trouser.png",
          category: "Pants",
        },
        {
          id: 8,
          name: "Polo Shirt",
          description: "Timeless polo shirt with a modern twist.",
          price: 29999,
          image: "/src/assets/images/poloMen.png",
          category: "Shirt",
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      // Filter products based on searchQuery
      return this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.category
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    searchProducts() {
      // Triggered when the search button is clicked
    },
  },
  setup() {
    const addToCart = inject("addToCart"); // Inject the cart logic

    // Add to cart with alert
    const addToCartWithAlert = (product) => {
      addToCart(product); // Add product to the cart
      alert(`${product.name} has been added to your cart!`); // Display success message
    };

    return {
      addToCartWithAlert, // Return the modified addToCart function
    };
  },
};
</script>

<style scoped>
.card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.container {
  min-height: 100vh;
}
</style>
