import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import axios from "axios";

const BarChartGraph = () => {
  const [leaves, setLeaves] = useState([]);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const id = user.details._id;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/leaveRequest/user-leaves/${id}`
        );
        const leavesData = res.data.leaves;
        const stats = await axios.post("http://localhost:8800/calculateByMonth", {
          leaves: leavesData,
        });
        setLeaves(stats.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, [id]);

  const chartSetting = {
    yAxis: [
      {
        label: "No of days",
      },
    ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(0px, 0)",
      },
    },
  };

  const valueFormatter = (value) => `${value}days`;

  return (
    <div>
      {leaves.length > 0 && (
        <BarChart
          dataset={leaves}
          xAxis={[{ scaleType: "band", dataKey: "month", label: "months" }]}
          series={[
            { dataKey: "annualLeave", label: "Annual Leave", valueFormatter },
            { dataKey: "sickLeave", label: "Sick Leave", valueFormatter },
            { dataKey: "casualLeave", label: "Casual Leave", valueFormatter },
          ]}
          {...chartSetting}
        />
      )}
    </div>
  );
};

export default BarChartGraph;
