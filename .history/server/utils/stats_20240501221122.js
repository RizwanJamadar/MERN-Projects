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
    const leaveDate = new Date(leave.date);
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

  const data = {
    "_id": "65f56f4ff04b78ee42f1f3f1",
    "firstName": "Dhruvi",
    "lastName": "Shah",
    "email": "dhruvi6903@student.sfit.ac.in",
    "phoneno": 9876543210,
    "password": "$2a$10$iqmLv5kLzaczRxYfcEG3qusHEeQ6gWGvpaYVaeDRJiKLECmaecBq2",
    "gender": "Female",
    "department": "IT",
    "Role": "Professor",
    "leaves": [
      {
        "_id": "65faf29676e7f06eb9d1ea92",
        "userId": "65f56f4ff04b78ee42f1f3f1",
        "type": "Sick Leave",
        "days": 1,
        "startDate": "2024-03-21T00:00:00.000Z",
        "endDate": "2024-03-21T00:00:00.000Z",
        "reason": "Fever",
        "email": "dhruvi6903@student.sfit.ac.in",
        "phoneno": 9876543210,
        "attachment": "https://firebasestorage.googleapis.com/v0/b/smart-leave-2a6b6.appspot.com/o/images%2F1710944912292domecile.pdf?alt=media&token=f7bebd4d-776b-4c7e-a89b-de9ebdde2f4f",
        "status": "Approved",
        "hodApproval": true,
        "vpApproval": true,
        "createdAt": "2024-03-20T14:28:38.200Z",
        "updatedAt": "2024-03-20T14:35:33.318Z",
        "__v": 0
      },
      {
        "_id": "65fb1d4ae2edfe87f75572f3",
        "userId": "65f56f4ff04b78ee42f1f3f1",
        "type": "Casual Leave",
        "days": 5,
        "startDate": "2024-04-01T00:00:00.000Z",
        "endDate": "2024-04-05T00:00:00.000Z",
        "reason": "Taking a short vacation",
        "email": "dhruvi6903@student.sfit.ac.in",
        "phoneno": 9876543210,
        "attachment": "https://firebasestorage.googleapis.com/v0/b/smart-leave-2a6b6.appspot.com/o/images%2F1710944912292domecile.pdf?alt=media&token=f7bebd4d-776b-4c7e-a89b-de9ebdde2f4f",
        "status": "Rejected",
        "hodApproval": false,
        "vpApproval": false,
        "createdAt": "2024-03-20T17:30:50.113Z",
        "updatedAt": "2024-03-20T17:43:53.543Z",
        "__v": 0
      },
      {
        "_id": "65fbcfca37beddf18798362f",
        "userId": "65f56f4ff04b78ee42f1f3f1",
        "type": "Casual Leave",
        "days": 3,
        "startDate": "2024-03-22T00:00:00.000Z",
        "endDate": "2024-03-24T00:00:00.000Z",
        "reason": "Need some short break",
        "email": "dhruvi6903@student.sfit.ac.in",
        "phoneno": 9876543210,
        "attachment": "https://firebasestorage.googleapis.com/v0/b/smart-leave-2a6b6.appspot.com/o/images%2F1711001530020casual_leave.pdf?alt=media&token=56d55564-3e01-445a-b076-a44f7dfee39c",
        "status": "Rejected",
        "hodApproval": true,
        "vpApproval": false,
        "createdAt": "2024-03-21T06:12:26.901Z",
        "updatedAt": "2024-03-21T18:00:01.320Z",
        "__v": 0
      },
      {
        "_id": "65fbcfe137beddf187983631",
        "userId": "65f56f4ff04b78ee42f1f3f1",
        "type": "Casual Leave",
        "days": 3,
        "startDate": "2024-03-22T00:00:00.000Z",
        "endDate": "2024-03-24T00:00:00.000Z",
        "reason": "Need some short break",
        "email": "dhruvi6903@student.sfit.ac.in",
        "phoneno": 9876543210,
        "attachment": "https://firebasestorage.googleapis.com/v0/b/smart-leave-2a6b6.appspot.com/o/images%2F1711001530020casual_leave.pdf?alt=media&token=56d55564-3e01-445a-b076-a44f7dfee39c",
        "status": "Rejected",
        "hodApproval": false,
        "vpApproval": false,
        "createdAt": "2024-03-21T06:12:49.046Z",
        "updatedAt": "2024-03-21T17:27:10.919Z",
        "__v": 0,
        "rejectMsg": "lack of faulties"
      },
      {
        "_id": "66320c1f2ec1fd8bb1173898",
        "userId": "65f56f4ff04b78ee42f1f3f1",
        "type": "Sick Leave",
        "days": 2,
        "startDate": "2024-05-10T00:00:00.000Z",
        "endDate": "2024-05-12T00:00:00.000Z",
        "reason": "want to plan vacation",
        "email": "dhruvi6903@student.sfit.ac.in",
        "phoneno": 9876543210,
        "attachment": "https://firebasestorage.googleapis.com/v0/b/new-leave-d4a0a.appspot.com/o/images%2F1714555908602casual_leave.pdf?alt=media&token=58ef7cf6-bef0-4da0-a955-d4d8594b30e1",
        "status": "Approved",
        "hodApproval": true,
        "vpApproval": true,
        "createdAt": "2024-05-01T09:32:15.601Z",
        "updatedAt": "2024-05-01T16:15:42.525Z",
        "__v": 0
      }
    ],
    "createdAt": "2024-03-16T10:07:11.059Z",
    "updatedAt": "2024-05-01T09:32:15.648Z",
    "__v": 0
  } 

  try {
    if (!Array.isArray(data.leaves)) {
      console.log("Invalid 'leaves' data. Expected an array.");
    }

    const leaveData = data.leaves;
    const leaveStats = await calculateLeaveStatsByMonth(leaveData);
    res.status(200).send(leaveStats);
  } catch (err) {
    console.error("Error calculating leave stats:", err);
    // next(err);
  }
};

// export  {calculateByMonth};

console.log(calculateByMonth());
