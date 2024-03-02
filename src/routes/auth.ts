import express from "express";

import { isLoggedIn, isNotLoggedIn } from "../middlewares/auth";
import { signIn, login } from "../controllers/auth";

const router = express.Router();

// POST /auth/signup
router.post("/signup", isNotLoggedIn, signIn);

// POST /auth/login
router.post("/login", isNotLoggedIn, login);

router.get("/logout", isLoggedIn, );

export default router;