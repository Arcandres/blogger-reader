const { googleApi, apiKey } = require('./../helpers/blogger'),
  express = require('express'),
  fetch = require('node-fetch'),
  app = express()

app
  .post('/blog', (req, res) => {
    fetch(`${googleApi}/byurl?url=${req.body.url}&key=${apiKey}`)
      .then(data => data.json())
      .then(blog => res.json(blog))
  })

module.exports = app