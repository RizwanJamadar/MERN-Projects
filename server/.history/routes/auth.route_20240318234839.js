import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.post("/register", verifyToken ,register);
router.post("/login", login);

router.post("/logout", logout);

export default router;
