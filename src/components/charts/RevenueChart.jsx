"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 }
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="revenue" stroke="#6366f1" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}