import React, { useEffect, useState } from 'react'
import PaginationTable from '../../components/pagiTable/PaginationTable'
import {dummyData} from "../../constant"
import { Link } from 'react-router-dom';
import './leave.css'
import axios from 'axios';

const RequestLeave = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const fetchData = async () => {
      let endpoint = "";

      if (user.Role === "hod") {
        endpoint = "http://localhost:8800/api/leaveRequest/deptStaff";
      } else if (user.Role === "vp") {
        endpoint = "http://localhost:8800/api/leaveRequest/allStaff";
      }

      const authToken = user.token;

      const headers = {
        Authorization: `${authToken}`, // Use 'Bearer' if it's a token-based authentication
        "Content-Type": "application/json", // Set the content type according to your API requirements
      };

      try {
        const res = await axios.get(endpoint, { headers });
          setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user.Role]);

  // console.log(data);

  useEffect(() => {
    // Filter data based on category whenever category changes
    const filtered = data.filter((item) => item.status === "Pending");
    setFilteredData(filtered);
  }, [data]);

  // console.log(filteredData);

  const userIds = filteredData.map(item => item.userId);

  console.log(userIds);

    const columns = [
        { id: '_id', label: 'SNo', minWidth: 50 },
        { id: `${userIds.firstName}`, label: 'Name', minWidth: 100 },
        { id: 'department', label: 'Department', minWidth: 100 },
        { id: 'type', label: 'Type', minWidth: 100 },
        { id: 'startDate', label: 'From', minWidth: 100 },
        { id: 'endDate', label: 'To', minWidth: 100 },
        { id: 'days', label: 'Days', minWidth: 100 },
        { id: 'action', label: 'Action', minWidth: 100 },
      ];

  return (
    <div className='requestedLeave'>
        <div className="show">
        <div className="top space-between">
        <h3>Requested Leaves</h3>
        <Link to="/addLeaveList">
          <button type="submit" className="btn">Add Leave</button>
          </Link>
        </div>
        <div className="table">
            <PaginationTable columns={columns} Data={filteredData} count={6}/>
        </div>
        </div>
    </div>
  )
}

export default RequestLeave