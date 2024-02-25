import express from "express";
import { RequestLeave, approveRequest } from "../controllers/leaveRequest.controller.js";
const router = express.Router();

router.post("/addRequest",RequestLeave)
router.put("/leave-requests/:id",approveRequest)

export default router;
