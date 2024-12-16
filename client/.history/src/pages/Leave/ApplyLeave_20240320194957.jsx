import React, { useEffect, useState } from "react";
import "./leave.css";
import axios from "axios";
import { getStorage, ref, uploadBytes, uploadBytesResumable,getDownloadURL } from "firebase/storage";

import app from "../../firebase.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ApplyLeave = () => {
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

  const [file, setFile] = useState(null);
  const navigate = useNavigate()

  // Get current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split("T")[0];

  const handleChange = (e) =>{
    setData((prev)=>{
      return{...prev,[e.target.name]:e.target.value};
    })
  }

  const upload = (file) => {
    const storage = getStorage(app);

    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, "images/" + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          toast.success("File Uploaded Successfully.");
          setData((prev)=>{
            return {
              ...prev, 
              attachment:downloadURL
            }
          })
        });
      }
    );
  };

  useEffect(() => {
    file && upload(file);
  }, []);
  
  // console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/leaveRequest/addRequest",data);
      console.log(res.data);
      toast.success(res.data)
      navigate("/")
    } catch (error) {
      toast.error("Someting wents wrong!!")
      console.log(error.stack);
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
              name="startDate"
              onChange={handleChange}
            />
          </div>
          <div class="input">
            <span>End Date</span>
            <input
              type="date"
              min={currentDate}
              name="endDate"
              onChange={handleChange}
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

        <button type="submit" className="btn">
          Apply Leave
        </button>
      </form>
    </div>
  );
};

export default ApplyLeave;
