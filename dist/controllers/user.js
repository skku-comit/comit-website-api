const Study = require('../models/study')

exports.getStudies = (req, res, next) => {
  Study.find().then((studies) => {
    res.json()
  })
}

exports.postStudy = (req, res, next) => {
  const image = req.body.image
  const title = req.body.title
  const time = req.body.time
  const difficulty = req.body.difficulty
  const stack = req.body.stack
  const place = req.body.place
  const study = new Study({
    image: image,
    title: title,
    time: time,
    difficulty: difficulty,
    stack: stack,
    place: place
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
