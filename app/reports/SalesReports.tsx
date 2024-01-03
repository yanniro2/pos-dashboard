"use client";
import React from "react";


import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import ComposedChartComponent from "./ComposedChartComponent";
import PieChartComponent from "./PieChartComponent";
import RadarChartComponent from "./RadarChartComponent";
import RadialBarChartComponent from "./RadialBarChartComponent";
import ScatterChartComponent from "./ScatterChartComponent";
import FunnelChartComponent from "./FunnelChartComponent";
import TreemapComponent from "./TreemapComponent";
import SankeyChartComponent from "./SankeyChartComponent";
import ColorChange from "./ColorChange";

const SalesReports: React.FC = () => {
  return (
    <section className="default-layout bg-skin-light text-skin-base overflow-auto">
      <div className="container mx-auto h-full p-3 grid grid-cols-2  gap-3 ">
        <AreaChartComponent />
        <BarChartComponent />
        <LineChartComponent />
        <ComposedChartComponent />
        <PieChartComponent />
        <RadarChartComponent />
        <RadialBarChartComponent />
        <ScatterChartComponent />
        <FunnelChartComponent />
        <TreemapComponent />
        <SankeyChartComponent />
        {/* <ColorChange /> */}
      </div>
    </section>
  );
};

export default SalesReports;
