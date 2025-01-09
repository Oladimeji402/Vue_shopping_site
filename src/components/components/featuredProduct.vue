  <template>
    <section class="featured-products py-5 bg-light text-center">
      <div class="container">
        <h2 class="mb-5 text-secondary">Featured Products</h2>
        <div class="row g-4 justify-content-center">
          <div
            class="col-sm-6 col-md-4 col-lg-3"
            v-for="product in featuredProducts"
            :key="product.id"
          >
            <div  v-tilt="{ max: 25, speed: 400, glare: true, maxGlare: 0.5 }" class="card shadow-sm h-100">
              <img
                :src="product.image"
                :alt="product.name"
                class="card-img-top border border-secondary"
              />
              <div class="card-body">
                <h3 class="card-title text-secondary h5">{{ product.name }}</h3>
                <p class="card-text text-secondary fw-bold">{{ product.price }}</p>
                <router-link
                  :to="`/shop/${product.id}`"
                  class="btn btn-outline-secondary"
                >
                  View Details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script>
  export default {
    name: "FeaturedProducts",
    data() {
      return {
        featuredProducts: [
          {
            id: 1,
            name: "T-shirt",
            price: " ₦19999",
            image: "/src/assets/images/shirt.png",
          },
          {
            id: 2,
            name: "Jeans",
            price: " ₦39999",
            image: "/src/assets/images/jeans.png",
          },
          {
            id: 3,
            name: "Sneakers",
            price: " ₦49999",
            image: "/src/assets/images/sneakers.png",
          },
        ],
      };
    },
  };
  </script>
 