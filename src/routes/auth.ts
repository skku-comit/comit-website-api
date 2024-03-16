import express from "express";

import { isLoggedIn, isNotLoggedIn } from "../middlewares/auth";
import { signup, login } from "../controllers/auth";

const router = express.Router();

// POST /auth/signup
router.post("/signup", isNotLoggedIn, signup);

// POST /auth/login
router.post("/login", isNotLoggedIn, login);

router.get("/logout", isLoggedIn, );

export default router;