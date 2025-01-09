<template>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-header bg-secondary text-white text-center">
              <h4>Login</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Enter your email"
                    v-model="email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="Enter your password"
                    v-model="password"
                    required
                  />
                </div>
                <div v-if="errorMessage" class="text-danger mb-3">
                  {{ errorMessage }}
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-center">
              <p>
                Don't have an account?
                <router-link to="/signup">Sign up here</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="modal.show" class="modal-backdrop">
        <div class="modal-content">
          <p>{{ modal.message }}</p>
          <button class="btn btn-secondary mt-3" @click="modal.show = false">Close</button>
        </div>
      </div>
    </div>
    
    <Auth />
  </template>
  
  <script>
  import Auth from './AuthView.vue'  
  export default {
    name: "LoginPage",
    data() {
      return {
        email: "",
        password: "",
        errorMessage: "",
        modal: {
          show: false,
          message: "",
        },
        component:{
          Auth,
        }
      };
    },
    methods: {
      handleLogin() {
        const storedUserData = localStorage.getItem("userData");
  
        if (!storedUserData) {
          this.showModal("No user found. Please sign up first.");
          return;
        }
  
        const userData = JSON.parse(storedUserData);
  
        // Check if email and password match
        if (this.email === userData.email && this.password === userData.password) {
          this.showModal("Login Successful!");
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userName", userData.name);
          // Redirect to home or dashboard after a delay
          setTimeout(() => this.$router.push("/"), 1500);
        } else {
          this.showModal("Invalid email or password. Please try again.");
        }
      },
      showModal(message) {
        this.modal.message = message;
        this.modal.show = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 50px;
  }
  
  .card {
    border-radius: 8px;
  }
  
  .card-header {
    font-weight: bold;
  }
  
  .btn-primary {
    background-color: #767676;
    border: none;
  }
  
  .btn-primary:hover {
    background-color: #767676;
  }
  
  .text-danger {
    font-size: 0.9rem;
  }
  
  
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  