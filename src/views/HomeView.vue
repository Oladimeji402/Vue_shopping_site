<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="hero-content auto-padding">
              <h1>Welcome to Trendify Kids & Men!</h1>
              <p>
                Your one-stop shop for men's, kids' clothing, and accessories.
              </p>
              <router-link to="/shop" class="cta-button">Shop Now</router-link>
            </div>
          </div>
          <div class="col-md-6">
            
          </div>
        </div>
      </div>
    </section>

  </div>
  <productArea />
  <featuredProduct />
  <Blog />
</template>

<script>
import productArea from '@/components/components/productArea.vue';
import featuredProduct from '@/components/components/featuredProduct.vue';
import Blog from '@/components/components/Blog.vue';
export default {
  name: "Home",
  components: {
    productArea,
    featuredProduct,
    Blog
  },
  data() {
    return {
      //  categories and their information
      categories: [
        {
          name: "Men's Clothing",
          link: "/shop/men",
          image: "../assets/Men1.png", 
        },
        {
          name: "Kids' Clothing",
          link: "/shop/kids", 
          image: "../assets/Men1.png", 
        },
        {
          name: "Accessories",
          link: "/shop/accessories", 
          image: "../assets/Men1.png",
        },
      ],
      product: {
        id: 1,
        name: "T-shirt",
        price: "$19.99",
        description: "A stylish, comfortable t-shirt for every occasion.",
        image: "../assets/Men1.png",
      },
    };
  },
};
</script>

<style scoped>
/* .hero {
  background: url(https://htmldemo.net/reid/reid/assets/img/slider/slider13.jpg);
  background-size: cover;

} */
.hero-content{
  align-content: center;
  justify-content: center;
  height: 100vh;
}

.home {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  /* padding: 0 1rem; */
}

.hero {
  /* background: linear-gradient(to right, #767676, #b3b3b3); */
  background: url(https://htmldemo.net/reid/reid/assets/img/slider/slider13.jpg);
  background-size: cover;
  color: white;
  border-radius: 10px;
  padding: 3rem 1rem;
  margin-bottom: 2rem;
}

a{
  text-decoration: none;
}
.hero-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.hero-content h1 {
  /* font-size: 1.5rem; */
  /* margin-bottom: 1rem; */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Dark shadow */  

}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Dark shadow */  
}
.cta-button {
  background: white;
  color: #767676;
  border-radius: 50px;
  padding: 12px 25px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.cta-button:hover {
  background: #e0e0e0;
  color: #767676;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.categories {
  text-align: center;
  margin: 2rem 0;
}
.section-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #767676;
}
.category-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}
.category {
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.category:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.category-link {
  text-decoration: none;
  color: inherit;
}
.category-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.category-title {
  font-size: 1.2rem;
  color: #767676;
  font-weight: bold;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  .hero-content p {
    font-size: 1rem;
  }
  .category-grid {
    flex-direction: column;
  }
}
</style>
