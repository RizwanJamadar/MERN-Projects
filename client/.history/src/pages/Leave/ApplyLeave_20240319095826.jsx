import React, { useState } from "react";
import "./leave.css";
import axios from "axios";

const ApplyLeave = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [data, setData] = useState({
    type: "",
    days: "",
    email: "",
    phoneno: "",
    startDate: "",
    endDate: "",
    attachment: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      setData((prev) => ({
        ...prev,
        attachment: files[0], // Only store the first file
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      // const res = await axios.post("http://localhost:8800/api/auth/register",data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addLeave">
      <h1>
        Request <span>Leave</span>
      </h1>
      <form className="form" onSubmit={handleSubmit}>
        <div class="inputBox">
          <div class="input">
            <span>Type of Leave</span>
            <input
              type="text"
              placeholder="Sick Leave"
              name="type"
              onChange={handleChange}
            />
          </div>
          <div class="input">
            <span>Duration</span>
            <input
              type="text"
              placeholder="2 days"
              name="days"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Email</span>
            <input
              type="Email"
              placeholder="johndoe@sfit.ac.in"
              name="email"
              value={user.details.email}
              onChange={handleChange}
            />
          </div>
          <div class="input">
            <span>Phone No.</span>
            <input
              type="number"
              placeholder="9876543210"
              name="phoneno"
              value={user.details.phoneno}
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Start Date</span>
            <input type="date" name="startDate" onChange={handleChange} />
          </div>
          <div class="input">
            <span>End Date</span>
            <input type="date" name="endDate" onChange={handleChange} />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Attachments</span>
            <input
              type="file"
              name="attachment"
              accept="application/pdf"
              onChange={handleChange}
            />
          </div>
          <div class="input">
            <span>Reason</span>
            <textarea
              placeholder="Medical leave applicable for only 2 days."
              rows={1}
              style={{ resize: "none" }}
              name="reason"
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn">
          Apply Leave
        </button>
      </form>
    </div>
  );
};

export default ApplyLeave;
