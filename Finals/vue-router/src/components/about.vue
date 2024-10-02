<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <div class="content">
      <p class="intro">
        This project focuses on learning server-side development with Node.js and building user interfaces with Vue.js.
        Node.js is a powerful tool for developing back-end services, while Vue.js provides a flexible framework for front-end development.
        Together, they enable the creation of dynamic and responsive web applications.
      </p>
      <div class="details">
        <h2 v-if="filteredNodeDetails.length">About Node.js</h2>
        <p v-if="filteredNodeDetails.length">
          {{ filteredNodeDetails[0].description }}
        </p>
        <h2 v-if="filteredVueDetails.length">About Vue.js</h2>
        <p v-if="filteredVueDetails.length">
          {{ filteredVueDetails[0].description }}
        </p>
        <h2>Project Goals</h2>
        <ul>
          <li v-for="goal in filteredGoals" :key="goal">{{ goal }}</li>
        </ul>
      </div>

      <footer class="footer">
      <div class="container">
        <span class="text-muted">Created by: Eljan Pamintuan | WD - 302</span>
      </div>
      </footer>
      <p v-if="!filteredNodeDetails.length && !filteredVueDetails.length && !filteredGoals.length">
        No results found for "{{ searchQuery }}"
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: ['searchQuery'],
  data() {
    return {
      title: 'About',
      nodeDetails: [
        {
          title: 'About Node.js',
          description: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It utilizes an event-driven, non-blocking I/O model, making it efficient and suitable for building scalable network applications. Node.js is particularly well-suited for building APIs, real-time applications, and microservices, allowing developers to create robust back-end solutions.'
        }
      ],
      vueDetails: [
        {
          title: 'About Vue.js',
          description: 'Vue.js is a progressive JavaScript framework for building user interfaces. Its core library focuses on the view layer only, allowing for easy integration with other libraries or existing projects. Vue’s declarative rendering and component-based architecture enable developers to create complex user interfaces with ease and maintainability. Additionally, Vue.js supports reactive data binding, providing a seamless experience when updating the UI.'
        }
      ],
      projectGoals: [
        'Understand the fundamentals of server-side and client-side development.',
        'Explore the synergy between Node.js and Vue.js to create full-stack applications.',
        'Implement best practices in coding, including modularity and code reusability.',
        'Develop a solid understanding of RESTful API design and integration.'
      ]
    };
  },
  computed: {
    filteredNodeDetails() {
      return this.nodeDetails.filter(detail =>
        detail.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        detail.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredVueDetails() {
      return this.vueDetails.filter(detail =>
        detail.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        detail.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredGoals() {
      return this.projectGoals.filter(goal =>
        goal.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 20px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.intro {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  max-width: 800px;
}

.details {
  text-align: left;
  max-width: 800px;
}

h2 {
  font-size: 1.8rem;
  color: #42b983;
  margin-bottom: 15px;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
}

p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 10px 0;
}

li {
  font-size: 1rem;
  color: #555;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
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
