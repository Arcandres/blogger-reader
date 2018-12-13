<template>
  <Blogs :blogs="data" />
</template>

<script>
import Blogs from '@/components/Blogs.vue'

export default {
  name: 'blogs',
  components: {
    Blogs
  },
  data() {
    return {
      data: [
        // {
        //   "id": "4582943784",
        //   "name": "Arcandres",
        //   "items": [
        //     {
        //       "id": "1736216",
        //       "title": "Aplicaciones para cuidar y reducir el estrés ocular.",
        //       "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489"
        //     },
        //     {
        //       "id": "1762163",
        //       "title": "Wallpapers animados para tu escritorio.",
        //       "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489"
        //     },
        //     {
        //       "id": "7362163",
        //       "title": "Top 5 mejores fuentes para tu terminal",
        //       "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489"
        //     }
        //   ]
        // },
        // {
        //   "id": "4582943783",
        //   "name": "zkreations",
        //   "items": [
        //     {
        //       "id": "1732163",
        //       "title": "Como alojar fuentes web sin pagar hosting",
        //       "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489"
        //     },
        //     {
        //       "id": "1762163",
        //       "title": "Instala, optimizar y personalizar fuentes de Google fonts",
        //       "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489"
        //     },
        //     {
        //       "id": "1736163",
        //       "title": "Reproductor de video html5 con Video.js",
        //       "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/8611549134915353489"
        //     }
        //   ]
        // }
      ]
    }
  },
  beforeCreate() {
    fetch('/blogs')
      .then(data => data.json())
      .then(blogs => this.data.push(JSON.stringify(blogs)))
      .catch(err => console.error(err))
  }
}
</script>
