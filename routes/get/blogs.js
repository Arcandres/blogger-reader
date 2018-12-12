const express = require('express'),
  fetch = require('node-fetch'),
  app = express(),
  { googleApi, apiKey } = require('../helpers/blogger'),
  blogsDB = require('./../db/blogs.json')

app.get('/blogs', (req, res) => {
  fetch(`https://www.googleapis.com/blogger/v3/blogs/4964195606923028905/posts/?key=AIzaSyA3CsJnWRRu5YoPQqE9vMNKIed7cbOZJ3o`)
    .then(data => data.json())
    .then(blogs => res.send(blogs))
    .catch(err => console.error(err))
})

module.exports = app