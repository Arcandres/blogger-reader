const { googleApi, apiKey } = require('./../helpers/blogger'),
  express = require('express'),
  fetch = require('node-fetch'),
  app = express()

app.get('/blog/:blogId', (req, res) => {
  // if (!data) {
  //   throw new Error
  // }

  fetch(`${googleApi}/${req.params.blogId}/posts?key=${apiKey}&fields=items(title)`)
    .then(data => data.json())
    .then(posts => res.json(posts))

})

module.exports = app