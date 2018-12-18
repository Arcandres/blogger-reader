const express = require('express'),
  app = express()

app
  // Get
    .use(require('./get/data'))
    .use(require('./get/blogs'))
    .use(require('./get/blog'))
    .use(require('./get/post'))
    
  // Post
    .use(require('./post/blog'))

module.exports = app