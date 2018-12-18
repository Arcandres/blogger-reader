<template>
  <div>
    <header class="header">
      <h1>Welcome to Blogger Reader</h1>
    </header>
    <section class="section">
      <header>
        <img src="/assets/img/logo.png" alt="Blogger Reader Logo">
        <p>To begin with, first add a <b>Bloggers's</b> blog url.</p>
      </header>
      <BlogForm />
    </section>
  </div>
</template>

<script>
require('./css/Home.css')

// @ is an alias to /src
import BlogForm from '@/components/BlogForm.vue'
import router from 'vue-router'

export default {
  name: 'home',
  components: {
    BlogForm
  },
  beforeCreate() {
    fetch('./db/blogs.json')
      .then(data => data ? this.$router.push({path: '/blogs'}) : null)
      .catch(err => console.error(err))
  }
}
</script>