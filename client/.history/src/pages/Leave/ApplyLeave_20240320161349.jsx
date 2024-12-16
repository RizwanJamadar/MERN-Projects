import React, { useState } from "react";
import "./leave.css";
import axios from "axios";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase.js";

const ApplyLeave = () => {
  const [data, setData] = useState({
    type: "",
    days: "",
    email: "",
    phoneno: "",
    startDate: "",
    endDate: "",
    attachment: "",
    Reason: "",
  });

  const [file, setFile] = useState(null);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [startDate, setStartDate] = useState("");

  // Get current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split("T")[0];

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleChange = (e) =>{
    setData({...prev, [e.target.name]:e.target.value})
  }

  function handleUpload() {
    if (!file) {
      alert("Please choose a file first!");
      return;
    }
  
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error(error);
      },
      () => {
        // This function executes when the upload is complete
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            console.log("File uploaded successfully. URL:", url);
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
          });
      }
    );
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/leave-Request");
      console.log(res.data);
    } catch (error) {
      console.log(error.stack);
    }
  };

  // console.log(file);

  return (
    <div className="addLeave">
      <h1>
        Request <span>Leave</span>
      </h1>
      <form className="form">
        <div class="inputBox">
          <div class="input">
            <span>Type of Leave</span>
            <input type="text" placeholder="Sick Leave" name="type" onChange={handleChange} />
          </div>
          <div class="input">
            <span>Duration</span>
            <input type="text" placeholder="2 days" name="days" onChange={handleChange} />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Email</span>
            <input
              type="Email"
              placeholder="johndoe@sfit.ac.in"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div class="input">
            <span>Phone No.</span>
            <input
              type="number"
              placeholder="9876543210"
              name="phoneno"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Start Date</span>
            <input
              type="date"
              min={currentDate}
              onChange={handleStartDateChange}
              name="startDate"
            />
          </div>
          <div class="input">
            <span>End Date</span>
            <input
              type="date"
              min={currentDate}
              onChange={handleStartDateChange}
              name="endDate"
            />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Attachments</span>
            <input
              type="file"
              name="attachment"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
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

        <button type="submit" className="btn" onClick={handleUpload}>
          Apply Leave
        </button>
      </form>
    </div>
  );
};

export default ApplyLeave;
