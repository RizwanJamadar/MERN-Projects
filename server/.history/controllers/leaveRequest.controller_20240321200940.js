import mongoose from "mongoose";
import LeaveRequest from "../models/LeaveRequest.model.js";
import User from "../models/User.model.js";
import { createError } from "../utils/error.js";
import UserModel from "../models/User.model.js";
import LeaveRequestModel from "../models/LeaveRequest.model.js";
import { sendMail } from "../utils/mail.js";

export const RequestLeave = async (req, res, next) => {
  try {
    const {
      type,
      days,
      email,
      phoneno,
      startDate,
      endDate,
      reason,
      attachment,
      userId,
    } = req.body;
    // Save leave request
    const newReqLeave = new LeaveRequest({
      userId,
      type,
      days,
      email,
      phoneno,
      startDate,
      endDate,
      attachment,
      reason,
    });
    await newReqLeave.save();

    // Update user with leave request
    const objectId = new mongoose.Types.ObjectId(newReqLeave.id);
    await User.updateOne(
      { email },
      {
        $push: {
          leaves: objectId,
        },
      }
    );

    res.status(200).send("Leave Request sent successfully.");
  } catch (err) {
    next(err);
  }
};

export const approveRequest = async (req, res, next) => {
  const leaveRequestId = req.params.id;
  const admin = await User.findById(req.user.id);
  console.log(admin);
  try {
    const leaveRequest = await LeaveRequest.findById(leaveRequestId).populate(
      "userId"
    );

    if (!leaveRequest) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    const approvingUser = leaveRequest.userId;

    // Check if the approving user is HOD and belongs to the same department
    if (admin.Role === "hod" && approvingUser.department === admin.department) {
      leaveRequest.hodApproval = true;
    } else if (admin.Role === "vp") {
      leaveRequest.vpApproval = true;
    } else {
      return res.status(400).json({ message: "Invalid authority specified" });
    }

    const username = approvingUser.firstName + " " + approvingUser.lastName;
    // console.log(username);
    // Check if all approvals are received
    if (leaveRequest.hodApproval === null || leaveRequest.vpApproval === null) {
      leaveRequest.status = "Pending";
    } else if (
      leaveRequest.hodApproval == true &&
      leaveRequest.vpApproval == true
    ) {
      leaveRequest.status = "Approved";
      sendMail(approvingUser.email,"Approved",username)
    }

    const updatedLeaveRequest = await leaveRequest.save();
    res.json(updatedLeaveRequest);
  } catch (error) {
    next(error);
  }
};

export const rejectRequest = async (req, res, next) => {
  const leaveRequestId = req.params.id;
  const admin = await User.findById(req.user.id);

  try {
    const leaveRequest = await LeaveRequest.findById(leaveRequestId).populate(
      "userId"
    );

    if (!leaveRequest) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    const approvingUser = leaveRequest.userId;
    const username = approvingUser.firstName + " " + approvingUser.lastName;
    console.log(username);

    // Check if the approving user is HOD and belongs to the same department
    if (admin.Role === "hod" && approvingUser.department === admin.department) {
      leaveRequest.hodApproval = false;
    } else if (admin.Role === "vp") {
      leaveRequest.vpApproval = false;
    } else {
      return res.status(400).json({ message: "Invalid authority specified" });
    }

    // Check if all approvals are received
    // Check if all approvals are received
    if (leaveRequest.hodApproval === null || leaveRequest.vpApproval === null) {
      leaveRequest.status = "Pending";
    } else if (
      leaveRequest.hodApproval === false &&
      leaveRequest.vpApproval === false
    ) {
      leaveRequest.status = "Rejected";
      sendMail(approvingUser.email, "Rejected", username);
    }

    const updatedLeaveRequest = await leaveRequest.save();
    res.json(updatedLeaveRequest);
  } catch (error) {
    next(error);
  }
};

export const getByUser = async (req, res, next) => {
  try {
    const requests = await UserModel.findById(req.params.id).populate({
      path: "leaves",
      model: "LeaveRequest",
    });
    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};

export const getByHod = async (req, res, next) => {
  const user = req.user;
  try {
    const requests = await LeaveRequestModel.find({
      department: user.department,
      status: "Pending",
      hodApproval: null,
    });
    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};

export const getByVp = async (req, res, next) => {
  try {
    const requests = await LeaveRequestModel.find({
      status: "Pending",
      hodApproval: null,
    });
    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};

export const getUserStats = async (req, res, next) => {
  
};


export const getDeptStaff = async(req,res,next) =>{
  const user = req.user;
  try {

    const hod = await User.findOne({_id: user.id}) ;
    // console.log(hod);
        
    if (!hod) {
        return res.status(404).json({ message: "HOD not found for this department" });
    }

    // Find professors in the HOD's department
    const professors = await User.find({ department: hod.department, Role: "Professor" });
    
    if (!professors || professors.length === 0) {
        return res.status(404).json({ message: "No professors found in this department" });
    }

    // Fetch leave requests of professors in the HOD's department
    const leaveRequests = await LeaveRequest.find({ userId: { $in: professors.map(prof => prof._id) } })
                                           .populate('userId'); // Populate user details
    
    res.status(200).json(leaveRequests);
  } catch (error) {
    next(error)
  }
}

export const getAllStaff = async (req,res,next) =>{
  try {
    const users = await LeaveRequestModel.find().populate({
      path:"userId",
      model:"User"
    });
    res.status(200).send(users);
  } catch (error) {
    next(error)
  }
}