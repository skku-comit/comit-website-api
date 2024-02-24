const express = require('express')

const app = express()

app.get('/api', (req, res, next) => {
  res.json({ message: 'hello' })
})

app.listen(3000, () => {
  console.log('Server listening on port 3000 (js)')
})
