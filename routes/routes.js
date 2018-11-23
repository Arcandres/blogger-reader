const express = require('express'),
  app = express()

app
  .use(require('./get/blogs'))
  .use(require('./get/blog'))
  .use(require('./post/blog'))

module.exports = app