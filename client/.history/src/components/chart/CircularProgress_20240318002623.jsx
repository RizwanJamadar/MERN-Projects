import React from "react";
import Box from '@mui/joy/Box';
import { Typography, colors } from "@mui/joy";
import CircularProgress from '@mui/joy/CircularProgress';

const CircularProgressBar = ({ totalLeaves, leavesTaken,color }) => {
  const remainingLeaves = totalLeaves - leavesTaken;
  return (
    <div>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <CircularProgress
        color={color}
        sx={{ "--CircularProgress-size": "80px" }}
        thickness={8}
        determinate
        variant="solid"
        value={(leavesTaken / totalLeaves) * 100}
      >
        <Typography level="h2" fontSize="xl">
          {color == "primary" ? remainingLeaves : leavesTaken}
        </Typography>
      </CircularProgress>
      </Box>
    </div>
  );
};

export default CircularProgressBar;
