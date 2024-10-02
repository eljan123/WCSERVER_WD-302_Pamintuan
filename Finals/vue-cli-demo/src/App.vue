<template>
  <div id="app">
    <!-- Include the AboutMe component -->
    <about-me></about-me>
  </div>
</template>

<script>
// Importing the AboutMe component
import AboutMe from './AboutMe.vue';

export default {
  name: 'app',
  components: {
    AboutMe 
  },
};
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: #333;
  background-color: #f4f7f6;
  margin: 0;
  padding: 0;
}

h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #0073e6;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
