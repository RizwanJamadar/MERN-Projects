import React, { useState } from "react";
import "./table.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Add from "@mui/icons-material/Add";

import { rows } from '../../constant';


import Table1 from "./Table";

const List = () => {
    const [isActive, setIsActive] = useState(false);
    
  return (
    <>
      <TableContainer component={Paper} className="table">
        <div className="listTitle">
          Recent Activity
          <Add style={{ cursor: "pointer" }} onClick={()=>setIsActive(true)}/>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Staff ID</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Days</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">
                  {row.id.toString().slice(1, 5)}...
                </TableCell>
                <TableCell className="tableCell">
                  {row.name.slice(0, 7)}
                </TableCell>
                <TableCell className="tableCell">{row.days}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>
                    On {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

     {isActive &&  <div className="MainTable">
     <Table1 setIsActive={setIsActive}  />
     </div> }
    </>
  );
};

export default List;
