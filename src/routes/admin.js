const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router()

//show all studies
router.get('/study', adminController.getStudies)

//show a particular study
router.get('/study/:studyId', adminController.getStudy)

//edit or approve a study
router.get('/edit-study/:studyId', adminController.getEditStudy)

router.post('/edit-study', adminController.postEditStudy)

//delete a study
router.post('/study', adminController.postDeleteStudy)

module.exports = router
