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

const calculateLeaveStatsByMonth = (leaveData) => {
  let leaveStatsPerMonth = {};

  leaveData.forEach((leave) => {
    // Extracting month and year from the leave date
    const leaveDate = new Date(leave.startDate);
    const monthYearKey = `${leaveDate.getMonth() + 1}-${leaveDate.getFullYear()}`;

    // Initialize leave stats for the month if not already present
    if (!leaveStatsPerMonth[monthYearKey]) {
      leaveStatsPerMonth[monthYearKey] = {
        sickLeave: 0,
        annualLeave: 0,
        casualLeave: 0,
        otherLeave: 0,
      };
    }

    // Increment leave count based on leave type and status
    switch (leave.type) {
      case "Sick Leave":
        if (leave.status === "Approved") leaveStatsPerMonth[monthYearKey].sickLeave += leave.days;
        break;
      case "Annual Leave":
        if (leave.status === "Approved") leaveStatsPerMonth[monthYearKey].annualLeave += leave.days;
        break;
      case "Casual Leave":
        if (leave.status === "Approved") leaveStatsPerMonth[monthYearKey].casualLeave += leave.days;
        break;
      default:
        if (leave.status === "Approved") leaveStatsPerMonth[monthYearKey].otherLeave += leave.days;
    }
  });

  return leaveStatsPerMonth;
};

const calculateByMonth = async (req, res) => {
  try {
    if (!Array.isArray(req.body.leaves)) {
      console.log("Invalid 'leaves' data. Expected an array.");
      return res.status(400).send("Invalid 'leaves' data. Expected an array.");
    }

    const leaveData = req.body.leaves;
    const leaveStats = await calculateLeaveStatsByMonth(leaveData);
    res.status(200).send(leaveStats);
  } catch (err) {
    console.error("Error calculating leave stats:", err);
    res.status(500).send("Error calculating leave stats");
  }
};

export {calculateByMonth};
