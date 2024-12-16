import LeaveRequestModel from "../models/LeaveRequest.model.js";

// const getLeaveData = async (userId) =>{
//     try {
//         // Find leave records for the user from one month ago to now
//         const oneMonthAgo = new Date();
//         oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    
//         const leaveData = await LeaveRequestModel.find({
//           userId,
//           startDate: { $gte: oneMonthAgo }
//         }).maxTimeMS(30000);
    
//         return leaveData;
//       } catch (err) {
//         console.error(err);
//         throw err;
//       } 
// }

const calculateLeaveStats = (leaveData) => {
  let sickLeave =   0;
  let annualLeave = 0;
  let casualLeave = 0;
  let otherLeave = 0;

  leaveData.forEach(leave => {
    switch (leave.type) {
      case 'Sick Leave':
        if (leave.status === 'Approved') sickLeave += leave.days;
        break;
      case 'Annual Leave':
        if (leave.status === 'Approved') annualLeave += leave.days;
        break;
      case 'Casual Leave':
        if (leave.status === 'Approved') casualLeave += leave.days;
        break;
      default:
        if (leave.status === 'Approved') otherLeave += leave.days;
    }
  });

  return {
    sickLeave,
    annualLeave,
    casualLeave,
    otherLeave
  };
}


  const leaveData = [
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
		}
	]

  const calculate = async () =>{
    const userId = "65f56f4ff04b78ee42f1f3f1"
    try {
        // const leaveData = await getLeaveData(userId);
        const leaveStats = calculateLeaveStats(leaveData);
        console.log(leaveStats); // Sending leave counts as JSON response
      } catch (err) {
        console.error(err);
      }
  }

  calculate()