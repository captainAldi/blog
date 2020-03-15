<!-- .vuepress/components/CustomLayout.vue -->
<template>
  <div class="custom-layout">
    <!-- .main-div is the block with white background -->
    <div class="main-div">
      <h1>About</h1>
    </div>

    <div class="card">
      <img src="https://i.ibb.co/Kh5ySN4/vue-banner.jpg" alt="Avatar" style="width:100%">
      <div class="container">
        <h4><b>Renaldi Yulvianda</b></h4>
        <p>Tech's Student & Engineer</p>
        <p style="text-align: right">Javascript and PHP Learner</p>
        <h4><b>Currently Interested On:</b></h4>
        <ul>
          <li>Vue JS</li>
          <li>Laravel</li>
          <li>React JS</li>
          <li>React Native</li>
        </ul>
      </div>
      <button>Contact</button>
    </div>

    <div class="main-div">
      <!-- <Content /> is to show the rendered markdown content of this page -->
      <Content class="content" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutLayout',
}
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #00cc66;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>