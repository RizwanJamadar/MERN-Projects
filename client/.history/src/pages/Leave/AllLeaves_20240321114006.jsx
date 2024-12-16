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

      // if (category === "user") {
      //   endpoint = `http://localhost:8800/api/leaveRequests/user-leaves/${id}`;
      // } else if (category === "hod") {
      //   endpoint = "http://localhost:8800/api/leaves-hod";
      // } else if (category === "vp") {
      //   endpoint = "http://localhost:8800/api/leaves-vp";
      // }

      const authToken = user.token;

      const headers = {
        Authorization: `${authToken}`, // Use 'Bearer' if it's a token-based authentication
        "Content-Type": "application/json", // Set the content type according to your API requirements
      };

      try {
        const res = await axios.get(
          `http://localhost:8800/api/leaveRequest/user-leaves/${id}`,
          // "http://localhost:8800/api/leaveRequest/deptStaff",
          {headers}
        );
        // console.log(res.data);
        setData(res.data.leaves);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  console.log(data);
  // useEffect(()=>{
  //   // console.log(data);

  //   const filtered = data.filter((item) => item.status === category);
  //   setData(filtered)
  //   // Remove the 'action' property from filtered objects
  //   // const filteredWithoutAction = filtered.map((obj) => {
  //   //   const { action, ...rest } = obj;
  //   //   return rest;
  //   // });
  //   // setData(filteredWithoutAction);
  // },[category])

  useEffect(() => {
    // Filter data based on category whenever category changes
    const filtered = data.filter((item) => item.status === category);
    setFilteredData(filtered);
  }, [data, category]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // You can adjust the format as needed
  };

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
