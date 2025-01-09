<template>
    <div class="container mt-5 pt-5">
      <div v-if="post">
        <h3 class="text-center text-secondary mb-4">{{ post.title }}</h3>
        <img :src="post.img" class="img-fluid mb-4" alt="blog image" />
        <p>{{ post.body }}</p>
      </div>
      <div v-else>
        <p class="text-center">Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BlogPostView",
    data() {
      return {
        post: null,
      };
    },
    created() {
      const postId = this.$route.params.id;
      const posts = [
        {
          id: "1",
          title: "Summer in the city",
          img: "https://assets.vogue.com/photos/674c9c8284b79c14de024dbb/4:3/w_640,c_limit/VOGUE_SHOPPING_17_2920_SL.jpg",
          body: "Lorem ipsum dolor sit abet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vel velit faucibus semper.l",
        },
        {
          id: "2",
          title: "Winter in the mountains",
          img: "https://assets.vogue.com/photos/6740fe7bd361127f6c452ba5/4:3/w_640,c_limit/240506_LY_03_058_v2_hr.jpg",
          body: "Cras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolor.Cras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolorCras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolorCras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolorCras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolorCras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolorCras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolorCras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolorCras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolorCras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolorCras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolorCras pulvinar, sem at vulputate tincidunt, mauris velit consectetur enim, at elementum felis felis vel dolor",
        },
        {
          id: "3",
          title: "Spring in the garden",
          img: "https://assets.vogue.com/photos/672e2d1f51ed3d06b409ce89/4:3/w_640,c_limit/GettyImages-1996272948.jpg",
          body: "Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.",
        },
        {
            id: "4",
            title: "Autumn in the forest",
            img: "https://assets.vogue.com/photos/6391f132c2cfadca4e91e6e5/4:3/w_640,c_limit/SHOT_031_2946.jpeg",
            body: "Vestibulum non orci in justo tristique ultricies. Nulla facilisi. Sed vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.",
        },
        {
          id: "5",
          title: "Holiday in the sea",
          img: "https://assets.vogue.com/photos/6737bb08765df3cd2ac9d422/4:3/w_640,c_limit/16_7.jpg",
          body: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.",
        },
        {
          id: "6",
          title: "Climate change in the sky",
          img: "https://assets.vogue.com/photos/641b14d47e246afb821f6a60/4:3/w_1920,c_limit/05.%20Runway,Dress,CHANEL,spring2019HC.jpg",
          body: "In hac habitasse platea dictumst. Sed vel justo vel velit faucibus semper. Duis vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.Morbi lobortis dui non ex lobortis, non tincidunt neque ullamcorper. Donec vel justo vel velit faucibus semper.",
        },
      ];
      this.post = posts.find((post) => post.id === postId);
    },
  };
  </script>
  