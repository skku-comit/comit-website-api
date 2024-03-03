"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const auth_2 = require("../controllers/auth");
const router = express_1.default.Router();
// POST /auth/signup
router.post("/signup", auth_1.isNotLoggedIn, auth_2.signIn);
// POST /auth/login
router.post("/login", auth_1.isNotLoggedIn, auth_2.login);
router.get("/logout", auth_1.isLoggedIn);
exports.default = router;
