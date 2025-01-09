<template>
  <header :class="{'navbar-scrolled': scrolled}" class="navbar navbar-expand-lg bg-dar shadow-sm px-3">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <img src="/src/assets/images/logo1.png" alt="Logo" class="logo" />
      </router-link>

      <!-- Toggle Button for Mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link fw-bold">HOME</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link
              to="/shop"
              class="nav-link dropdown-toggle fw-bold"
              id="shopDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SHOP
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="shopDropdown">
              <li>
                <router-link to="/shop" class="dropdown-item">Men's Clothing</router-link>
              </li>
              <li>
                <router-link to="/kids" class="dropdown-item">Kids' Clothing</router-link>
              </li>
              <li>
                <router-link to="/accessories" class="dropdown-item">Accessories</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <router-link
              to="/pages"
              class="nav-link dropdown-toggle fw-bold"
              id="pagesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              PAGES
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="pagesDropdown">
              <li>
                <router-link to="/Aboutus" class="dropdown-item">About Us</router-link>
              </li>
              <li>
                <router-link to="/faq" class="dropdown-item">FAQ</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/BlogView" class="nav-link fw-bold">BLOG</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link fw-bold">CONTACT US</router-link>
          </li>
        </ul>

        <div class="d-flex align-items-center gap-3">
          <!-- Conditional Account Dropdown -->
          <div v-if="isLoggedIn === 'true'" class="dropdown">
            <button
              class="btn btn-link text-dark dropdown-toggle"
              id="accountDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ userName }}
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
              <li>
                <button class="dropdown-item" @click="logout">Logout</button>
              </li>
            </ul>
          </div>
          <div v-else>
            <div class="dropdown">
              <button
                class="btn btn-link text-dark dropdown-toggle"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                <li>
                  <router-link to="/login" class="dropdown-item">Login</router-link>
                </li>
                <li>
                  <router-link to="/signUp" class="dropdown-item">Sign Up</router-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- Cart Icon -->
          <router-link to="/cart" class="text-dark position-relative">
            <i class="fas fa-shopping-cart"></i>
            <span
              v-if="cartCount > 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ cartCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { inject, ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'NavBar',

  data() {
    return {
      isLoggedIn: localStorage.getItem("isLoggedIn"),
      userName: localStorage.getItem("userName") ?? null,
    };
  },

  setup() {
    const cartCount = inject("cartCount", 0); 
    const scrolled = ref(false); // State for scroll detection

    // Scroll event listener to detect scroll position
    const onScroll = () => {
      scrolled.value = window.scrollY > 50; // Change navbar background after 50px scroll
    };

    onMounted(() => {
      window.addEventListener('scroll', onScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll);
    });

    const logout = () => {
      localStorage.setItem('isLoggedIn', false);
      localStorage.removeItem('userName');
      // Optionally redirect to login or home page
      window.location.href = '/login';
    };

    return { cartCount, logout, scrolled };
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: transparent; /* Initially transparent */
  transition: background-color 0.3s ease; /* Smooth transition on scroll */
}

.navbar-scrolled {
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white when scrolled */
}

.hero {
  background: url(https://htmldemo.net/reid/reid/assets/img/slider/slider13.jpg);
  background-size: cover;
  color: white;
  border-radius: 10px;
  padding: 3rem 1rem;
  margin-bottom: 2rem;
  position: relative;
}

.hero-content {
  align-content: center;
  justify-content: center;
  height: 100vh;
}

.hero-content h1 {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
.logo{
  height: 70px;
}
</style>