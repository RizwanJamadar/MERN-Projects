import React, { useState } from "react";
import "./employee.css";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneno: "",
    password: "",
    gender: "",
    department: "",
    role: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      // Validation
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneno || !formData.password || !formData.gender || !formData.department || !formData.role) {
        toast.error('All fields are required');
        return;
      }

      const user = JSON.parse(localStorage.getItem("currentUser"));
      const authToken = user.token;

      const headers = {
        Authorization: `${authToken}`,
        "Content-Type": "application/json",
      };

      const res = await axios.post("http://localhost:8800/api/auth/register", formData, { headers });
      navigate("/showEmployees")
      toast.success(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="addEmployee">
      <h1>
        Enroll <span>Faculty</span>
      </h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputBox">
          <div className="input">
            <span>First Name</span>
            <input type="text" placeholder="John" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="input">
            <span>Last Name</span>
            <input type="text" placeholder="Doe" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="inputBox">
          <div className="input">
            <span>Email Name</span>
            <input type="Email" placeholder="johndoe@sfit.ac.in" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="input">
            <span>Phone No.</span>
            <input type="number" placeholder="9876543210" name="phoneno" value={formData.phoneno} onChange={handleChange} />
          </div>
        </div>

        <div className="inputBox">
          <div className="input">
            <span>Password</span>
            <input type="password" placeholder="Enter a password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="input">
            <span>Gender</span>
            <div className="radio">
              <div>
                <input type="radio" name="gender" value="male" id="male" checked={formData.gender === "male"} onChange={handleChange} />
                <label htmlFor="male">male</label>
              </div>
              <div>
                <input type="radio" name="gender" value="female" id="female" checked={formData.gender === "female"} onChange={handleChange} />
                <label htmlFor="female">female</label>
              </div>
            </div>
          </div>
        </div>

        <div className="inputBox">
          <div className="input">
            <span>Department</span>
            <select name="department" className="box" required value={formData.department} onChange={handleChange}>
              <option value="" disabled>
                Department --
              </option>
              <option value="coms">Computer Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="ME">Mechnical Engineering</option>
              <option value="EXTC">Elctronics & Tel comm.</option>
            </select>
          </div>
          <div className="input">
            <span>Role</span>
            <select name="role" className="box" required value={formData.role} onChange={handleChange}>
              <option value="" disabled>
                Role --
              </option>
              <option value="hod">HOD</option>
              <option value="vhod">Vice HOD</option>
              <option value="Professor">Professor</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn">
          Enroll Now
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddEmployee;
