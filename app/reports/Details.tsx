import React from "react";

type DetailsProps = {
  color: string;
  title: string;
};

const Details: React.FC<DetailsProps> = ({ color, title }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-5 h-5 ${color} rounded-lg`}></div>
      <div className="text-skin-base font-medium">{title}</div>
    </div>
  );
};

export default Details;
