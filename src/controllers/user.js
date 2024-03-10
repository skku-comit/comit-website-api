const moment = require('moment')

const Study = require('../models/study')

exports.getStudies = (req, res, next) => {
  Study.find()
    .then((studies) => {
      res.status(200).json(studies)
    })
    .catch(console.log)
}

exports.getStudy = (req, res, next) => {
  const studyId = req.params.id
  Study.findById(studyId)
    .then((study) => {
      res.status(200).json(study)
    })
    .catch(console.log)
}

exports.addStudy = (req, res, next) => {
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
  const createDate = moment().format('YYYY-MM-DD HH:mm:ss')
  const study = new Study({
    status: 'reviewing',
    imageSrc: imageSrc,
    title: title,
    mentor: mentor,
    day: day,
    startTime: startTime,
    endTime: endTime,
    level: level,
    stack: stack,
    campus: campus,
    description: description,
    createDate: createDate
  })
  study
    .save()
    .then((study) => {
      res.status(201).json({ id: study._id })
    })
    .catch(console.log)
}

exports.editStudy = (req, res, next) => {
  const studyId = req.body.id
  const updatedImageSrc = req.body.imageSrc
  const updatedTitle = req.body.title
  const updatedMentor = req.body.mentor
  const updatedDay = req.body.day
  const updatedStartTime = req.body.startTime
  const updatedEndTime = req.body.endTime
  const updatedLevel = req.body.level
  const updatedStack = req.body.stack
  const updatedCampus = req.body.campus
  const updatedDescription = req.body.description

  Study.findById(studyId)
    .then((study) => {
      study.status = 'reviewing'
      study.imageSrc = updatedImageSrc
      study.title = updatedTitle
      study.mentor = updatedMentor
      study.day = updatedDay
      study.startTime = updatedStartTime
      study.endTime = updatedEndTime
      study.level = updatedLevel
      study.stack = updatedStack
      study.campus = updatedCampus
      study.description = updatedDescription
      study.save()
      return study
    })
    .then((study) => {
      res.satus(200).json(study)
    })
    .catch(console.log)
}
