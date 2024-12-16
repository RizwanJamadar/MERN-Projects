import React, { useEffect, useState } from "react";
import "./leave.css";
import { useLocation, useParams } from "react-router-dom";
import { dummyData } from "../../constant";
import PaginationTable from "../../components/pagiTable/PaginationTable";
import axios from "axios";

const AllLeaves = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { category } = useParams();

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const id = user.details._id;

  useEffect(() => {
    const fetchData = async () => {
      let endpoint = "";
      let setDataBasedOnCategory = null;
  
      if (category === "user") {
        endpoint = `http://localhost:8800/api/leaveRequests/user-leaves/${id}`;
        setDataBasedOnCategory = (data) => setData(data.leaves);
      } else if (category === "hod") {
        endpoint = "http://localhost:8800/api/leaveRequests/deptStaff";
        setDataBasedOnCategory = setData;
      } else if (category === "vp") {
        endpoint = "http://localhost:8800/api/leaveRequests/allStaff";
        setDataBasedOnCategory = setData;
      }
  
      const authToken = user.token;
  
      const headers = {
        Authorization: `${authToken}`, // Use 'Bearer' if it's a token-based authentication
        "Content-Type": "application/json", // Set the content type according to your API requirements
      };
  
      try {
        const res = await axios.get(endpoint, { headers });
        setDataBasedOnCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, category, user.token]); // Make sure to include category and user.token in the dependency array
  ;

  // console.log(data);

  useEffect(() => {
    // Filter data based on category whenever category changes
    const filtered = data.filter((item) => item.status === category);
    setFilteredData(filtered);
  }, [data, category]);

  // console.log(filteredData);

  const columns = [
    { id: "_id", label: "SNo", minWidth: 50 },
    { id: "type", label: "Type", minWidth: 100 },
    { id: "startDate", label: "From", minWidth: 100},
    { id: "endDate", label: "To", minWidth: 100},
    { id: "days", label: "Days", minWidth: 100 },
    { id: "reason", label: "Reason", minWidth: 100 },
    { id: "status", label: "Status", minWidth: 100 },
  ];

  return (
    <>
      <div className="leave">
        <PaginationTable columns={columns} Data={filteredData} count={5} />
      </div>
    </>
  );
};

export default AllLeaves;
