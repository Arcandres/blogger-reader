const express = require('express'),
  app = express()

app
  .use(express.json())
  .use(express.urlencoded({extended: true}))

  // Development
    .use(express.static(__dirname + '/public'))
  // Production
    // .use(express.static(__dirname + '/dist'))
  
  // Router
    .use(require('./routes/routes'))

.listen(3000)