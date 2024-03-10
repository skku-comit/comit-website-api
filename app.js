require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const adminRoutes = require('./src/routes/admin')
const userRoutes = require('./src/routes/user')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/admin', adminRoutes)
app.use('/api', userRoutes)

mongoose
  .connect(process.env.dbUri)
  .then(() => {
    app.listen(3000)
  })
  .catch(console.log)
