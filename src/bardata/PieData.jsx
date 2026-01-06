import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const salesData = [
  { month: "Jan", totalSales: 12000, unitsSold: 5500 },
  { month: "Feb", totalSales: 15000, unitsSold: 12500 },
  { month: "Mar", totalSales: 13000, unitsSold: 3500 },
  { month: "Apr", totalSales: 17000, unitsSold: 2578 },
  { month: "May", totalSales: 20000, unitsSold: 14000 },
  { month: "Jun", totalSales: 22000, unitsSold: 8000 },
  { month: "Jul", totalSales: 18000, unitsSold: 7596 },
  { month: "Aug", totalSales: 21000, unitsSold: 9658 },
  { month: "Sep", totalSales: 19000, unitsSold: 7000 },
  { month: "Oct", totalSales: 23000, unitsSold: 11000 },
  { month: "Nov", totalSales: 25000, unitsSold: 12789 },
  { month: "Dec", totalSales: 27000, unitsSold: 18000 },
];

const COLORS = [
  "#00458a",
  "#1976d2",
  "#2196f3",
  "#64b5f6",
  "#90caf9",
  "#bbdefb",
  "#0d47a1",
  "#1565c0",
  "#1e88e5",
  "#42a5f5",
  "#82b1ff",
  "#2962ff",
];

const PieData = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={salesData}
            dataKey="totalSales"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {salesData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieData;
