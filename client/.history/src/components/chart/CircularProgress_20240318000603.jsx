import React from "react";
import { Typography, colors } from "@mui/joy";
import CircularProgress from '@mui/joy/CircularProgress';

const CircularProgress = ({ totalLeaves, leavesTaken,color }) => {
  const remainingLeaves = totalLeaves - leavesTaken;
  return (
    <div>
      <CircularProgress
        color={color}
        sx={{ "--CircularProgress-size": "80px" }}
        thickness={8}
        determinate
        variant="solid"
        value={(leavesTaken / totalLeaves) * 100}
      >
        <Typography level="h2" fontSize="xl">
          {remainingLeaves}
        </Typography>
      </CircularProgress>
    </div>
  );
};

export default CircularProgress;
