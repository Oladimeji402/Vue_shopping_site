<template>
  <div class="container mt-5 pt-5">
    <h1 class="text-center mb-4">Children's Clothing</h1>
    <p class="text-muted text-center mb-4">
      Discover our fun and comfortable range of clothing for kids of all ages.
    </p>

    <!-- Search Bar -->
    <div class="input-group mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Search for products (e.g., T-shirt, Shoes)"
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
  name: "ChildrenClothing",
  data() {
    return {
      searchQuery: "", // Bind search input
      products: [
        {
          id: 9,
          name: "Kids T-Shirt",
          description: "Soft cotton T-shirt with fun prints.",
          price: 19999,
          image: "/src/assets/images/Kids1.png",
          category: "T-shirt",
        },
        {
          id: 10,
          name: "Denim Shorts",
          description: "Comfortable and durable denim shorts.",
          price: 24999,
          image: "/src/assets/images/Kids.png",
          category: "Shorts",
        },
        {
          id: 11,
          name: "Hooded Jacket",
          description: "Warm hooded jacket for chilly days.",
          price: 49999,
          image: "/src/assets/images/hoddie.png",
          category: "Jacket",
        },
        {
          id: 12,
          name: "Sneakers",
          description: "Stylish and supportive sneakers for kids.",
          price: 39999,
          image: "/src/assets/images/Sneeckers.png",
          category: "Shoes",
        },
        {
          id: 13,
          name: "Formal Outfit",
          description: "Adorable formal outfit for special occasions.",
          price: 59999,
          image: "/src/assets/images/Attire.png",
          category: "Suit",
        },
        {
          id: 14,
          name: "Pajamas Set",
          description: "Comfortable pajama set for a good night’s sleep.",
          price: 29999,
          image: "/src/assets/images/pj.png",
          category: "Pajamas",
        },
        {
          id: 15,
          name: "Raincoat",
          description: "Bright and waterproof raincoat.",
          price: 34999,
          image: "/src/assets/images/Rain.png",
          category: "Outerwear",
        },
        {
          id: 16,
          name: "Sun Hat",
          description: "Protective and stylish sun hat for sunny days.",
          price: 14999,
          image: "/src/assets/images/Sunhat.png",
          category: "Accessories",
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
      // Can be extended if needed for advanced filtering logic
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
