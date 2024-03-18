import React from "react";
import "./employee.css";

const AddEmployee = () => {
  return (
    <div className="addEmployee">
      <h1>
        Enroll <span>Tutor</span>
      </h1>
      <div className="form">
        <div class="inputBox">
          <div class="input">
            <span>Fist Name</span>
            <input type="text" placeholder="John" />
          </div>
          <div class="input">
            <span>Last Name</span>
            <input type="text" placeholder="Doe" />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Email Name</span>
            <input type="Email" placeholder="johndoe@sfit.ac.in" />
          </div>
          <div class="input">
            <span>Phone No.</span>
            <input type="number" placeholder="9876543210" />
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Password</span>
            <input type="password" placeholder="Enter a password" />
          </div>
          <div class="input">
            <span>Gender</span>
            <div class="radio">
              <div>
                <input type="radio" name="gender" value="male" id="male" />
                <label for="male">male</label>
              </div>
              <div>
                <input type="radio" name="gender" value="female" id="female" />
                <label for="female">female</label>
              </div>
            </div>
          </div>
        </div>

        <div class="inputBox">
          <div class="input">
            <span>Department</span>
            <select name="couses" class="box" required>
              <option value="" disabled selected>
                Department --
              </option>
              <option value="coms">Computer Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="ME">Mechnical Engineering</option>
              <option value="EXTC">Elctronics & Tel comm.</option>
            </select>
          </div>
          <div class="input">
            <span>Role</span>
            <select name="couses" class="box" required>
              <option value="" disabled selected>
                Role --
              </option>
              <option value="HOD">HOD</option>
              <option value="VHOD">Vice HOD</option>
              <option value="Professor">Professor</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
