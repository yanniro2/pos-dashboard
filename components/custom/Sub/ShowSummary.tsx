import React from "react";

type Props = {
  quantity: number;
  discount: number;
  subTotal: number;
  grandTotal: number;
  tax: number;
};

const ShowSummary = (props: Props) => {
  return (
    <div className="flex items-center capitalize flex-col justify-between w-full h-full  gap-1  rounded-lg p-1  drop-shadow">
      <div className="flex flex-col gap-1 items-start w-full justify-between h-min">
        <div className="w-full justify-between items-center text-skin-base    py-2 px-1 rounded-lg flex font-bold uppercase bg-primary ">
          <h1 className=" text-skin-base">sub total</h1>
          <h1 className=" text-skin-base">{props.subTotal}$</h1>
        </div>
        <div className="w-full justify-between items-center bg-skin-medium  p-1 rounded-lg flex">
          <h1 className="text-skin-base ">total Quantity</h1>
          <h1 className="price ">{props.quantity}</h1>
        </div>
        <div className="w-full justify-between items-center bg-skin-medium   p-1 rounded-lg flex text-skin-base">
          <h1 className=" text-primary">discount</h1>
          <h1 className="text-primary">-{props.discount}$</h1>
        </div>
        <div className="w-full justify-between items-center bg-skin-medium   p-1 rounded-lg flex text-skin-base">
          <h1 className=" text-primary">tax</h1>
          <h1 className=" text-primary">-{props.tax}$</h1>
        </div>
      </div>

      <div className="w-full justify-between items-center    rounded-lg flex uppercase flex-col gap-1">
        <div className="w-full justify-between items-center bg-primary  b py-4 px-1 rounded-lg flex font-bold uppercase text-[1.2rem]">
          <h1 className="text-skin-base font-bold ">Grand total</h1>
          <h1 className="font-bold text-skin-base  ">{props.grandTotal}$</h1>
        </div>
      </div>
    </div>
  );
};

export default ShowSummary;
