<template>
  <Blogs v-bind:blogs="data" />
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
        {
          "name": "Arcandres",
          "items": [
            {
              "title": "Aplicaciones para cuidar y reducir el estrés ocular."
            },
            {
              "title": "Wallpapers animados para tu escritorio."
            },
            {
              "title": "Top 5 mejores fuentes para tu terminal"
            }
          ]
        },
        {
          "name": "zkreations",
          "items": [
            {
              "title": "Como alojar fuentes web sin pagar hosting"
            },
            {
              "title": "Instala, optimizar y personalizar fuentes de Google fonts"
            },
            {
              "title": "Reproductor de video html5 con Video.js"
            }
          ]
        }
      ]
    }
  },
  beforeCreate() {
    // fetch('/blogs')
    //   .then(data => data.json())
    //   .then(blogs => this.data = blogs)
    //   .catch(err => console.error(err))
  }
}
</script>
