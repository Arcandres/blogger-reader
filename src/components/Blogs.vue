<template>
  <div id="blogs">
    <ul>
      <li :key="blog.id" v-for="blog in blogs">
        <h3><router-link :to="'/blog/' + blog.id">{{ blog.name }}</router-link></h3>
        <ul class="posts">
          <li :key="item.id" v-for="item in blog.items">
            <router-link :to="'/blog/' + blog.id  + '/post/' + item.id">{{ item.title }}</router-link>
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

