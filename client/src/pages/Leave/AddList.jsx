import React from "react";

const AddList = () => {
  return (
    <div className="addLeave">
      <h1>
        Add <span>Leave</span>
      </h1>
      <div className="form">
        <div class="inputBox">
          <div class="input">
            <span>Leave Name</span>
            <input type="text" placeholder="Sick Leave" />
          </div>
          <div class="input">
            <span>Leave Type</span>
            <input type="text" placeholder="SL" />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Leave code</span>
            <input type="number" placeholder="422" />
          </div>
          <div class="input">
            <span>Duration</span>
            <input type="text" placeholder="2 days" />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Attachments</span>
            <input type="text" placeholder="Medical Certificate"/>
          </div>
          <div class="input">
            <span>Detail</span>
            <textarea placeholder="Medical leave applicable for only 2 days." rows={1} style={{resize:"none"}}/>
          </div>
        </div>

        <button type="submit" className="btn">
          Add Leave
        </button>
      </div>
    </div>
  );
};

export default AddList;
