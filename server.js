const express = require('express')

const app = express()

app.get('/api', (req, res, next) => {
  res.json({ message: 'hello' })
})

app.listen(3000)
