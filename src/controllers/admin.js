const ApprovedStudy = require('../models/approvedStudy')
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

exports.postApproveStudy = (req, res, next) => {
  const studyId = req.params.studyId
  Study.findById(studyId)
    .then((study) => {
      const imageSrc = study.imageSrc
      const title = study.title
      const mentor = study.mentor
      const day = study.day
      const startTime = study.startTime
      const endTime = study.endTime
      const level = study.level
      const stack = study.stack
      const campus = study.campus
      const description = study.description
      const approvedStudy = new ApprovedStudy({
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
      return approvedStudy.save()
    })
    .then(() => {
      res.redirect('/api/study')
    })
    .catch(console.log)
}

exports.postDeleteStudy = (req, res, next) => {
  const studyId = req.params.studyId
  Study.findByIdAndDelete(studyId)
    .then(() => {
      if (ApprovedStudy.findById(studyId)) {
        ApprovedStudy.findByIdAndDelete(studyId)
      }
      res.redirect('api/admin/study')
    })
    .catch(console.log)
}
