const express = require('express'),
  app = express(),
  blogs = require('/home/arcandres/Documents/blogs.json')

app.get('/data', (req, res) => {
  res.send(blogs)
})

module.exports = app