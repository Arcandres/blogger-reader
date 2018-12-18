<template>
  <!-- <Blogs :blogs="data" /> -->
  <pre>{{JSON.stringify(data)}}</pre>
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
      data: []
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
