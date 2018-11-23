const express = require('express'),
  app = express()

app
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .use(express.static(__dirname + '/public'))
  
  // Router
  .use(require('./routes/routes'))

.listen(3000)