const ApprovedStudy = require('../models/approvedStudy')
const Study = require('../models/study')

exports.getStudies = (req, res, next) => {
  ApprovedStudy.find()
    .then((studies) => {
      res.json(studies)
    })
    .catch(console.log)
}

exports.getStudy = (req, res, next) => {
  const studyId = req.params.studyId
  ApprovedStudy.findById(studyId)
    .then((study) => {
      res.json(study)
    })
    .catch(console.log)
}

exports.getAddStudy = (req, res, next) => {
  res.send()
}

exports.postAddStudy = (req, res, next) => {
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
    day: day,
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

exports.getEditStudy = (req, res, next) => {
  const editMode = req.query.edit
  if (!editMode) {
    res.redirect('/api/study')
  }
  const studyId = req.params.studyId
  ApprovedStudy.findById(studyId)
    .then((study) => {
      if (!study) {
        return res.redirect('/api/study')
      }
      res.json(study)
    })
    .catch(console.log)
}

exports.postEditStudy = (req, res, next) => {
  const studyId = req.body.studyId
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

  ApprovedStudy.findById(studyId)
    .then((study) => {
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
      return study.save()
    })
    .then(() => {
      Study.findById(studyId).then((study) => {
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
        return study.save()
      })
    })
    .then(() => {
      res.redirect('/api/study')
    })
    .catch(console.log)
}
