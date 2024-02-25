import mongoose from "mongoose";
import LeaveRequest from "../models/LeaveRequest.model.js";
import UserModel from "../models/User.model.js";
import { createError } from "../utils/error.js";

export const RequestLeave = async (req, res, next) => {
  try {
    const { email } = req.body;

    const newReqLeave = new LeaveRequest({
      ...req.body,
    });

    await newReqLeave.save();
    const objectId = new mongoose.Types.ObjectId(newReqLeave.id);

    await UserModel.updateOne(
      { email },
      {
        $push: {
          leaves: objectId,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).send("Leave Request sent sucessfully..");
  } catch (err) {
    next(err);
  }
};

export const approveRequest = async (req, res, next) => {
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
    if (
      Role === "hod" &&
      approvingUser.department === department
    ) {
      leaveRequest.hodApproval = true;
    } else if (Role === "vp") {
      leaveRequest.vpApproval = true;
    } else if (Role === "dt") {
      leaveRequest.dtApproval = true;
    } else {
      return res.status(400).json({ message: "Invalid authority specified" });
    }

    // Check if all approvals are received
    if (!leaveRequest.hodApproval && leaveRequest.vpApproval) {
      leaveRequest.status = "Pending";
    } else if (leaveRequest.hodApproval && !leaveRequest.vpApproval) {
      leaveRequest.status = "Pending";
    } else if (leaveRequest.hodApproval && leaveRequest.vpApproval) {
      leaveRequest.status = "Approved";
    } else {
      leaveRequest.status = "Rejected";
    }

    const updatedLeaveRequest = await leaveRequest.save();
    res.json(updatedLeaveRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
