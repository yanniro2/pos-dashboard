import React from "react";

const MyCustomNode = ({ x, y, payload }: any) => {
  // Customize your node rendering here
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={10} height={30} className="fill-primary" />
      <text x={15} y={15} dy={5} textAnchor="start" fill="#000">
        {payload.name}
      </text>
    </g>
  );
};

export default MyCustomNode;
