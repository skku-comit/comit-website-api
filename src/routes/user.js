const express = require('express')

const userController = require('../controllers/user')

const router = express.Router()

//show all approved studies
router.get('/study', userController.getStudies)

//show a particular approved study
router.get('/study/:studyId', userController.getStudy)

//add a study
router.get('/add-study', userController.getAddStudy)

router.post('/add-study', userController.postAddStudy)

//edit an approved study
router.get('/edit-study/:studyId', userController.getEditStudy)

router.post('/edit-study', userController.postEditStudy)

module.exports = router
