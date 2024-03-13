import express from "express";

import { isLoggedIn, isNotLoggedIn } from "../middlewares/auth";
import { signup, login, logout } from "../controllers/auth";

const router = express.Router();
// POST /auth/signup
router.post("/signup", isNotLoggedIn, signup);

// POST /auth/login
router.post("/login", isNotLoggedIn, login);

// POST /auth/login
router.post("/logout", isLoggedIn, logout);

export default router;