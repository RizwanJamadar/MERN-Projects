import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const BarChartGraph = () => {
    const chartSetting = {
        yAxis: [
          {
            label: 'rainfall (mm)',
          },
        ],
        width: 500,
        height: 300,
        sx: {
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
          },
        },
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

    const valueFormatter = (value) => `${value}mm`;

  return (
    <div>
         <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'annaul', label: 'London', valueFormatter },
        { dataKey: 'sick', label: 'Paris', valueFormatter },
        { dataKey: 'casual', label: 'New York', valueFormatter },
      ]}
      {...chartSetting}
    />
    </div>
  )
}

export default BarChartGraph