import React from "react";
import "./employee.css";

const AddEmployee = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      const formData = e.target;
      const objectData = new FormData(formData);
      const data = Object.fromEntries(objectData.entries());
      console.log(data);
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
            <span>Fist Name</span>
            <input type="text" placeholder="John" name="firstName" />
          </div>
          <div className="input">
            <span>Last Name</span>
            <input type="text" placeholder="Doe" name="lastName"/>
          </div>
        </div>

        <div className="inputBox">
          <div className="input">
            <span>Email Name</span>
            <input type="Email" placeholder="johndoe@sfit.ac.in" name="email" />
          </div>
          <div className="input">
            <span>Phone No.</span>
            <input type="number" placeholder="9876543210" name="phoneNumber"/>
          </div>
        </div>

        <div className="inputBox">
          <div className="input">
            <span>Password</span>
            <input type="password" placeholder="Enter a password" name="password" />
          </div>
          <div className="input">
            <span>Gender</span>
            <div className="radio">
              <div>
                <input type="radio" name="gender" value="male" id="male" />
                <label htmlFor="male">male</label>
              </div>
              <div>
                <input type="radio" name="gender" value="female" id="female" />
                <label htmlFor="female">female</label>
              </div>
            </div>
          </div>
        </div>

        <div className="inputBox">
          <div className="input">
            <span>Department</span>
            <select name="department" className="box" required>
              <option value="" disabled selected>
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
            <select name="Role" className="box" required>
              <option value="" disabled selected>
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
    </div>
  );
};

export default AddEmployee;
