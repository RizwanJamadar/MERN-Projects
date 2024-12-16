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

  function handleUpload() {
    if (!file) {
        alert("Please choose a file first!")
    }
 
    const storageRef = ref(storage,`/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);
 
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
 
            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
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

  console.log(file);

  return (
    <div className="addLeave">
      <h1>
        Request <span>Leave</span>
      </h1>
      <form className="form" onSubmit={handleUpload}>
        <div class="inputBox">
          <div class="input">
            <span>Type of Leave</span>
            <input type="text" placeholder="Sick Leave" name="type" />
          </div>
          <div class="input">
            <span>Duration</span>
            <input type="text" placeholder="2 days" name="days" />
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
            />
          </div>
          <div class="input">
            <span>Phone No.</span>
            <input
              type="number"
              placeholder="9876543210"
              name="phoneno"
              value={user.details.phoneno}
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
