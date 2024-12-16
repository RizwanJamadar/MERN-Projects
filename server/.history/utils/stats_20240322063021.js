const calculateLeaveStats = (leaveData) => {
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

const calculate = async (req,res,next) => {
  try {
    if (!Array.isArray(req.body.leaves)) {
      console.log("Invalid 'leaves' data. Expected an array.");
    }

    const leaveData = req.body.leaves;
    const leaveStats = calculateLeaveStats(leaveData);
    res.status(200).send(leaveStats);
  } catch (err) {
    console.error("Error calculating leave stats:", err);
    next(err);
  }
};

export default calculate;

// calculate();
