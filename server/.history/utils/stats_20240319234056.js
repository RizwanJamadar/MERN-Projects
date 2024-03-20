export const getLeaveData = async (userId) =>{
    try {
        // Find leave records for the user from one month ago to now
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        console.log(oneMonthAgo);
        console.log(oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1));
    
        const leaveData = await LeaveRequest.find({
          userId,
          startDate: { $gte: oneMonthAgo }
        });
    
        return leaveData;
      } catch (err) {
        console.error(err);
        throw err;
      } 
}

getLeaveData("daldjfalkj")

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