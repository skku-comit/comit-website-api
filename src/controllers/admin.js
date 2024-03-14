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

exports.editStudy = (req, res, next) => {
  const studyId = req.body.id
  const updatedStatus = req.body.status
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
      study.status = updatedStatus
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
    .then((study) => {
      res.status(200).json(study)
    })
    .catch(console.log)
}

exports.deleteStudy = (req, res, next) => {
  const studyId = req.params.id
  Study.findByIdAndDelete(studyId)
    .then(() => {
      res.status(200).send(studyId)
    })
    .catch(console.log)
}
