import React from "react";
import "./userdashboard.css"
import { Box, CircularProgress, Typography } from '@mui/material';

const UserDashboard = () => {
  return (
    <div className="userdashboard">
      <div className="user_left">
        <div className="user_analysis">
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <CircularProgress
            thickness={10}
            size={50}
            value={50}
            varient="deteminate"
            sx={{
              color: "#4caf50",
            }}
          />
      </Box>
        </div>
        <div className="user_charts">
          chart
        </div>
      </div>

      <div className="user_right">
        user_right
      </div>
  </div>
  );
};

export default UserDashboard;