const { googleApi, apiKey } = require('./../helpers/blogger'),
  fetch = require('node-fetch'),
  express = require('express'),
  fs = require('fs'),
  temporalPath = '/home/arcandres/Documents/blogs.json',
  app = express()

app
  .get('/blog', (req, res) => {
    if (!fs.existsSync(temporalPath)) {
      return fetch(`${googleApi}/byurl?url=${req.query.url}&key=${apiKey}`)
        .then(data => data.json())
        .then(blog => fs.writeFile(temporalPath, JSON.stringify(blog), err => err ? console.log(err) : console.log('Blog saved...')))
        .then(() => res.redirect('/blog'))
    }

    const blogs = require(temporalPath)
    console.log(blogs.kind)
    return res.redirect('/')
  })

module.exports = app