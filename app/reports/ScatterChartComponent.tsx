import React from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Scatter,
} from "recharts";
import Details from "./Details";

type Props = {};
const data01 = [
  {
    x: 100,
    y: 200,
    z: 200,
  },
  {
    x: 120,
    y: 100,
    z: 260,
  },
  {
    x: 170,
    y: 300,
    z: 400,
  },
  {
    x: 140,
    y: 250,
    z: 280,
  },
  {
    x: 150,
    y: 400,
    z: 500,
  },
  {
    x: 110,
    y: 280,
    z: 200,
  },
];
const data02 = [
  {
    x: 200,
    y: 260,
    z: 240,
  },
  {
    x: 240,
    y: 290,
    z: 220,
  },
  {
    x: 190,
    y: 290,
    z: 250,
  },
  {
    x: 198,
    y: 250,
    z: 210,
  },
  {
    x: 180,
    y: 280,
    z: 260,
  },
  {
    x: 210,
    y: 220,
    z: 230,
  },
];

const ScatterChartComponent = (props: Props) => {
  return (
    <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
      <h2 className="h3 p-4">Monthly Sales Report (ScatterChart)</h2>
      <ResponsiveContainer width="100%" height="80%">
        <ScatterChart
          width={730}
          height={250}
          margin={{
            top: 20,
            right: 20,
            bottom: 10,
            left: 10,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" type="number" name="stature" unit="cm" />
          <YAxis dataKey="y" type="number" name="weight" unit="kg" />
          <ZAxis
            dataKey="z"
            type="number"
            range={[64, 144]}
            name="score"
            unit="km"
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />

          <Scatter
            name="A school"
            data={data01}
            fill="fill-bg-primary"
            className="fill-primary"
          />
          <Scatter
            name="B school"
            data={data02}
            fill="fill-bg-secoundary"
            className="fill-secoundary"
          />
        </ScatterChart>
      </ResponsiveContainer>
      <div className="capitalize flex items-center w-1/2 justify-around mx-auto">
        <Details color="bg-primary" title="2023 year sales" />
        <Details color="bg-secoundary" title="2022 year  sales" />
      </div>
    </div>
  );
};

export default ScatterChartComponent;
