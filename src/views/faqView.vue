<template>
    <div class="container mt-5 pt-5">
      <h1 class="text-center display-4 text-secondary mb-4">Frequently Asked Questions</h1>
      
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link text-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What sizes do you offer?
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordion"
          >
            <div class="card-body">
              We offer a wide range of sizes for both men and children, from XS to XXL for men and from 2T to 14 for children. Please check the size guide on each product page for more details.
            </div>
          </div>
        </div>
  
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button
                class="btn btn-link text-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Do you offer international shipping?
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordion"
          >
            <div class="card-body">
              Yes, we offer international shipping to a variety of countries. Shipping fees and delivery times will vary based on your location. Please refer to our Shipping Information page for more details.
            </div>
          </div>
        </div>
  
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button
                class="btn btn-link text-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Can I return or exchange items?
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordion"
          >
            <div class="card-body">
              Yes, we have a 30-day return and exchange policy. Items must be unused, in their original condition, and with the tags attached. Please visit our Returns & Exchanges page for full details on how to process returns.
            </div>
          </div>
        </div>
  
        <div class="card">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button
                class="btn btn-link text-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How can I track my order?
              </button>
            </h5>
          </div>
          <div
            id="collapseFour"
            class="collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordion"
          >
            <div class="card-body">
              Once your order is shipped, you will receive a tracking number via email. You can track your order on our website or through the shipping carrier's website.
            </div>
          </div>
        </div>
  
        <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button
                class="btn btn-link text-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Do you offer gift cards?
              </button>
            </h5>
          </div>
          <div
            id="collapseFive"
            class="collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordion"
          >
            <div class="card-body">
              Yes! We offer digital gift cards in various amounts. You can purchase them directly from our website and have them emailed to you or your recipient.
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FAQ",
  };
  </script>
  
  <style scoped>
  h1 {
    color: #8e2157;
  }
  
  .card-header {
    background-color: #f8f9fa;
  }
  
  .btn-link {
    text-decoration: none;
    font-weight: bold;
  }
  
  .card-body {
    color: #767676;
    font-size: 1rem;
  }
  
  .card-body p {
    margin-bottom: 0;
  }
  </style>
  