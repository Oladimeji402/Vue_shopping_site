<template>
    <footer class="footer bg-dark text-light">
      <div class="container py-5">
        <div class="row">
          <!-- About Section -->
          <div class="col-md-3">
            <h5 class="fw-bold">About Us</h5>
            <p>
              Trendify Kids & Men is your go-to shop for premium men's and children's clothing. We bring style, comfort, and affordability together in one place.
            </p>
          </div>
  
          <!-- Quick Links Section -->
          <div class="col-md-3">
            <h5 class="fw-bold">Quick Links</h5>
            <ul class="list-unstyled">
              <li><router-link to="/" class="footer-link">Home</router-link></li>
              <li><router-link to="/shop" class="footer-link">Shop</router-link></li>
              <li><router-link to="/aboutus" class="footer-link">About Us</router-link></li>
              <li><router-link to="/contact" class="footer-link">Contact Us</router-link></li>
            </ul>
          </div>
  
          <!-- Customer Service Section -->
          <div class="col-md-3">
            <h5 class="fw-bold">Customer Service</h5>
            <ul class="list-unstyled">
              <li><router-link to="/faq" class="footer-link">FAQ</router-link></li>
              <li><router-link to="/returns" class="footer-link">Returns</router-link></li>
              <li><router-link to="/shipping" class="footer-link">Shipping</router-link></li>
              <li><router-link to="/terms" class="footer-link">Terms & Conditions</router-link></li>
            </ul>
          </div>
  
          <!-- Contact Info Section -->
          <div class="col-md-3">
            <h5 class="fw-bold">Contact Us</h5>
            <p><i class="fas fa-phone-alt"></i> +234-901-379-9068</p>
            <p><i class="fas fa-envelope"></i> support@trendify.com</p>
            <p><i class="fas fa-map-marker-alt"></i> Ogun State, Nigeria</p>
            <div class="social-icons mt-3">
              <a href="#" class="footer-link me-3"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="footer-link me-3"><i class="fab fa-twitter"></i></a>
              <a href="#" class="footer-link"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col text-center">
            <p class="mb-0">&copy; 2024 Trendify Kids & Men. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #ddd;
  }
  
  .footer h5 {
    color: #fff;
    margin-bottom: 1rem;
  }
  
  .footer-link {
    color: #ddd;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-link:hover {
    color: #e07a5f;
  }
  
  .social-icons a {
    font-size: 1.2rem;
    color: #ddd;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: #e07a5f;
  }
  
  .footer .container {
    max-width: 1200px;
  }
  </style>
  