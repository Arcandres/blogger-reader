const { googleApi, apiKey } = require('./../helpers/blogger'),
  express = require('express'),
  fetch = require('node-fetch'),
  app = express()

app.get('/blog/:id', (req, res) => {
  // if (!data) {
  //   throw new Error
  // }

  fetch(`${googleApi}/${req.params.id}/posts?key=${apiKey}`)
    .then(data => data.json())
    .then(posts => res.json(posts))

})

module.exports = app