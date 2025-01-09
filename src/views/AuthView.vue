<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-dar text-white text-center">
            <h4>Sign In</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label fw-bold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Enter your email"
                  v-model="email"
                  :disabled="loading"
                  required
                />
              </div>
              <div class="d-grid gap-2">
                <button 
                  type="submit" 
                  class="button primary block" 
                  :disabled="loading"
                >
                  {{ loading ? 'Loading...' : 'Send Magic Link' }}
                </button>
                <div class="text-center mt-3">
                  <p class="mb-0">Don't have an account?</p>
                  <router-link to="/signUp" class="text-primary fw-bold">Sign Up</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase'
import Fire from '@/lib/sweetalert'
import { useRoute } from 'vue-router'

export default {
  name: 'AuthView',
  data() {
    return {
      loading: false,
      email: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        this.loading = true

        const { data: { users }, error } = await supabase.auth.admin.listUsers()

        const user = users.find(u => u.email === this.email)


        if (user) {
          const { error } = await supabase.auth.signInWithOtp({
            email: this.email
          })
          if (error) throw error
          Fire('Check your email for the login link!', "", "success")
        } else {
          Fire('Wrong credentials', "", "error")
        }
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.card {
  border: none;
  border-radius: 10px;
  margin-top: 80px;
}

.card-header {
  border-radius: 10px 10px 0 0;
  padding: 1.5rem;
}

.button {
  padding: 0.8rem;
  font-weight: 500;
  width: 100%;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.button.primary {
  background-color: #333;
  color: white;
}

.button.primary:hover {
  background-color: #555;
}

.button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.form-control:focus {
  border-color: #333;
  box-shadow: 0 0 0 0.2rem rgba(51, 51, 51, 0.25);
}
</style>