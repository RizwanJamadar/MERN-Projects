import React, { useEffect, useState } from "react";
import "./leave.css";
import { useLocation, useParams } from "react-router-dom";
import { dummyData } from "../../constant";
import PaginationTable from "../../components/pagiTable/PaginationTable";

const AllLeaves = () => {
  const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const filtered = dummyData.filter(item => item.status === category);
    // Remove the 'action' property from filtered objects
    const filteredWithoutAction = filtered.map(obj => {
      const { action, ...rest } = obj;
      return rest;
    });
    setData(filteredWithoutAction);
  }, [category]);

  // console.log(data);

  const columns = [
    { id: 'srno', label: 'SNo', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'department', label: 'Department', minWidth: 100 },
    { id: 'type', label: 'Type', minWidth: 100 },
    { id: 'from', label: 'From', minWidth: 100 },
    { id: 'to', label: 'To', minWidth: 100 },
    { id: 'days', label: 'Days', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 }
  ]

  return (
    <>
    <div className="leave">
      <PaginationTable columns={columns} Data={data} count={5}/>
    </div>
    </>
  );
};

export default AllLeaves;
