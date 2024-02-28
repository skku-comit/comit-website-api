const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studySchema = new Schema({
  image: {
    // type:
    required: true
  },
  title: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  stack: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Study', studySchema)
