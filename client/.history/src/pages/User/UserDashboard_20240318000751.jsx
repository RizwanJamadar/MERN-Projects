import React from "react";
import "./userdashboard.css";
import CircularProgressBar from "../../components/chart/CircularProgress.jsx"


const UserDashboard = () => {
  return (
    <div className="userdashboard">
      <div className="user_left">
        <div className="user_analysis">
          <div className="box">
            <CircularProgressBar totalLeaves={30} leavesTaken={16} color="success"/>
          </div>
        </div>
        <div className="user_charts">chart</div>
      </div>

      <div className="user_right">user_right</div>
    </div>
  );
};

export default UserDashboard;
