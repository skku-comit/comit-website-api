const Study = require('../models/study')

exports.getStudies = (req, res, next) => {
  Study.find()
    .then((studies) => {
      res.json(studies)
    })
    .catch(console.log)
}

exports.getStudy = (req, res, next) => {
  const studyId = req.params.studyId
  Study.findById(studyId)
    .then((study) => {
      res.json(study)
    })
    .catch(console.log)
}

exports.getEditStudy = (req, res, next) => {
  const editMode = req.query.edit
  if (!editMode) {
    res.redirect('/api/admin/study')
  }
  const studyId = req.params.studyId
  Study.findById(studyId)
    .then((study) => {
      if (!study) {
        return res.redirect('/api/admin/study')
      }
      res.json(study)
    })
    .catch(console.log)
}

exports.postEditStudy = (req, res, next) => {
  const studyId = req.body.studyId
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
    .then(() => {
      res.redirect('/api/admin/study')
    })
    .catch(console.log)
}

exports.postDeleteStudy = (req, res, next) => {
  const studyId = req.params.studyId
  Study.findByIdAndDelete(studyId)
    .then(() => {
      res.redirect('api/admin/study')
    })
    .catch(console.log)
}
