import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import axios from "axios";

const BarChartGraph = () => {
  const [leaves, setLeaves] = useState([]);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const id = user.details._id;
  // console.log(id);

  const getUserData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8800/api/leaveRequest/user-leaves/${id}`
      );
      const leavesData = res.data.leaves; // Assuming res.data.leaves is an array
      // setLeaves(leavesData); // Set the leaves state with the received data
      console.log(leavesData);


      const stats = await axios.post("http://localhost:8800/calculateByMonth", {
        leaves: leavesData,
      }); // Send the array as part of the request body
      // setLeaves(stats.data);
      // console.log(stats.data);
      const dataArray = Object.entries(stats.data).map(([date, stats]) => ({
        date,
        ...stats
      }));
      
      setLeaves(dataArray);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUserData();
  }, []);

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

  const dataset = [
    {
      annual: leaves[0].annualLeave,
      sick: leaves[0].sickLeave,
      casual: leaves[0].casualLeave,
      month: "Mar",
    },
    {
      annual: leaves[1].annualLeave,
      sick: leaves[1].sickLeave,
      casual: leaves[1].casualLeave,
      month: "Apr",
    },
    {
      annual: leaves[2].annualLeave,
      sick: leaves[2].sickLeave,
      casual: leaves[2].casualLeave,
      month: "May",
    },
  ];

  // const dataset = [
  //   {
  //     annual: 3,
  //     sick: 3,
  //     casual: 3,
  //     month: "feb",
  //   },
  //   {
  //     annual: 3,
  //     sick: 3,
  //     casual: 3,
  //     month: "Mar",
  //   },
  //   {
  //     annual: 3,
  //     sick: 3,
  //     casual: 3,
  //     month: "Apr",
  //   },
  // ];

  const valueFormatter = (value) => `${value}days`;

  return (
    <div>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month", label: "months" }]}
        series={[
          { dataKey: "annual", label: "Annaul Leave", valueFormatter },
          { dataKey: "sick", label: "Sick Leave", valueFormatter },
          { dataKey: "casual", label: "Casual Leave", valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
};

export default BarChartGraph;
