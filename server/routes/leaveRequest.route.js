import express from "express";
import { RequestLeave } from "../controllers/leaveRequest.controller.js";
const router = express.Router();

router.post("/addRequest",RequestLeave)

export default router;
