import React, { useContext } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
  Legend,
} from "recharts";
import Details from "./Details";
import { CartContext } from "../contexts/CartContext";

type Props = {};

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

const LineChartComponent: React.FC<Props> = () => {
  const { primaryColor } = useContext(CartContext);
  return (
    <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
      <h2 className="h3 p-4">Monthly Sales Report (LineChart)</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={730}
          height={250}
          data={salesData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            contentStyle={{
              color: "white",
              background: primaryColor,
              padding: "10px",
              borderRadius: "10px",
            }}
            labelStyle={{ fontWeight: "bold", fontSize: "16px" }}
            itemStyle={{ listStyleType: "square", marginLeft: "10px" }}
            cursor={true}
          />
          <Line
            type="monotone"
            dataKey="totalSales"
            className="stroke-primary"
            stroke="stroke-bg-primary"
            name="Total Sales"
          />
          <Line
            type="monotone"
            dataKey="additionalSales"
            className="stroke-secoundary"
            stroke="stroke-bg-secoundary"
            name="Additional Sales"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="capitalize flex items-center w-1/2 justify-between mx-auto">
        <Details color="bg-primary" title="Total Sales" />
        <Details color="bg-secoundary" title="Additional Sales" />
      </div>
    </div>
  );
};

export default LineChartComponent;
