const Study = require('../models/study')

exports.getStudies = (req, res, next) => {
  Study.find().then((studies) => {
    res.json()
  })
}

exports.postStudy = (req, res, next) => {
  const imageSrc = req.body.imageSrc
  const title = req.body.title
  const mentor = req.body.mentor
  const day = req.body.day
  const startTime = req.body.startTime
  const endTime = req.body.endTime
  const level = req.body.level
  const stack = req.body.stack
  const campus = req.body.campus
  const description = req.body.description
  const study = new Study({
    imageSrc: imageSrc,
    title: title,
    mentor: mentor,
    startTime: startTime,
    endTime: endTime,
    level: level,
    stack: stack,
    campus: campus,
    description: description
  })
  study
    .save()
    .then(() => {
      res.redirect('/api/study')
    })
    .catch(console.log)
}

exports.getStudy = (req, res, next) => {
  res.json()
}

exports.getEditStudy = (req, res, next) => {}

exports.postEditStudy = (req, res, next) => {}
