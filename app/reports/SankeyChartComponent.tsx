import React, { useContext } from "react";
import { ResponsiveContainer, Sankey, Tooltip } from "recharts";
import MyCustomNode from "./MyCustomNode";
import { CartContext } from "../contexts/CartContext";

type Props = {};

const data0 = {
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

const SankeyChartComponent = (props: Props) => {
  const { primaryColor } = useContext(CartContext);
  return (
    <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
      <h2 className="h3 p-4">Total Sales Over Time (SankeyChart)</h2>
      <ResponsiveContainer width="100%" height="80%">
        <Sankey
          data={data0}
          node={<MyCustomNode />}
          nodePadding={50}
          link={{ className: "stroke-primary" }}>
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
        </Sankey>
      </ResponsiveContainer>
    </div>
  );
};

export default SankeyChartComponent;
