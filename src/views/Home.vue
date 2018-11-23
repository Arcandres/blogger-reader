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
// @ is an alias to /src
import BlogForm from '@/components/BlogForm.vue'

export default {
  name: 'home',
  components: {
    BlogForm
  }
}
</script>

<style scoped>
.header, .section {
  text-align: center;
}

.header {
  background: #ddd;
  border-bottom: 2px solid #bbb;
  margin-bottom: 2rem;
  padding: 2rem
}

.header h1{
  color: #7E90B6;
  margin: 0
}
</style>

