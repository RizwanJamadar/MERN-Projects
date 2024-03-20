import express from "express";
import { RequestLeave, approveRequest, getByHod, getByUser, getByVp, rejectRequest } from "../controllers/leaveRequest.controller.js";
import { verifyToken,verifyVP } from "../utils/verifyUser.js";
import upload from "../utils/upload.js"

const router = express.Router();

// create route
router.post("/addRequest",RequestLeave)

// update routes
router.put("/approve-requests/:id",verifyToken,approveRequest)
router.put("/reject-requests/:id",verifyToken,rejectRequest)

// fetch routes
router.get("/user-leaves/:id",getByUser);
router.get("/leaves-hod",verifyToken,getByHod);
router.get("/leaves-vp",verifyVP,getByVp);

export default router;
