import React, { useState } from "react";
import "./recommend.css";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

const RecommandLeave = () => {
  const [data, setData] = useState({
    workload: "",
    pending_tasks: "",
    designation: "",
    salary: "",
    deadline: "",
    days: "",
  });

  const [recommend, setRecommend] = useState([]);

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/leaveRecommand/recommend-leave",
        data
      );
      console.log(res.data);
      setRecommend(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(recommend);

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
          <button type="submit" className="btn" onClick={handleSubmit}>
            Recommend Me
          </button>
        </div>
        {recommend.length != 0 && (
          <div className="bottom">
            <TypeAnimation
              sequence={[
                // First line animation
                `Recommended optimal leave start date: ${recommend.adjusted_start_date}`,
                // Second line animation
                `Recommended optimal leave end date: ${recommend.adjusted_end_date}`,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "15px", display: "block" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommandLeave;
