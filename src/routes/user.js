const express = require('express')

const userController = require('../controllers/user')

const router = express.Router()

//give all studies to front
router.get('/study', userController.getStudies)

//give a particular study to front
router.get('/study/:id', userController.getStudy)

//add a study
router.post('/study', userController.addStudy)

//edit a study
router.put('/study/:id', userController.editStudy)

module.exports = router
