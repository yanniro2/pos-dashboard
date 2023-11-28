import React from "react";

type Props = {};

const ShowSummary = (props: Props) => {
  return (
    <div className="flex items-start capitalize flex-col justify-between w-full h-full overflow-x-auto gap-1 bg-white p-1 pb-[3rem]">
      <div className="flex flex-col gap-1 items-start w-full h-min">
        <div className="w-full justify-between items-center bg-slate-200 p-1 rounded-lg flex">
          <h1 className="text-gray-500">total Quantity</h1>
          <h1 className="price">8</h1>
        </div>
        <div className="w-full justify-between items-center bg-slate-200 p-1 rounded-lg flex">
          <h1 className="text-gray-500">discount</h1>
          <h1 className="price">80$</h1>
        </div>
        <div className="w-full justify-between items-center bg-slate-200 p-1 rounded-lg flex">
          <h1 className="text-gray-500">sub total</h1>
          <h1 className="price">80$</h1>
        </div>
      </div>

      <div className="w-full justify-between items-center bg-slate-200 p-1 rounded-lg flex uppercase h-min">
        <h1 className="text-black font-bold ">Grand total</h1>
        <h1 className="font-bold text-orange-400">800$</h1>
      </div>
    </div>
  );
};

export default ShowSummary;
