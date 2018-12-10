const express = require('express'),
  app = express(),
  blogsDB = require('./../db/blogs.json')

app.get('/blogs', (req, res) => {
  res.json(blogsDB)
})

module.exports = app