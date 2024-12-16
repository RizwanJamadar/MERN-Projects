import LeaveRequestModel from "../models/LeaveRequest.model.js";

const getLeaveData = async (userId) =>{
    try {
        // Find leave records for the user from one month ago to now
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    
        const leaveData = await LeaveRequestModel.find({
          userId,
          startDate: { $gte: oneMonthAgo }
        });
    
        return leaveData;
      } catch (err) {
        console.error(err);
        throw err;
      } 
}

const calculateLeaveStats = (leaveData) => {
    let sickLeave = 0;
    let annualLeave = 0;
    let casualLeave = 0;
    let otherLeave = 0;
  
    leaveData.forEach(leave => {
      switch (leave.type) {
        case 'sick':
          sickLeave++;
          break;
        case 'annual':
          annualLeave++;
          break;
        case 'casual':
          casualLeave++;
          break;
        default:
          otherLeave++;
      }
    });
  
    return {
      sickLeave,
      annualLeave,
      casualLeave,
      otherLeave
    };
  }

  const calculate = async () =>{
    const userId = "65f56f4ff04b78ee42f1f3f1"
    try {
        const leaveData = await getLeaveData(userId);
        const leaveStats = calculateLeaveStats(leaveData);
        console.log(leaveStats); // Sending leave counts as JSON response
      } catch (err) {
        console.error(err);
      }
  }

  calculate()