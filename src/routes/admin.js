const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router()

//show all studied
router.get('/study', adminController.getStudies)

//show a particular study
router.get('/study/:studyId', adminController.getStudy)

//approve a study
router.post('/study', adminController.postApproveStudy)

//delete a (approved)study
router.post('/study', adminController.postDeleteStudy)

module.exports = router
