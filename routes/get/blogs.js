const express = require('express'),
  fetch = require('node-fetch'),
  app = express(),
  { googleApi, apiKey } = require('../helpers/blogger'),
  blogs = require('/home/arcandres/Documents/blogs.json')

app
  .get('/blogs', (req, res) => {
    const data = [],
      save = blog => data.push(blog)

    let blog = blogs.length



    while (--blog) {
      fetch(`${googleApi}/${blogs[blog].id}/posts?key=${apiKey}`)
        .then(posts => posts.json())
        .then(posts => {
          blogs[blog].posts = posts
          save(blogs[blog])
        })
        .catch(err => console.error(err))
    }
    setTimeout(() => {
      res.json(data)
    }, 0);
  })

module.exports = app