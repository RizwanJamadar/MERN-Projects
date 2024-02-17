import React from "react";
import "./employee.css";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom"

import { staffData } from "../../constant";
import PaginationTable from "../../components/pagiTable/PaginationTable";

const ShowEmployee = () => {
  const columns = [
    { id: 'id', label: 'ID', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'department', label: 'Department', minWidth: 100 },
    { id: 'position', label: 'Position', minWidth: 100 },
    // Add more columns as needed
  ];

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
