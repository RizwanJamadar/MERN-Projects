import React, { useEffect, useState } from "react";
import "./leave.css";
import { useLocation, useParams } from "react-router-dom";
import { dummyData } from "../../constant";
import PaginationTable from "../../components/pagiTable/PaginationTable";
import axios from "axios";

const AllLeaves = () => {
  const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
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

      try {
        const res = await axios.get(
          `http://localhost:8800/api/leaveRequest/user-leaves/${id}`
        );
        // console.log(res.data);
        setData(res.data.leaves);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  // console.log(data);
  useEffect(()=>{
    // console.log(data);

    const filtered = data.filter((item) => item.status === category);
    setData(filtered)
    // Remove the 'action' property from filtered objects
    // const filteredWithoutAction = filtered.map((obj) => {
    //   const { action, ...rest } = obj;
    //   return rest;
    // });
    // setData(filteredWithoutAction);
  },[category])

  const columns = [
    { id: "srno", label: "SNo", minWidth: 50 },
    { id: "name", label: "Name", minWidth: 100 },
    { id: "department", label: "Department", minWidth: 100 },
    { id: "type", label: "Type", minWidth: 100 },
    { id: "from", label: "From", minWidth: 100 },
    { id: "to", label: "To", minWidth: 100 },
    { id: "days", label: "Days", minWidth: 100 },
    { id: "status", label: "Status", minWidth: 100 },
  ];

  return (
    <>
      <div className="leave">
        <PaginationTable columns={columns} Data={data} count={5} />
      </div>
    </>
  );
};

export default AllLeaves;
