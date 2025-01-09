<template>
    <div class="container mt-5 pt-5">
      <h2 class="text-center mb-4">Contact Us</h2>
      <div class="row">
        <!-- Contact Form -->
        <div class="col-md-6 mb-4">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-control"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-secondary w-100">Submit</button>
          </form>
        </div>
  
        <div class="col-md-6">
          <h5>Contact Information</h5>
          <p><strong>Phone:</strong> +234 9013 799 068</p>
          <p><strong>Email:</strong> bellosulaimon177@gmail.cm</p>
          <p><strong>Address:</strong> 123 Ibadan RD, Ijebu-Ode, Ogunstate, Nigeria</p>
          <p><strong>Hours:</strong> Mon-Fri: 9 AM - 6 PM</p>
          <h5>Follow Us</h5>
          <div>
            <a href="#" class="btn btn-outline-secondary btn-sm me-2">Facebook</a>
            <a href="#" class="btn btn-outline-secondary btn-sm me-2">Twitter</a>
            <a href="#" class="btn btn-outline-secondary btn-sm">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        alert(`Thank you, ${this.form.name}! Your message has been sent.`);
        this.form.name = "";
        this.form.email = "";
        this.form.subject = "";
        this.form.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  </style>
  