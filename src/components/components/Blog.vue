<template>
    <section class="blog-section py-5 bg-light text-center">
      <div class="container">
        <h2 class="mb-5 text-secondary">Our Latest Blog Posts</h2>
        <div class="row g-4">
          <div
            class="col-md-6 col-lg-4 grayscale-hover"
            v-for="post in blogPosts"
            :key="post.id"
          >
            <div class="card shadow-sm h-100">
              <img
                :src="post.image"
                :alt="post.title"
                class="card-img-top border border-secondary"
              />
              <div class="card-body">
                <h3 class="card-title text-secondary h5">{{ post.title }}</h3>
                <p class="card-text text-muted">{{ post.excerpt }}</p>
                <router-link
                  :to="`/blog/${post.id}`"
                  class="btn btn-outline-secondary"
                >
                  Read More
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  

  <script>
export default {
  name: "BlogSection",
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "How to Style Casual Wear for Men",
          image: "/src/assets/images/Blogimg.png",
          excerpt: "Learn how to style your casual wardrobe with these simple tips. Perfect for any occasion.",
        },
        {
          id: 2,
          title: "Top Fashion Trends for This Season",
          image: "/src/assets/images/Blogimg2.png",
          excerpt: "Stay up-to-date with the latest trends and elevate your fashion game for the season.",
        },
        {
          id: 3,
          title: "10 Wardrobe Essentials for Every Man",
          image: "/src/assets/images/Blogimg3.png",
          excerpt: "Discover the must-have items every man should own in his wardrobe to stay stylish and versatile.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;   
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.25rem;
  color: #767676;
}

.card-text {
  font-size: 1rem;
  color: #555; 
}

.card-body .btn {
  margin-top: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.card-body .btn:hover {
  background-color: #767676; 
  color: white;
}
.grayscale-hover img {
  filter: grayscale(0%);
  transition: filter 0.3s ease;
}

.grayscale-hover:hover img {
  filter: grayscale(100%);
}


</style>
