const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router()

//give all studies to front
router.get('/study', adminController.getStudies)

//give a particular study to front
router.get('/study/:id', adminController.getStudy)

//edit or approve a study
router.put('/study/:id', adminController.editStudy)

//delete a study
router.delete('/study/:id', adminController.deleteStudy)

module.exports = router
