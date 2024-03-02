const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/api', (req, res, next) => {
  res.json({ message: 'hello' })
})

mongoose
  .connect(process.env.dbUri)
  .then(() => {
    app.listen(3000)
  })
  .catch(console.log)

// env 작업 필요
// crud 완성
