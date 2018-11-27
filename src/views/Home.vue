<template>
  <div>
    <header class="header">
      <h1>Welcome to Blogger Reader</h1>
    </header>
    <section class="section">
      <header>
        <img src="/assets/img/logo.png" alt="Blogger Reader Logo">
        <p>To begin with, first add a <b>Bloggers's</b> blog url.</p>
        <BlogForm />
      </header>
    </section>
  </div>
</template>

<script>
require('./css/Home.css')

// @ is an alias to /src
import BlogForm from '@/components/BlogForm.vue'

export default {
  name: 'home',
  components: {
    BlogForm
  }
}
</script>