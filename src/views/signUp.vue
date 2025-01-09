<template>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-header bg-secondary text-white text-center">
              <h4>Sign Up</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleSignUp">
                <div class="mb-3">
                  <label for="name" class="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Enter your full name"
                    v-model="user.name"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Enter your email"
                    v-model="user.email"
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
                    v-model="user.password"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    class="form-control"
                    placeholder="Re-enter your password"
                    v-model="confirmPassword"
                    required
                  />
                  <div v-if="passwordMismatch" class="text-danger mt-1">
                    Passwords do not match.
                  </div>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-center">
              <p>
                Already have an account?
                <router-link to="/login">Login here</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Custom Modal -->
      <div v-if="modal.show" class="modal-backdrop">
        <div class="modal-content">
          <p>{{ modal.message }}</p>
          <button class="btn btn-secondary mt-3" @click="modal.show = false">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { supabase } from '@/supabase';
  export default {
    name: "SignUpPage",
    data() {
      return {
        user: {
          name: "",
          email: "",
          password: "",
        },
        confirmPassword: "",
        modal: {
          show: false,
          message: "",
        },
      };
    },
    computed: {
      passwordMismatch() {
        return this.user.password && this.confirmPassword !== this.user.password;
      },
    },
    methods: {
      async handleSignUp() {
        if (this.passwordMismatch) {
          this.showModal("Passwords do not match. Please try again.");
          return;
        }
        
        const { data, error } = await supabase.auth.signUp({
          email: this.user.name,
          password: this.user.password,
        })


        // Redirect to home or login page after a delay
        setTimeout(() => this.$router.push("/login"), 1500);
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
  