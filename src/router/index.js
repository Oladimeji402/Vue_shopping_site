import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactVeiws from '@/views/contactViews.vue'
import MenClothing from '@/views/menClothing.vue'
import ChildrenVeiws from '@/views/childrenVeiws.vue'
import signUp from '@/views/signUp.vue'
import login from '@/views/login.vue'
import accesories from '@/views/accesories.vue'
// import blog from '@/views/blog.vue'
import aboutusView from '@/views/aboutusView.vue'
import FAQ from "@/views/faqView.vue"
import cartView from '@/views/cartView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import AuthView from '@/views/AuthView.vue'
// import Product from '@/components/components/product.vue';
// import FeaturedProduct from '@/components/components/featuredProduct.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactVeiws,
    },
    {
      path: '/shop',
      name: 'menClothing',
      component: MenClothing,
    }, 
    {
      path: '/kids',
      name: 'kids',
      component: ChildrenVeiws,
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: accesories,
    },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: blog,
    // },
    {
      path: '/signup',
      name: 'signup',
      component: signUp,
    },
    {
      path: '/login',
      name: 'login',
      component: AuthView,
    },
    {
      path: "/Aboutus",
      name: "aboutusView",
      component: aboutusView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cartView,
    },
    {
      path: '/BlogView',
      name: 'BlogView',
      component: BlogView,
    },
    {
      path: "/post/:id", 
      name: "BlogPost", 
      component: BlogPostView,
    }

    // {
    //   path: "/shop/featured",
    //   name: "FeaturedProducts",
    //   component: FeaturedProducts,
    // },
    // // {
    //   path: "/shop/:id",
    //   name: "Product",
    //   component: Product,
    // props: true, // Enable passing route params as props
   // },
  ],
})

export default router
