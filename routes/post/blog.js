const { googleApi, apiKey } = require('./../helpers/blogger'),
  fetch = require('node-fetch'),
  express = require('express'),
  fs = require('fs'),
  temporalPath = '/home/arcandres/Documents/blogs.json',
  app = express()

app
  .get('/addBlog', (req, res) => {
    let blogs = []

    if (!fs.existsSync(temporalPath)) {
      return fetch(`${googleApi}/byurl?url=${req.query.url}&key=${apiKey}`)
        .then(data => data.json())
        .then(blog => {
          blogs.push(blog)
          fs.writeFile(temporalPath, JSON.stringify(blogs), err => err ? console.log(err) : console.log('Blog saved...'))
        })
        .then(() => res.redirect('/'))
    }

    blogs = require(temporalPath)
    let l = blogs.length,
      blogUrl = req.query.url.replace('https','http') + '/'
    
    while (l--) {
      if (blogUrl === blogs[l].url) return
    }

    fetch(`${googleApi}/byurl?url=${req.query.url}&key=${apiKey}`)
        .then(data => data.json())
        .then(blog => {
          blogs.push(blog)
          fs.writeFile(temporalPath, JSON.stringify(blogs), err => err ? console.log(err) : console.log('Blog saved...'))
        })

    return res.redirect('/')
  })

module.exports = app