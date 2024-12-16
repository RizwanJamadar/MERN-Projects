import express from "express";
import { RequestLeave, approveRequest, getAllStaff, getByHod, getByUser, getByVp, getCountByHod, getCountByVp, getDeptStaff, rejectRequest } from "../controllers/leaveRequest.controller.js";
import { verifyToken,verifyVP } from "../utils/verifyUser.js";

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

router.get("/deptStaff",verifyToken,getDeptStaff)
router.get("/allStaff",verifyVP,getAllStaff)

router.get("/countByVp",getCountByVp)
router.get("/countByHod",verifyToken,getCountByHod)

export default router;

