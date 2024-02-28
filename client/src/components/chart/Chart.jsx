import React from 'react';
import './chart.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from "recharts";

const data = [
  { name: "September", Total: 200 },
  { name: "Octomber", Total: 100 },
  { name: "November", Total: 180 },
  { name: "December", Total: 500 },
  { name: "January", Total: 420 },
  { name: "February", Total: 350 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height="100%" aspect={aspect}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }}/>
          <YAxis domain={[0, 800]}/>
          <Tooltip />
          <Legend payload={[
              { value: 'Total staffs Leaves', type: 'rect', color: '#8884d8' }, // Change 'Total' to the desired label
            ]} />
          <Bar dataKey="Total" fill="#8884d8" barSize={30}>
            <LabelList dataKey="Total" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;
