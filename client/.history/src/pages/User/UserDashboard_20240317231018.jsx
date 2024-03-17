import React from "react";
import "./userdashboard.css"
import { Box, CircularProgress, Typography } from '@mui/material';

const UserDashboard = () => {
  return (
    <div className="userdashboard">
      <div className="user_left">
        <div className="user_analysis">
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          2 / 3
        </Typography>
      </Box>
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
