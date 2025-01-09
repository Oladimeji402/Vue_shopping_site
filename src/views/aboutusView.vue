<template>
    <div class="container mt-5 pt-5">
      <section class="about-us-header text-center">
        <h1 class="display-4 text-secondary">About Us</h1>
        <p class="lead">Welcome to <strong>{{ storeName }}</strong>, where fashion meets comfort for men and children. We're not just another clothing store; we are passionate about bringing you the latest trends, timeless classics, and high-quality apparel for every occasion.</p>
      </section>
  
      <section class="our-story mt-5">
        <h2 class="h3 text-secondary">Our Story</h2>
        <p>Founded with a vision to provide stylish and affordable clothing options for men and children, <strong>{{ storeName }}</strong> was born out of a desire to create a one-stop-shop for fashionable families. Whether you're looking for the perfect outfit for a special event or comfortable everyday wear, we are here to help you look and feel your best.</p>
      </section>
  
      <section class="what-we-offer mt-5">
        <h2 class="h3 text-secondary">What We Offer</h2>
        <p>We offer a wide range of carefully curated clothing options, from casual wear to formal attire, for both men and children. Our collections are designed to reflect the latest fashion trends while keeping comfort and durability in mind. We believe in high-quality materials and perfect fits that make every piece something to love.</p>
      </section>
  
      <section class="our-mission mt-5">
        <h2 class="h3 text-secondary">Our Mission</h2>
        <p>At <strong>{{ storeName }}</strong>, our mission is simple: to make fashion accessible, fun, and practical for everyone in the family. We aim to create an inclusive shopping experience, where you can find styles that suit your personality, preferences, and lifestyle.</p>
      </section>
  
      <section class="why-choose-us mt-5">
        <h2 class="h3 text-secondary">Why Choose Us?</h2>
        <ul class="list-unstyled">
          <li><i class="bi bi-check-circle-fill me-2"></i><strong>Trendy & Comfortable:</strong> Our clothing combines modern styles with everyday comfort.</li>
          <li><i class="bi bi-check-circle-fill me-2"></i><strong>Quality You Can Trust:</strong> We source the finest materials to ensure durability and comfort in every item.</li>
          <li><i class="bi bi-check-circle-fill me-2"></i><strong>Affordable Prices:</strong> Get the best value for your money without compromising on quality.</li>
          <li><i class="bi bi-check-circle-fill me-2"></i><strong>Family-Oriented:</strong> Our collections cater to men and children, making it easy to shop for your whole family.</li>
        </ul>
      </section>
  
      <section class="thank-you mt-5 text-center">
        <p>Thank you for choosing <strong>{{ storeName }}</strong>—where style is always in reach!</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
    data() {
      return {
        storeName: "Trendify Kids & Men", 
      };
    },
  };
  </script>
  
  <style scoped>
  .about-us-header h1,
  h2 {
    color: #767676;
  }
  
  p, ul {
    color: #767676;
    line-height: 1.6;
  }
  
  ul {
    margin-left: 1.5rem;
  }
  
  ul li {
    margin: 10px 0;
  }
  
  strong {
    color: #767676;
  }
  </style>
  