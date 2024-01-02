import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
  Legend,
} from "recharts";
import Details from "./Details";

type Props = {};

const salesData = [
  {
    month: "Jan",
    totalSales: 4000,
    additionalSales: 2400,
  },
  {
    month: "Feb",
    totalSales: 3000,
    additionalSales: 1398,
  },
  {
    month: "Mar",
    totalSales: 2000,
    additionalSales: 9800,
  },
  {
    month: "Apr",
    totalSales: 2780,
    additionalSales: 3908,
  },
  {
    month: "May",
    totalSales: 1890,
    additionalSales: 4800,
  },
  {
    month: "Jun",
    totalSales: 2390,
    additionalSales: 3800,
  },
  {
    month: "Jul",
    totalSales: 3490,
    additionalSales: 4300,
  },
];

const BarChartComponent = (props: Props) => {
  return (
    <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
      <h2 className="h3 p-4">Monthly Sales Report (BarChart)</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart width={730} height={250} data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}

          <Bar
            dataKey="totalSales"
            className="fill-primary"
            fill="fill-bg-primary"
            name="Total Sales"
          />
          <Bar
            dataKey="additionalSales"
            className="fill-secoundary"
            fill="fill-bg-secoundary"
            name="Additional Sales"
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="capitalize flex items-center w-1/2 justify-between mx-auto">
        <Details color="bg-primary" title="Total Sales" />
        <Details color="bg-secoundary" title="Additional Sales" />
      </div>
    </div>
  );
};

export default BarChartComponent;
