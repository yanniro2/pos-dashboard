import React from "react";

type Props = {
  title: string;
  value: number;
};

const ShowLabel = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center p-1 rounded-lg capitalize bg-skin-medium  ">
      <h1 className=" text-skin-base">{props.title}</h1>
      <h1 className="price">${props.value}</h1>
    </div>
  );
};

export default ShowLabel;
