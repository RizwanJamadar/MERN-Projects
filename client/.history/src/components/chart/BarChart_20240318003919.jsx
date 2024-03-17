import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const BarChartGraph = () => {
    const chartSetting = {
        yAxis: [
          {
            label: 'No of days',
          },
        ],
        width: 500,
        height: 300,
      };

    const dataset = [
        {
            annual:10,
            sick:8,
            casual:6,
            month:"Dec"
        },
        {
            annual:6,
            sick:9,
            casual:4,
            month:"Jan"
        },
        {
            annual:8,
            sick:6,
            casual:4,
            month:"Feb"
        }
    ]

    const valueFormatter = (value) => `${value}days`;

  return (
    <div>
         <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'annual', label: 'Annaul Leave', valueFormatter },
        { dataKey: 'sick', label: 'Sick Leave', valueFormatter },
        { dataKey: 'casual', label: 'Casual Leave', valueFormatter },
      ]}
      {...chartSetting}
    />
    </div>
  )
}

export default BarChartGraph