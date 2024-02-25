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
      {email},
      {
        $push:{
            leaves:
             objectId
        }
      },
      {
        new:true
      }
    );

    res.status(200).send("Leave Request sent sucessfully..");
  } catch (err) {
    next(err);
  }
};
