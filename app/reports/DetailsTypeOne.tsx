import React from "react";

type Color = "#8884d8";
type DetailsProps = {
  color: string;
  title: string;
};

const Details: React.FC<DetailsProps> = ({ color, title }) => {
  return (
    <div className="flex gap-3">
      <div
        className="w-5 h-5 rounded-lg"
        style={{ backgroundColor: color }}></div>
      <div className="text-skin-base font-medium">{title}</div>
    </div>
  );
};

export default Details;
