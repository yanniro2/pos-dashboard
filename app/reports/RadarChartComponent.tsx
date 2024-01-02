import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import Details from "./Details";

const salesData = [
  {
    month: "January",
    totalSales: 50000,
    additionalSales: 12000,
  },
  {
    month: "February",
    totalSales: 60000,
    additionalSales: 15000,
  },
  {
    month: "March",
    totalSales: 75000,
    additionalSales: 18000,
  },
  {
    month: "April",
    totalSales: 90000,
    additionalSales: 20000,
  },
  {
    month: "May",
    totalSales: 110000,
    additionalSales: 25000,
  },
  {
    month: "June",
    totalSales: 130000,
    additionalSales: 28000,
  },
  {
    month: "July",
    totalSales: 150000,
    additionalSales: 30000,
  },
];

const SalesReportRadarChart: React.FC = () => {
  return (
    <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
      <h2 className="h3 p-4">Monthly Sales Report (RadarChart)</h2>
      <ResponsiveContainer width="100%" height="80%">
        <RadarChart outerRadius={90} width={730} height={250} data={salesData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <PolarRadiusAxis angle={30} domain={[0, 150000]} />
          <Radar
            name="Total Sales"
            dataKey="totalSales"
            fillOpacity={0.6}
            className="fill-secoundary stroke-secoundary"
            fill="fill-bg-secoundary"
            stroke="stroke-bg-secoundary"
          />
          <Radar
            name="Additional Sales"
            dataKey="additionalSales"
            className="fill-primary stroke-primary"
            fill="fill-bg-primary"
            stroke="stroke-bg-primary"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>

      <div className="capitalize flex items-center w-1/2 justify-between mx-auto">
        <Details color="bg-primary" title="Total Sales" />
        <Details color="bg-secoundary" title="Additional Sales" />
      </div>
    </div>
  );
};

export default SalesReportRadarChart;
