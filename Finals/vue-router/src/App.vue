<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">WCSERVER</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
          <form class="d-flex" @submit.prevent="handleSearch">
            <input v-model="searchQuery" class="form-control me-sm-2" type="search" placeholder="Search" required>
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <router-view :searchQuery="searchQuery"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      searchQuery: '', // Store the search input
    };
  },
  methods: {
    handleSearch() {
      // Emit the search query to the child components
      this.$emit('search-query', this.searchQuery);
    }
  },
};
</script>

