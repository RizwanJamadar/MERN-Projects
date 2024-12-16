import React from "react";
import './leave.css'
import axios from "axios";

const ApplyLeave = () => {

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const formData = e.target;
      const objectData = new FormData(formData);
      const data = Object.fromEntries(objectData.entries());
      // console.log(data);
      const res = await axios.post("http://localhost:8800/leaveRequest",data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="addLeave">
      <h1>
        Request <span>Leave</span>
      </h1>
      <form className="form" onSubmit={handleSubmit}>
        <div class="inputBox">
          <div class="input">
            <span>Type of Leave</span>
            <input type="text" placeholder="Sick Leave" name="type"/>
          </div>
          <div class="input">
            <span>Duration</span>
            <input type="text" placeholder="2 days" name="days"/>
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Email</span>
            <input type="Email" placeholder="johndoe@sfit.ac.in" name="email" value={user.details.email} />
          </div>
          <div class="input">
            <span>Phone No.</span>
            <input type="number" placeholder="9876543210" name="phoneno" value={user.details.phoneno} />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Start Date</span>
            <input type="date" name="startDate"/>
          </div>
          <div class="input">
            <span>End Date</span>
            <input type="date" name="endDate"/>
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Attachments</span>
            <input type="file" name="attachment" accept="application/pdf"/>
          </div>
          <div class="input">
            <span>Reason</span>
            <textarea
              placeholder="Medical leave applicable for only 2 days."
              rows={1}
              style={{ resize: "none" }}
              name="reason"
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
