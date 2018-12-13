<template>
  <form id="BlogForm" class="blog-form" action="/blog">
    <label for="BlogUrl"><b>URL</b></label> - 
    <input id="BlogUrl" class="blog-url" placeholder="https://www.blog.com" required>
    <p><button class="add-blog">+ Add a Blog</button></p>
  </form>
</template>

<style>
.blog-url {
  background: #76859C;
  border: none;
  border-radius: 5px;
  color: white;
  padding: .5rem;
}

.add-blog {
  background: none;
  border: 2px solid #818B95;
  border-radius: 5px;
  color: #76859C;
  cursor: pointer;
  font-weight: 600;

  padding: .5rem
}

.add-blog:hover {
  background: #76859C;
  color: #fff
}
</style>
