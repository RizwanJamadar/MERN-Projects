import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneno:{
        type:Number,
        required:true
    },
    password: {
      type: String,
      required: true,
    },
    gender:{
        type:String
    },
    department:{
        type:String
    },
    Role: {
      type: String,
    },
    leaves:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LeaveRequest"
        }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);