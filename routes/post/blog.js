const { googleApi, apiKey } = require('./../helpers/blogger'),
  fetch = require('node-fetch'),
  express = require('express'),
  fs = require('fs'),
  app = express()

app
  .post('/blog', (req, res) => {
    fetch(`${googleApi}/byurl?url=${/*req.body.url*/'https://www.arcandres.com'}&key=${apiKey}`)
      .then(data => data.json())
      .then(blog => fs.writeFile('blogs.json', JSON.stringify(blog), err => err ? console.log(err) : console.log('Blog saved...')))
  })

module.exports = app