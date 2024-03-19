import mongoose from "mongoose";
import LeaveRequest from "../models/LeaveRequest.model.js";
import User from "../models/User.model.js";
import { createError } from "../utils/error.js";
import UserModel from "../models/User.model.js";
import LeaveRequestModel from "../models/LeaveRequest.model.js";

export const requestLeave = async (req, res, next) => {
  try {
    const { type, days, email, phoneno, startDate, endDate, reason } = req.body;
    const attachment = req.file ? req.file.filename : null; // Check if a file is uploaded

    // Save leave request
    const newReqLeave = new LeaveRequest({
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
  // console.log(user);
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

    // Check if all approvals are received
    if (leaveRequest.hodApproval === null || leaveRequest.vpApproval === null) {
      leaveRequest.status = "Pending";
    } else if (leaveRequest.hodApproval && leaveRequest.vpApproval) {
      leaveRequest.status = "Approved";
    }

    const updatedLeaveRequest = await leaveRequest.save();
    res.json(updatedLeaveRequest);
  } catch (error) {
    next(error);
  }
};

export const rejectRequest = async (req, res, next) => {
  const leaveRequestId = req.params.id;
  const { Role, department } = req.body;

  try {
    const leaveRequest = await LeaveRequest.findById(leaveRequestId).populate(
      "userId"
    );

    if (!leaveRequest) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    const approvingUser = leaveRequest.userId;

    // Check if the approving user is HOD and belongs to the same department
    if (Role === "hod" && approvingUser.department === department) {
      leaveRequest.hodApproval = false;
    } else if (Role === "vp") {
      leaveRequest.vpApproval = false;
    } else {
      return res.status(400).json({ message: "Invalid authority specified" });
    }

    // Check if all approvals are received
    if (leaveRequest.hodApproval === null || leaveRequest.vpApproval === null) {
      leaveRequest.status = "Pending";
    } else if (!leaveRequest.hodApproval && !leaveRequest.vpApproval) {
      leaveRequest.status = "Rejected";
    }

    const updatedLeaveRequest = await leaveRequest.save();
    res.json(updatedLeaveRequest);
  } catch (error) {
    next(error);
  }
};

export const getByUser = async (req, res, next) => {
    try {
     const requests = await UserModel.findById(req.params.id).populate({path:"leaves", model:"LeaveRequest"})
     res.status(200).json(requests);

    } catch (error) {
      next(error)
    }
};

export const getByHod = async (req, res, next) => {
  const user = req.user;
  try {
    const requests = await LeaveRequestModel.find({department: user.department, status: 'Pending', hodApproval: null} );
    res.status(200).json(requests);
  } catch (error) {
    next(error)
  }
};

export const getByVp = async (req, res, next) => {
  try {
    const requests = await LeaveRequestModel.find({status: 'Pending', hodApproval: null} );
    res.status(200).json(requests);
  } catch (error) {
    next(error)
  }
};
