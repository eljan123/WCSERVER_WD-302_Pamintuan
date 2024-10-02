<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <div class="content">
      <section class="language-intro">
        <h2>Introduction to Node.js</h2>
        <p>{{ nodeJsDescription }}</p>
        <ul>
          <li v-for="(item, index) in filteredNodeDetails" :key="index">{{ item }}</li>
        </ul>
      </section>
      <section class="language-intro">
        <h2>Introduction to Vue.js</h2>
        <p>{{ vueJsDescription }}</p>
        <ul>
          <li v-for="(item, index) in filteredVueDetails" :key="index">{{ item }}</li>
        </ul>
      </section>
      <section class="combined">
        <h2>Together: Node.js and Vue.js</h2>
        <p>{{ combinedDescription }}</p>
      </section>
      <p v-if="noResults">No results found for "{{ searchQuery }}"</p>
    </div>

    <footer class="footer">
      <div class="container">
        <span class="text-muted">Created by: Eljan Pamintuan | WD - 302</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: ['searchQuery'], 
  data() {
    return {
      title: 'Introductions',
      nodeJsDescription: "Node.js is a powerful JavaScript runtime that allows developers to build scalable network applications. Its event-driven architecture is ideal for I/O-heavy tasks, making it a popular choice for real-time applications like chat apps and online gaming. Node.js uses a single-threaded model with event looping, which makes it efficient for handling multiple requests simultaneously.",
      vueJsDescription: "Vue.js is a progressive framework for building user interfaces. It is designed to be incrementally adoptable, allowing developers to integrate it with other projects. Its component-based approach promotes reusability and maintains clean code, making it a favorite among developers. Vue provides a reactive data binding system that ensures the view automatically updates whenever the underlying model changes.",
      combinedDescription: "When combined, Node.js and Vue.js create a powerful full-stack development environment. Developers can build fast and responsive applications using JavaScript for both the front-end and back-end, simplifying the development process and enhancing productivity. This synergy allows for seamless data flow between client and server, fostering a more cohesive development experience.",
      nodeDetails: [
        '🔹 Built on Chrome\'s V8 JavaScript engine',
        '🔹 Non-blocking I/O model for high concurrency',
        '🔹 Perfect for building APIs and real-time applications',
        '🔹 Extensive package ecosystem via npm',
        '🔹 Supports a variety of frameworks like Express.js for building web applications',
        '🔹 Enables server-side rendering for improved SEO and performance',
        '🔹 Great community support and vast libraries for rapid development'
      ],
      vueDetails: [
        '🔹 Progressive framework for building user interfaces',
        '🔹 Component-based architecture for reusability',
        '🔹 Easy to integrate with other projects or libraries',
        '🔹 Reactive data binding for dynamic interfaces',
        '🔹 Extensive ecosystem with Vue Router for routing and Vuex for state management',
        '🔹 Virtual DOM for optimized rendering and performance',
        '🔹 Strong community support and rich documentation for developers'
      ]
    };
  },
  computed: {
    filteredNodeDetails() {
      return this.nodeDetails.filter(detail =>
        detail.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredVueDetails() {
      return this.vueDetails.filter(detail =>
        detail.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    noResults() {
      return (
        !this.filteredNodeDetails.length &&
        !this.filteredVueDetails.length &&
        this.searchQuery.length > 0
      );
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.language-intro {
  margin-bottom: 30px;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.language-intro h2 {
  color: #42b983;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
}

li {
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
}

.combined {
  margin-top: 20px;
}

.combined h2 {
  color: #42b983;
}

a {
  color: #42b983;
}

.footer {
  background-color: #dfdfdf; 
  color: rgb(0, 0, 0); 
  text-align: center; 
  padding: 10px 0; 
  position: relative; 
  bottom: 0; 
  width: 100%; 
}

.footer .container {
  max-width: 1200px; 
  margin: 0 auto; 
}
</style>
