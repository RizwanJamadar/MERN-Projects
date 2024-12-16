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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from "@mui/material";
import "./pagination.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // Adjust the format as needed
};

const PaginationTable = ({ columns, Data, count }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(count);
  const [openReasonDialog, setOpenReasonDialog] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [reason, setReason] = useState("");
  const [accepting, setAccepting] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, count));
    setPage(0);
  };

  const handleReject = (id) => {
    setSelectedRowId(id);
    setOpenReasonDialog(true);
  };

  const handleCloseReasonDialog = () => {
    setOpenReasonDialog(false);
    setReason("");
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmitReason = () => {
    // Here you can handle the submission of the reason, for example, send it to backend
    console.log("Reason:", reason);
    setOpenReasonDialog(false);
    setReason("");
  };

  const handleAccept = (id) => {
    // Handle accept logic here
    console.log("Accepted row with ID:", id);
  };

  const handleAttachmentDownload = (attachmentUrl) => {
    window.open(attachmentUrl, "_blank");
  };

  return (
    <Paper>
      <TableContainer className="table">
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column._id}
                  style={{
                    minWidth: column.minWidth,
                    textAlign: "center",
                    backgroundColor: "rgb(211,211,211,0.4)",
                  }}
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
                    style={{
                      textTransform: "initial",
                      textAlign: "center",
                    }}
                  >
                    {column.id === "firstName" ? (
                      <div>{row.userId.firstName}</div>
                    ) : column.id === "department" ? (
                      <div>{row.userId.department}</div>
                    ) : column.id === "_id" ? (
                      <div>{row[column.id].slice(0, 6)}...</div>
                    ) : column.id === "status" ? (
                      <div
                        style={{
                          padding: "5px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          color:
                            row.status === "Approved"
                              ? "green"
                              : row.status === "Rejected"
                              ? "red"
                              : "goldenrod",
                          backgroundColor:
                            row.status === "Approved"
                              ? "rgba(0, 128, 0, 0.151)"
                              : row.status === "Rejected"
                              ? "rgba(189, 189, 3, 0.103)"
                              : "rgba(234, 234, 58, 0.29)",
                        }}
                      >
                        {row[column.id]}
                      </div>
                    ) : column.id === "startDate" || column.id === "endDate" ? (
                      <div>{formatDate(row[column.id])}</div>
                    ) : column.id === "attachment" ? (
                      <div>
                        <button
                          className="accept"
                          onClick={() => handleAttachmentDownload(row[column.id])}
                          download
                        >
                          View
                        </button>
                      </div>
                    ) : column.id === "action" ? (
                      <div className="buttons">
                        <button
                          onClick={() => handleAccept(row.id)}
                          className="accept"
                          disabled={accepting}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(row.id)}
                          className="reject"
                          disabled={accepting}
                        >
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
      <Dialog open={openReasonDialog} onClose={handleCloseReasonDialog}>
        <DialogTitle>Reason for Rejection</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="reason"
            label="Reason"
            type="text"
            fullWidth
            value={reason}
            onChange={handleReasonChange}
            InputProps={{ style: { color: "black" } }}
            placeholder="Enter reason here"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReasonDialog} color="primary" sx={{bgcolor:"red",color:"white",":hover":0}}>
            Cancel
          </Button>
          <Button onClick={handleSubmitReason} color="primary" sx={{bgcolor:"green",color:"white"}}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default PaginationTable;
