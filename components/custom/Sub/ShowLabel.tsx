import React from "react";

type Props = {
  title: string;
  value: number;
};

const ShowLabel = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center bg-primary-foreground p-1 rounded-lg capitalize ">
      <h1 className="text-gray-500">{props.title}</h1>
      <h1 className="price">${props.value}</h1>
    </div>
  );
};

export default ShowLabel;
