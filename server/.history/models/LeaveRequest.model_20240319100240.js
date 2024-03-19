import mongoose from "mongoose";
const LeaveRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    type: String,
    days: Number,
    startDate: Date,
    endDate: Date,
    reason: String,
    email: String,
    phoneno: Number,
    attachment:String,
    status: {
      type: String,
      default: "Pending",
    },
    hodApproval: { 
      type: Boolean,
      default:null
    },
    vpApproval: { 
      type: Boolean,
      default:null
    },
    dtApproval: {
      type: Boolean
    }
  },
  { timestamps: true }
);

export default mongoose.model("LeaveRequest", LeaveRequestSchema);
