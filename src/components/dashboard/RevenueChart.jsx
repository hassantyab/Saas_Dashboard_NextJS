"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", revenue: 400, expenses: 200 },
  { name: "Feb", revenue: 700, expenses: 300 },
  { name: "Mar", revenue: 900, expenses: 450 },
  { name: "Apr", revenue: 1100, expenses: 500 },
  { name: "May", revenue: 1200, expenses: 400 },
  { name: "Jun", revenue: 1300, expenses: 350 },
  { name: "Jul", revenue: 1500, expenses: 600 },
  { name: "Aug", revenue: 1700, expenses: 700 },
  { name: "Sep", revenue: 1600, expenses: 650 },
  { name: "Oct", revenue: 1400, expenses: 500 },
  { name: "Nov", revenue: 1500, expenses: 450 },
  { name: "Dec", revenue: 1900, expenses: 800 }
];

export default function RevenueChart() {
  return (
    <div className="card p-6 mt-6">
      <h2 className="font-semibold mb-4">Revenue Analysis</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Line dataKey="revenue" stroke="#61588f" />
          <Line dataKey="expenses" stroke="#bf003c" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}