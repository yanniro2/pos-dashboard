import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Details from "./Details";

type Props = {};

const salesData = [
  {
    month: "Jan",
    lastYearSales: 4000,
    currentYearSales: 2400,
    totalSales: 2400,
  },
  {
    month: "Feb",
    lastYearSales: 3000,
    currentYearSales: 1398,
    totalSales: 2210,
  },
  {
    month: "Mar",
    lastYearSales: 2000,
    currentYearSales: 9800,
    totalSales: 2290,
  },
  {
    month: "Apr",
    lastYearSales: 2780,
    currentYearSales: 3908,
    totalSales: 2000,
  },
  {
    month: "May",
    lastYearSales: 1890,
    currentYearSales: 4800,
    totalSales: 2181,
  },
  {
    month: "Jun",
    lastYearSales: 2390,
    currentYearSales: 3800,
    totalSales: 2500,
  },
  {
    month: "Jul",
    lastYearSales: 3490,
    currentYearSales: 4300,
    totalSales: 2100,
  },
];

const SalesAreaChart = (props: Props) => {
  return (
    <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
      <h2 className="h3 p-4">Monthly Sales Report (AreaChart)</h2>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={730}
          height={250}
          data={salesData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorLastYearSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="colorCurrentYearSales"
              x1="0"
              y1="0"
              x2="0"
              y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorTotalSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff0000" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff0000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {/* <Legend /> */}
          <Area
            type="monotone"
            dataKey="lastYearSales"
            fillOpacity={1}
            stroke="stroke-bg-secoundary"
            fill="fill-bg-secoundary"
            className="stroke-secoundary fill-secoundary"
          />
          <Area
            type="monotone"
            dataKey="currentYearSales"
            fillOpacity={1}
            stroke="stroke-third"
            fill="fill-bg-third"
            className="stroke-third fill-third"
          />
          <Area
            type="monotone"
            dataKey="totalSales"
            stroke="stroke-bg-primary"
            fill="fill-bg-primary"
            className="stroke-primary fill-primary"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="capitalize flex items-center w-full justify-around mx-auto">
        <Details color="bg-primary" title="last Year Sales" />
        <Details color="bg-secoundary" title="current Year Sales" />
        <Details color="bg-third" title="total Sales" />
      </div>
    </div>
  );
};

export default SalesAreaChart;
