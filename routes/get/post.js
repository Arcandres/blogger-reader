const { googleApi, apiKey } = require('./../helpers/blogger'),
  express = require('express'),
  fetch = require('node-fetch'),
  app = express()

app.get('/blog/:blogId/post/:postId', (req, res) => {
  // if (!data) {
  //   throw new Error
  // }

  fetch(`${googleApi}/${req.params.blogId}/posts/${req.params.postId}?key=${apiKey}`)
    // https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553?key
    .then(data => data.json())
    .then(post => res.json(post))

})

module.exports = app