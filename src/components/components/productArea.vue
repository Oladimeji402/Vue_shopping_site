<template>
  <section class="product-area">
    <div class="container">
      <h2 class="section-title">New Arrivals</h2>
      <div class="product-grid">
        <div class="product-card" v-for="product in products" :key="product.id"  v-tilt="{ max: 25, speed: 400, glare: true, maxGlare: 0.5 }">
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />
            <span v-if="product.isNew" class="badge new">New</span>
            <span v-if="product.discount" class="badge discount"
              >-{{ product.discount }}%</span
            >
          </div>
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">
              <span v-if="product.discount" class="old-price"
                > ₦{{ product.oldPrice }}</span
              >
              ₦{{ product.price }}
            </p>
            <button class="add-to-cart" @click="addToCart(product)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <!-- <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: "Stylish T-Shirt",
            image: "/src/assets/images/StylishTop.png",
            price: 88.0,
            oldPrice: 120.0,
            discount: 30,
            isNew: true,
          },
          {
            id: 2,
            name: "Casual Top",
            image: "/src/assets/images/top.png",
            price: 68.0,
            oldPrice: null,
            discount: null,
            isNew: false,
          },
          {
            id: 3,
            name: "Set of Pjamas for men",
            image: "/src/assets/images/Pjmask.png",
            price: 98.0,
            oldPrice: null,
            discount: null,
            isNew: true,
          },
        ],
      };
    },
  };
  </script> -->
  <script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Stylish T-Shirt",
          image: "./src/assets/images/StylishTop.png",
          price: 88000,
          oldPrice: 120000,
          discount: 30,
          isNew: true,
        },
        {
          id: 2,
          name: "Casual Top",
          image: "./src/assets/images/top.png",
          price: 68000,
          oldPrice: null,
          discount: null,
          isNew: false,
        },
        {
          id: 3,
          name: "Set of Pjamas for men",
          image: "./src/assets/images/Pjmask.png",
          price: 98000,
          oldPrice: null,
          discount: null,
          isNew: true,
        },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      alert(`${product.name} has been added to your cart!`);
    },
  },

};
</script>
  
  <style scoped>
.product-area {
  background-color: #f9f9f9;
  padding: 2rem 1rem;
}
.section-title {
  text-align: center;
  font-size: 2rem;
  color: #767676;
  margin-bottom: 2rem;
  font-weight: bold;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.product-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
.product-image {
  position: relative;
}
.product-image img {
  width: 100%;
  height: auto;
  display: block;
}
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #767676;
  color: white;
  padding: 5px 10px;
  font-size: 0.8rem;
  border-radius: 5px;
}
.badge.new {
  background-color: #4caf50;
}
.badge.discount {
  background-color: #e53935;
}
.product-info {
  padding: 1rem;
  text-align: center;
}
.product-name {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.product-price {
  font-size: 1.1rem;
  color: #767676;
}
.old-price {
  text-decoration: line-through;
  color: #e53935;
  margin-right: 0.5rem;
}

.add-to-cart {
  margin-top: 1rem;
  background-color:  #767676;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.add-to-cart:hover {
  background-color:  #5a5a5a;;
  transform: scale(1.05);
}

</style>
  