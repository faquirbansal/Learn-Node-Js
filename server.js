console.log('hello world')

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello i am sending the response asas ssassa setup start')  
})

app.listen(3000)
