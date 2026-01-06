import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
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

const BarData = () => {
  return (  
    <div className="h-[200px] w-full lg:h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={salesData}
          barCategoryGap="15%"
          barGap={2}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend />

          {/* Total Sales Bar */}
          <Bar
            dataKey="totalSales"
            fill="#0e7c3c"
            radius={[4, 4, 0, 0]}
            activeBar={false}
          />

          {/* Units Sold Bar */}
          <Bar
            dataKey="unitsSold"
            fill="#61c27c"
            radius={[4, 4, 0, 0]}
            activeBar={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarData;
