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
    <div className="flex items-center capitalize flex-col justify-between w-full h-full  gap-1 bg-primary  rounded-lg p-1 dark:bg-black drop-shadow">
      <div className="flex flex-col gap-1 items-start w-full justify-between h-min">
        <div className="w-full justify-between items-center bg-white dark:bg-primary  p-1 rounded-lg flex">
          <h1 className="text-primary  dark:text-white">total Quantity</h1>
          <h1 className="price dark:text-white">{props.quantity}</h1>
        </div>
        <div className="w-full justify-between items-center bg-white  dark:bg-primary p-1 rounded-lg flex dark:text-white">
          <h1 className="text-primary dark:text-white">discount</h1>
          <h1 className="price dark:text-white">-{props.discount}</h1>
        </div>
        <div className="w-full justify-between items-center bg-white  dark:bg-primary p-1 rounded-lg flex dark:text-white">
          <h1 className="text-primary dark:text-white">tax</h1>
          <h1 className="price dark:text-white">{props.tax}</h1>
        </div>
      </div>

      <div className="w-full justify-between items-center    rounded-lg flex uppercase flex-col gap-1">
        <div className="w-full justify-between items-center border-white border text-white    py-2 px-1 rounded-lg flex font-bold uppercase dark:bg-black">
          <h1 className="text-white dark:text-white">sub total</h1>
          <h1 className="text-white dark:text-white">{props.subTotal}</h1>
        </div>
        <div className="w-full justify-between items-center bg-white  dark:bg-primary py-2 px-1 rounded-lg flex font-bold uppercase">
          <h1 className="text-primary dark:text-white font-bold ">
            Grand total
          </h1>
          <h1 className="font-bold text-primary dark:text-white  ">
            {props.grandTotal}$
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShowSummary;
