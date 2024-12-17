import React, { useEffect, useState } from "react";
import "./employee.css";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom"

// import { staffData } from "../../constant";
import PaginationTable from "../../components/pagiTable/PaginationTable";
import axios from "axios";

const ShowEmployee = () => {
  const [staffData, setStaffData] = useState([]);
  
  const columns = [
    { id: '_id', label: 'ID', minWidth: 50 },
    { id: 'firstName', label: 'Fist Name', minWidth: 100 },
    { id: 'lastName', label: 'Last Name', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'department', label: 'Department', minWidth: 100 },
    { id: 'Role', label: 'Position', minWidth: 100 },
    // Add more columns as needed
  ];


  const fetchData = async () =>{
    const user = JSON.parse(localStorage.getItem("currentUser"));
    try {
      let apiUrl;
      if (user.Role === 'vp') {
        apiUrl = `${import.meta.env.VITE_URL_BACK_END}/auth/allUsers`;
      } else if (user.Role === 'hod') {
        apiUrl = 'http://localhost:8800/api/auth/departmentProfessor';
      } else {
        throw new Error('Invalid user role');
      }

      const authToken = user.token;

      // console.log(data);

      const headers = {
        Authorization: `${authToken}`, // Use 'Bearer' if it's a token-based authentication
        "Content-Type": "application/json", // Set the content type according to your API requirements
      };

      const res = await axios.get(apiUrl,{headers});
      setStaffData(res.data)
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  // console.log(staffData1);

  return (
    <div className="showEmployee">
      <div className="show">
        <div className="top space-between">
          <div className="Search center">
            <input type="text" placeholder="Search Staff" />
            <SearchIcon style={{fontSize:"20px", cursor:"pointer"}} color="gray" />
          </div>
          <Link to="/addEmployee">
          <button type="submit" className="btn">Add Staff</button>
          </Link>
        </div>
        <div className="bottom">
          <PaginationTable Data={staffData} columns={columns} count={7}/>
        </div>
      </div>
    </div>
  );
};

export default ShowEmployee;
