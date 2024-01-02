import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import Details from "./Details";

const salesData = [
  {
    month: "Jan",
    totalSales: 4000,
    additionalSales: 2400,
  },
  {
    month: "Feb",
    totalSales: 4800,
    additionalSales: 3200,
  },
  {
    month: "Mar",
    totalSales: 5500,
    additionalSales: 4000,
  },
  {
    month: "Apr",
    totalSales: 6200,
    additionalSales: 4800,
  },
  {
    month: "May",
    totalSales: 7000,
    additionalSales: 5500,
  },
  {
    month: "Jun",
    totalSales: 7800,
    additionalSales: 6200,
  },
  {
    month: "Jul",
    totalSales: 8500,
    additionalSales: 7000,
  },
];

const PieChartComponent: React.FC = () => {
  const COLORS = ["primary", "secoundary"]; // Define colors for the Pie segments

  return (
    <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
      <h2 className="h3 p-4">Monthly Sales Report (PieChart)</h2>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={salesData}
            dataKey="totalSales"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={50}
            className="fill-secoundary"
            fill="fill-bg-secoundary"
          />
          <Pie
            data={salesData}
            dataKey="additionalSales"
            nameKey="month"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            className="fill-primary"
            fill="fill-bg-primary"
            label>
            {salesData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`fill-bg-${entry}`}
                className={`fill-${entry}`}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="capitalize flex items-center w-1/2 justify-between mx-auto">
        <Details color="bg-primary" title="Additional Sales" />
        <Details color="bg-secoundary" title="Total Sales" />
      </div>
    </div>
  );
};

export default PieChartComponent;
