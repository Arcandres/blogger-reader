<template>
  <section id="blog">
    <h2>{{ blog.name }}</h2>
    <p>{{ blog.description }}</p>
    <ul>
      <li v-for="item in blog.items">{{ item.title }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        "id": "4582943784",
        "name": "Arcandres",
        "description": "Description of the blog",
        "items": [
          {
            "id": "1736216",
            "title": "Aplicaciones para cuidar y reducir el estrés ocular.",
            "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489"
          },
          {
            "id": "1762163",
            "title": "Wallpapers animados para tu escritorio.",
            "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489"
          },
          {
            "id": "7362163",
            "title": "Top 5 mejores fuentes para tu terminal",
            "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489"
          }
        ]
      }
    }
  }
}
</script>


