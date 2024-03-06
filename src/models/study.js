const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studySchema = new Schema({
  status: {
    type: String
    //required: true
  },
  imageSrc: {
    type: String
    //required: true
  },
  title: {
    type: String
    //required: true
  },
  mentor: {
    type: String
    //required: true
  },
  day: {
    type: String
    //required: true
  },
  startTime: {
    type: String
    //required: true
  },
  endTime: {
    type: String
    //required: true
  },
  level: {
    type: String
    //required: true
  },
  stack: [
    {
      type: String
      //required: true
    }
  ],
  campus: {
    type: String
    //required: true
  },
  description: String
})

module.exports = mongoose.model('Study', studySchema)
