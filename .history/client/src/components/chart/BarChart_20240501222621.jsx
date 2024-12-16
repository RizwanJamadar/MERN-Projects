import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const BarChartGraph = () => {
  const [leaveStats, setLeaveStats] = useState([]);

  const chartSetting = {
    yAxis: [
      {
        label: 'No of days',
      },
    ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(0px, 0)',
      },
    },
  };

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const id = user.details._id;

  useEffect(() => {
    const fetchLeaveStats = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/leaveRequest/user-leaves/${id}`);
        const leavesData = res.data.leaves; // Assuming res.data.leaves is an array
        setLeaves(leavesData); // Set the leaves state with the received data
    
        const response = await axios.post("http://localhost:8800/calculateByMonth", { leaves: leavesData });
        setLeaveStats(response.data);
      } catch (error) {
        console.error('Error fetching leave stats:', error);
      }
    };

    fetchLeaveStats();
  }, []); // Empty dependency array to fetch data only once on component mount

  const valueFormatter = (value) => `${value} days`;

  return (
    <div>
      <BarChart
        dataset={leaveStats}
        xAxis={[{ scaleType: 'band', dataKey: 'month', label: 'months' }]}
        series={[
          { dataKey: 'annualLeave', label: 'Annual Leave', valueFormatter },
          { dataKey: 'sickLeave', label: 'Sick Leave', valueFormatter },
          { dataKey: 'casualLeave', label: 'Casual Leave', valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
};

export default BarChartGraph;
