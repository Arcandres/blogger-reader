const express = require('express'),
  app = express(),
  blogsDB = require('./../db/blogs.json')

app.get('/', (req, res) => {
  res.json(blogsDB)
})

module.exports = app