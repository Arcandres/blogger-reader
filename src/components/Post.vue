<template>
  <section id="post">
    <article v-html="post.content"></article>
  </section>
</template>

<script>
export default {
  name: 'Post',
  props: ['post']
}
</script>
