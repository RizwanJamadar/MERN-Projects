import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import './pagination.css'

const PaginationTable = ({ columns, Data, count }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(count);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, count));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer className="table">
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, textAlign: 'center', backgroundColor:"rgb(211,211,211,0.4)" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (  
                  <TableCell
                    key={column.id}
                    style={{ textTransform: "initial",textAlign: 'center' }}
                  >
                    {column.id === "action" ? (
                      <div className="buttons">
                        <button onClick={() => handleAction(row.id, "accept")} className="accept">
                          Accept
                        </button>
                        <button onClick={() => handleAction(row.id, "reject")} className="reject">
                          Reject
                        </button>
                      </div>
                    ) : (
                      row[column.id]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={Data.length}
        rowsPerPage={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPageOptions={false}
      />
    </Paper>
  );
};

export default PaginationTable;
