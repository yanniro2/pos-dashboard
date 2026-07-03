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
    <div className="flex min-h-[24rem] w-full flex-1 flex-col rounded-lg bg-skin-medium p-3">
      <div className="flex w-full shrink-0 flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between">
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

      <div className="min-h-0 w-full flex-1 pt-4">
        <ResponsiveContainer width="100%" height="100%">
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
    </div>
  );
};

export default Chart;
