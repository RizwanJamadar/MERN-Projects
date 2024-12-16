import UserModel from "../models/User.model.js";

const calculateLeaveStats = async (leaveData) => {
  let sickLeave = 0;
  let annualLeave = 0;
  let casualLeave = 0;
  let otherLeave = 0;

  leaveData.forEach((leave) => {
    switch (leave.type) {
      case "Sick Leave":
        if (leave.status === "Approved") sickLeave += leave.days;
        break;
      case "Annual Leave":
        if (leave.status === "Approved") annualLeave += leave.days;
        break;
      case "Casual Leave":
        if (leave.status === "Approved") casualLeave += leave.days;
        break;
      default:
        if (leave.status === "Approved") otherLeave += leave.days;
    }
  });

  return {
    sickLeave,
    annualLeave,
    casualLeave,
    otherLeave,
  };
};


const calculate = async () => {
  try {
    const requests = await UserModel.findOne("65f56f4ff04b78ee42f1f3f1").populate({
      path: "leaves",
      model: "LeaveRequest",
    }).maxTimeMS(30000);
    console.log(requests);
    // const leaveStats = await calculateLeaveStats(requests.leaves);
    // console.log(leaveStats); // Sending leave counts as JSON response
  } catch (err) {
    console.error(err);
  }
};

calculate();
