'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))

const mongoose = require('mongoose')

const app = (0, express_1.default)()
app.get('/api', (req, res, next) => {
  res.send('Hello')
})

mongoose.connect().then(() => {
  app
    .listen('3000', () => {
      console.log('Server listening on port 3000')
    })
    .catch(console.log)
})
