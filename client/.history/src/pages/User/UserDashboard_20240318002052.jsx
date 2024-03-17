import React from "react";
import "./userdashboard.css";
import CircularProgressBar from "../../components/chart/CircularProgress.jsx"


const UserDashboard = () => {
  return (
    <div className="userdashboard">
      <div className="user_left">
        <div className="user_analysis">
          <div className="heading_top">
            <h4>Leave management</h4>
            <button className="btn">Request a leave</button>
          </div>
          <div className="heading_bottom">
          <div className="box">
            <CircularProgressBar totalLeaves={30} leavesTaken={16} color="primary"/>
            <div className="headings">
              <h3>Annual Leave</h3>
              <p>Remaining</p>
            </div>
          </div>

          <div className="box">
            <CircularProgressBar totalLeaves={10} leavesTaken={9} color="warning"/>
            <div className="headings">
              <h3>Sick Leave</h3>
              <p>Taken</p>
            </div>
          </div>

          <div className="box">
            <CircularProgressBar totalLeaves={10} leavesTaken={5} color="danger"/>
            <div className="headings">
              <h3>Casual Leave</h3>
              <p>Taken</p>
            </div>
          </div>
          </div>
        </div>
        <div className="user_charts">chart</div>
      </div>

      <div className="user_right">user_right</div>
    </div>
  );
};

export default UserDashboard;
