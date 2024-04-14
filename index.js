const express = require('express')
const axios = require('axios')
const app = express()
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.send("FREAK CITY")
  })



  app.listen(80, () => {
    console.log(`Server running on 80`)
  })


  