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
            variant="determinate" 
            thickness={12}
            size={50}
            color="success"
            />
            <Typography variant="title-lg" component="h4" color="text.primary">
              2 / 3
            </Typography>
          </Box>
        </div>
        <div className="user_charts">chart</div>
      </div>

      <div className="user_right">user_right</div>
    </div>
  );
};

export default UserDashboard;
