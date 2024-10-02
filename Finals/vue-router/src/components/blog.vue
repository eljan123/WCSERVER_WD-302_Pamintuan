<template>
  <div class="blog">
    <h1>{{ title }}</h1>
    <p class="intro">{{ intro }}</p>

    <section class="facts" v-if="filteredNodeFeatures.length">
      <h2>{{ nodeTitle }}</h2>
      <ul>
        <li v-for="feature in filteredNodeFeatures" :key="feature.title">
          🔹 <strong>{{ feature.title }}:</strong> {{ feature.description }}
        </li>
      </ul>
    </section>

    <section class="facts" v-if="filteredVueFeatures.length">
      <h2>{{ vueTitle }}</h2>
      <ul>
        <li v-for="feature in filteredVueFeatures" :key="feature.title">
          🔹 <strong>{{ feature.title }}:</strong> {{ feature.description }}
        </li>
      </ul>
    </section>

    <section class="summary">
      <h2>{{ summaryTitle }}</h2>
      <p>{{ summaryText }}</p>
    </section>

    <footer class="footer">
      <div class="container">
        <span class="text-muted">Created by: Eljan Pamintuan | WD - 302</span>
      </div>
    </footer>

    <p v-if="!filteredNodeFeatures.length && !filteredVueFeatures.length">
      No blog posts found for "{{ searchQuery }}"
    </p>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  props: ['searchQuery'],
  data() {
    return {
      title: 'Blog',
      intro: 'Explore the remarkable world of Node.js and Vue.js, two powerful technologies that are reshaping web development. Their unique features and capabilities enable developers to create fast, efficient, and scalable applications that enhance user experiences.',
      nodeTitle: 'Key Features of Node.js',
      vueTitle: 'Key Features of Vue.js',
      summaryTitle: 'Why Choose Node.js and Vue.js?',
      nodeFeatures: [
        {
          title: 'Asynchronous and Event-Driven',
          description: 'Node.js operates on a non-blocking I/O model, allowing multiple operations to occur simultaneously without delays.'
        },
        {
          title: 'Single Programming Language',
          description: 'Developers can use JavaScript for both client-side and server-side coding, ensuring a consistent coding environment.'
        },
        {
          title: 'Rich Ecosystem',
          description: 'With npm (Node Package Manager), developers can access a vast repository of libraries and frameworks to speed up development.'
        },
        {
          title: 'Microservices Architecture',
          description: 'Node.js is perfect for building microservices, making it easier to scale applications as they grow.'
        },
        {
          title: 'Cross-Platform Support',
          description: 'Node.js runs on Windows, Linux, and macOS, making it suitable for developers across different platforms.'
        }
      ],
      vueFeatures: [
        {
          title: 'Reactive Data Binding',
          description: 'Vue.js automatically updates the view whenever the model changes, ensuring a dynamic user experience.'
        },
        {
          title: 'Component-Based Architecture',
          description: 'Build encapsulated components that manage their state, making it easier to reuse and maintain code.'
        },
        {
          title: 'Transition Effects',
          description: 'Vue.js provides built-in directives to create stunning transition effects when elements enter or leave the DOM.'
        },
        {
          title: 'Flexible Integration',
          description: 'Easily integrate Vue.js into projects with other libraries or existing applications without requiring a complete overhaul.'
        },
        {
          title: 'Virtual DOM',
          description: 'Vue.js uses a Virtual DOM to optimize rendering performance and efficiently update only the components that have changed.'
        }
      ],
      summaryText: 'The combination of Node.js and Vue.js offers a powerful full-stack development experience. Node.js provides a robust server-side foundation, while Vue.js delivers a dynamic client-side experience. Together, they enable developers to build modern web applications that are fast, responsive, and easy to maintain. With their strong community support and continuous improvement, learning and implementing these technologies can significantly enhance your web development skills.'
    };
  },

  computed: {
    filteredNodeFeatures() {
      if (this.searchQuery) {
        return this.nodeFeatures.filter(feature =>
          feature.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          feature.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.nodeFeatures;
    },
    filteredVueFeatures() {
      if (this.searchQuery) {
        return this.vueFeatures.filter(feature =>
          feature.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          feature.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.vueFeatures;
    }
  }
};
</script>

<style scoped>
.intro {
  text-align: center;
}

.blog {
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

.intro {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
}

.facts {
  text-align: left;
  margin: 20px auto;
  max-width: 800px;
}

h2 {
  font-size: 1.8rem;
  color: #42b983;
  margin-bottom: 15px;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
}

strong {
  color: #333;
}

.summary {
  text-align: left;
  margin: 30px auto;
  max-width: 800px;
}

.summary p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
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
