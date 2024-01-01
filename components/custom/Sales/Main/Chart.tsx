"use client";
import React, { useState, useEffect } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import dailySales from "../../../../data/dailySales.json";
import monthlySales from "../../../../data/monthlySales.json";
type ReportData = { name: string; total: number }[];

type Props = {};

const Chart: React.FC<Props> = (props: Props) => {
  const [showData, setShowData] = useState(false);
  // const [dailyData, setDailyData] = useState<ReportData>(dailySales);
  // const [monthlyData, setMonthlyData] = useState<ReportData>(monthlySales);
  const [data, setData] = useState<ReportData>(dailySales);
  const toggleButton = () => {
    setShowData(!showData);
    showData ? setData(dailySales) : setData(monthlySales);
  };
  return (
    <div className="w-full h-full bg-skin-medium p-3 rounded-lg flex flex-col items-center justify-between">
      <div className="w-full flex items-center justify-between px-4">
        <h3 className="h3">Daily / Monthly Sales Report </h3>
        <div className="bg-primary p-1 flex items-center gap-3 rounded-full drop-shadow text-white">
          <label
            htmlFor="daily"
            className={`px-4 py-1 rounded-full cursor-pointer ${
              showData ? "bg-white font-semibold text-primary" : ""
            }`}>
            <input
              type="radio"
              id="daily"
              name="reportType"
              checked={showData}
              onChange={toggleButton}
              className="hidden"
            />
            Daily
          </label>
          <label
            htmlFor="monthly"
            className={`px-4 py-1 rounded-full cursor-pointer ${
              !showData ? "bg-white font-semibold text-primary" : ""
            }`}>
            <input
              id="monthly"
              type="radio"
              name="reportType"
              checked={!showData}
              onChange={toggleButton}
              className="hidden"
            />
            Monthly
          </label>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            // className="stroke-primary"
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Bar
            dataKey="total"
            radius={[4, 4, 0, 0]}
            className="fill-primary" // Tailwind CSS color class
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
