import LeaveRequestModel from "../models/LeaveRequest.model.js";

export const getLeaveData = async (userId) =>{
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

export const calculateLeaveStats = (leaveData) => {
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