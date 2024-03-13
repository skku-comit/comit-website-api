import express from "express";

import { getStudies, getStudy, editStudy, deleteStudy } from "../controllers/adminStudy";

const router = express.Router();

// study api for admin

// /admin/study
router.get("/study", getStudies);

// /admin/study/:id
router.get("/study/:id", getStudy);

// /admin/study/:id
router.patch("/study/:id", editStudy);

// /admin/study/:id
router.delete("/study/:id", deleteStudy);


export default router;