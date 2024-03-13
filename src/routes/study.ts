import express from "express";
import { getStudies, getStudy, addStudy, editStudy } from "../controllers/userStudy"

const router = express.Router();

// Give all studies to front
router.get("/study", getStudies);

// Give a particular study to front
router.get("/study/:id", getStudy);

// Add a study
router.post("/study", addStudy);

// Edit a study
router.patch("/study/:id", editStudy);

export default router;