import React from "react";
import "./userdashboard.css";
import { Box, CircularProgress, Typography } from "@mui/material";

const UserDashboard = () => {
  return (
    <div className="userdashboard">
      <div className="user_left">
        <div className="user_analysis">
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="solid"
              color="success"
              determinate
              value={(10 / 30) * 100}
              size="lg"
              sx={{ "--CircularProgress-size": "80px" }}
            />
            <Typography variant="title-lg" component="h4" color="text.primary">
              2 / 3
            </Typography>
            {/* </CircularProgress> */}
          </Box>
        </div>
        <div className="user_charts">chart</div>
      </div>

      <div className="user_right">user_right</div>
    </div>
  );
};

export default UserDashboard;
