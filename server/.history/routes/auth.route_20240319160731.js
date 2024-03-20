import express from "express";
import { register, login, logout, getAllUsers, getDeptUsers } from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.post("/register", verifyToken ,register);
router.post("/login", login);

router.post("/logout", logout);

router.get("/allUsers", getAllUsers)
router.get("/departmentProfessor",verifyToken, getDeptUsers)

export default router;