import React from "react";
import "./userdashboard.css";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import ReportIcon from "@mui/icons-material/Report";
import WarningIcon from "@mui/icons-material/Warning";
import { Typography } from "@mui/material";

const UserDashboard = () => {
  return (
    <div className="userdashboard">
      <div className="user_left">
        <div className="user_analysis">
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <CircularProgress color="warning">
              <WarningIcon color="warning" />
            </CircularProgress>
            <CircularProgress size="lg" determinate value={66.67}>
              2 / 3
            </CircularProgress>
            <CircularProgress
              color="danger"
              sx={{ "--CircularProgress-size": "80px" }}
              thickness={8}
            >
              <Typography
                level="body-sm"
                fontWeight="xl"
                id="variant-label"
                textColor="text.primary"
                variant="title-lg" color="textPrimary"
              >
                10
              </Typography>
            </CircularProgress>
          </Box>
        </div>
        <div className="user_charts">chart</div>
      </div>

      <div className="user_right">user_right</div>
    </div>
  );
};

export default UserDashboard;
