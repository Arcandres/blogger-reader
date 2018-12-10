<template>
  <div id="blogs">
    <ul>
      <li v-for="blog in blogs">
        <h3>{{ blog.name }}</h3>
        <ul class="posts">
          <li v-for="item in blog.items">
            {{ item.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['blogs']
}
</script>

