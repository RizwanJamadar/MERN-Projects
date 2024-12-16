import React, { useState } from "react";
import "./recommend.css";

const RecommandLeave = () => {
  const [data, setData] = useState({
    workload: "",
    pending_tasks: "",
    designation: "",
    salary: "",
    deadline: "",
    days: "",
  });

  const handleChange = () => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className="recommandLeave">
      <div className="heading">
        <h1>
          Welcome to <span>Leave</span> Advisor
        </h1>
        <p>Your Personal Leave Recommendation System</p>
      </div>
      <div className="form">
        <div class="inputBox">
          <div class="input">
            <span>Workload</span>
            <input
              type="text"
              placeholder="Extreme"
              name="workload"
              onChange={handleChange}
            />
          </div>
          <div class="input">
            <span>Pending Task</span>
            <input
              type="number"
              placeholder="4"
              name="pending_tasks"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Designation</span>
            <input
              type="text"
              placeholder="Professor"
              name="designation"
              onChange={handleChange}
            />
          </div>
          <div class="input">
            <span>Salary</span>
            <input
              type="number"
              placeholder="30000"
              name="salary"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Work Deadline</span>
            <input
              type="date"
              name="deadline"
              min={currentDate}
              onChange={handleChange}
            />
          </div>
          <div class="input">
            <span>Duration</span>
            <input
              type="number"
              placeholder="2"
              name="days"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="buttons">
          <button type="submit" className="btn">
            Recommend Me
          </button>
        </div>
        {data != 0 && (
          <div className="bottom">
            <h3>
              Recommended optimal leave start date: <span>2024-05-04</span>
            </h3>
            <h3>
              Recommended optimal leave end date: <span>2024-05-06</span>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommandLeave;
