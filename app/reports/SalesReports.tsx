"use client";
import React from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  AreaChart,
  Area,
  ComposedChart,
  ScatterChart,
  Scatter,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  RadialBarChart,
  RadialBar,
  Treemap,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Sankey,
} from "recharts";
import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import ComposedChartComponent from "./ComposedChartComponent";
import PieChartComponent from "./PieChartComponent";
import RadarChartComponent from "./RadarChartComponent";
import RadialBarChartComponent from "./RadialBarChartComponent";

interface NodeData {
  name: string;
}

interface LinkData {
  source: string;
  target: string;
  value: number;
}

interface CustomSankeyData {
  nodes: NodeData[];
  links: LinkData[];
}

// Sample data (replace with actual data from your API or state management)
const totalSalesData = [
  { date: "2024-01-01", sales: 12000 },
  { date: "2024-01-02", sales: 15000 },
  { date: "2024-01-03", sales: 18000 },
  // Add more daily data as needed
];

const salesByCategoryData = [
  { category: "Electronics", sales: 5000 },
  { category: "Clothing", sales: 8000 },
  { category: "Home Goods", sales: 7000 },
  // Add more category data as needed
];

const salesByProductData = [
  { product: "Product A", sales: 3000 },
  { product: "Product B", sales: 4500 },
  { product: "Product C", sales: 6000 },
  // Add more product data as needed
];

const comparisonReportsData = [
  { period: "Last Week", sales: 45000 },
  { period: "Last Month", sales: 120000 },
  { period: "Last Quarter", sales: 300000 },
  // Add more comparison data as needed
];

const areaChartData = [
  { month: "Jan", value: 5000 },
  { month: "Feb", value: 8000 },
  { month: "Mar", value: 6000 },
  // Add more data as needed
];

const composedChartData = [
  { name: "A", value: 4000, bar: 2400, line: 2400 },
  { name: "B", value: 3000, bar: 1398, line: 2210 },
  { name: "C", value: 2000, bar: 9800, line: 2290 },
  // Add more data as needed
];

const scatterChartData = [
  { x: 5, y: 200 },
  { x: 50, y: 600 },
  { x: 150, y: 1200 },
  // Add more data as needed
];

const pieChartData = [
  { name: "Category A", value: 300 },
  { name: "Category B", value: 500 },
  { name: "Category C", value: 200 },
  // Add more data as needed
];

const radarChartData = [
  { subject: "Math", A: 120, B: 110 },
  { subject: "English", A: 98, B: 130 },
  { subject: "Physics", A: 86, B: 130 },
  // Add more data as needed
];

const radialBarChartData = [
  { name: "A", uv: 31, pv: 2400, fill: "#8884d8" },
  { name: "B", uv: 45, pv: 1398, fill: "#83a6ed" },
  { name: "C", uv: 60, pv: 9800, fill: "#8dd1e1" },
  // Add more data as needed
];

const treemapData = [
  {
    name: "root",
    children: [
      { name: "category1", size: 200 },
      { name: "category2", size: 300 },
      // Add more categories as needed
    ],
  },
];

const sankeyData = {
  nodes: [
    {
      name: "Visit",
    },
    {
      name: "Direct-Favourite",
    },
    {
      name: "Page-Click",
    },
    {
      name: "Detail-Favourite",
    },
    {
      name: "Lost",
    },
  ],
  links: [
    {
      source: 0,
      target: 1,
      value: 3728.3,
    },
    {
      source: 0,
      target: 2,
      value: 354170,
    },
    {
      source: 2,
      target: 3,
      value: 62429,
    },
    {
      source: 2,
      target: 4,
      value: 291741,
    },
  ],
};

const SalesReports: React.FC = () => {
  return (
    <section className="default-layout bg-skin-light  text-skin-base overflow-auto">
      <div className="container mx-auto h-full p-3 grid grid-cols-2  gap-3">
        <AreaChartComponent />
        <BarChartComponent />
        <LineChartComponent />
        <ComposedChartComponent />
        <PieChartComponent />
        <RadarChartComponent />
        <RadialBarChartComponent />
        {/* Total Sales - Line Chart */}
        <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Total Sales Over Time</h2>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={totalSalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                // className="stroke-bg-primary"
                className="stroke-primary"
                stroke="stroke-bg-primary"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sales by Category - Bar Chart */}
        <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Sales by Category</h2>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={salesByCategoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" className="fill-primary" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sales by Product - Bar Chart */}
        <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Sales by Product</h2>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={salesByProductData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" className="fill-primary" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Comparison Reports - Bar Chart */}
        <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Comparison Reports</h2>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={comparisonReportsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" className="fill-primary" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        {/* <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Area Chart</h2>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={areaChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                className="stroke-primary fill-secoundary"
                stroke="stroke-bg-primary"
                // stroke=""
                fill="fill-bg-secoundary"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div> */}

        {/* Composed Chart */}
        <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Composed Chart</h2>
          <ResponsiveContainer width="100%" height="80%">
            <ComposedChart data={composedChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bar" className="fill-primary" />
              <Line
                dataKey="line"
                className="stroke-secoundary"
                stroke="stroke-bg-secoundary"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Scatter Chart */}
        <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Scatter Chart</h2>
          <ResponsiveContainer width="100%" height="80%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis dataKey="y" />
              <Tooltip />
              <Scatter data={scatterChartData} className="fill-primary" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Pie Chart</h2>
          <ResponsiveContainer width="100%" height="80%">
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                className="fill-primary"
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Radar Chart */}
        <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Radar Chart</h2>
          <ResponsiveContainer width="100%" height="80%">
            <RadarChart data={radarChartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="A"
                dataKey="A"
                className="stroke-primary fill-primary"
                stroke="stroke-bg-primary"
                fillOpacity={0.6}
              />
              <Radar
                name="B"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Add more sections for other types of charts */}

        {/* Treemap */}
        <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Treemap</h2>
          <ResponsiveContainer width="100%" height="80%">
            <Treemap
              data={treemapData}
              dataKey="size"
              stroke="#fff"
              className="fill-primary"
            />
          </ResponsiveContainer>
        </div>

        {/* Sankey Chart */}
        <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
          <h2 className="h3 p-4">Sankey Chart</h2>
          <ResponsiveContainer width="100%" height="80%">
            <Sankey data={sankeyData} /* other Sankey props */ />
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default SalesReports;
