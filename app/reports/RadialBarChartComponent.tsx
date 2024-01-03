import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Details from "./DetailsTypeOne";

const salesData = [
  {
    month: "Jan",
    totalSales: 4000,
    additionalSales: 2400,
    fill: "#ff6666", // Red shade 1
  },
  {
    month: "Feb",
    totalSales: 4800,
    additionalSales: 3200,
    fill: "#ff3333", // Red shade 2
  },
  {
    month: "Mar",
    totalSales: 5500,
    additionalSales: 4000,
    fill: "#ff0000", // Red shade 3
  },
  {
    month: "Apr",
    totalSales: 6200,
    additionalSales: 4800,
    fill: "#cc0000", // Red shade 4
  },
  {
    month: "May",
    totalSales: 7000,
    additionalSales: 5500,
    fill: "#990000", // Red shade 5
  },
  {
    month: "Jun",
    totalSales: 7800,
    additionalSales: 6200,
    fill: "#660000", // Red shade 6
  },
  {
    month: "Jul",
    totalSales: 8500,
    additionalSales: 7000,
    fill: "#330000", // Red shade 7
  },
];

const RadialBarChartComponent: React.FC = () => {
  return (
    <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
      <h2 className="h3 p-4">Monthly Sales Report (RadialBarChart)</h2>
      <ResponsiveContainer width="100%" height="80%">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="10%"
          outerRadius="80%"
          data={salesData}
          startAngle={180}
          endAngle={0}>
          <RadialBar
            label={{ fill: "#666", position: "insideStart" }}
            background
            dataKey="totalSales"
          />

          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="capitalize w-full mx-auto flex justify-evenly">
        {salesData.map((entry, index) => (
          <Details key={index} color={entry.fill} title={entry.month} />
        ))}
      </div>
    </div>
  );
};

export default RadialBarChartComponent;
