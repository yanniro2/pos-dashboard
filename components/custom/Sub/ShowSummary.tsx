import React from "react";

type Props = {
  quantity: number;
  discount: number;
  subTotal: number;
  grandTotal: number;
};

const ShowSummary = (props: Props) => {
  return (
    <div className="flex items-start capitalize flex-col justify-between w-full h-full overflow-x-auto gap-1 bg-black p-1 pb-[3rem] rounded-lg">
      <div className="flex flex-col gap-1 items-start w-full h-min">
        <div className="w-full justify-between items-center bg-white p-1 rounded-lg flex">
          <h1 className="text-gray-500">total Quantity</h1>
          <h1 className="price">{props.quantity}</h1>
        </div>
        <div className="w-full justify-between items-center bg-white p-1 rounded-lg flex">
          <h1 className="text-gray-500">discount</h1>
          <h1 className="price">-{props.discount}$</h1>
        </div>
        <div className="w-full justify-between items-center bg-white p-1 rounded-lg flex">
          <h1 className="text-gray-500">sub total</h1>
          <h1 className="price">{props.subTotal}$</h1>
        </div>
      </div>

      <div className="w-full justify-between items-center bg-white p-1 rounded-lg flex uppercase h-min">
        <h1 className="text-black font-bold ">Grand total</h1>
        <h1 className="font-bold text-orange-400">{props.grandTotal}$</h1>
      </div>
    </div>
  );
};

export default ShowSummary;
