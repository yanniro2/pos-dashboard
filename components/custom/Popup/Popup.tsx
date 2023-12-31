// Popup.tsx
"use client";
import { IoClose } from "react-icons/io5";
import React, { useContext } from "react";
import { CartContext } from "@/app/contexts/CartContext";

import { Items } from "@/typings";
import Quantity from "../Quantity/Quantity_2";

type PopupProps = {
  item: Items;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ item, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div
        className="w-screen h-screen backdrop-blur-sm z-[1001] fixed"
        onClick={onClose}></div>
      <div className="bg-white  rounded-md z-[1005] w-1/2 h-1/2 dark:bg-gray-800">
        <header className="w-full border-b p-3 flex justify-between items-center dark:border-gray-500">
          <h1 className="font-bold text-xl text-primary ">{item.name}</h1>
          <button
            onClick={onClose}
            className="bg-primary text-skin-base p-1 rounded text-[1.5rem]">
            <IoClose />
          </button>
        </header>
        <main className="p-3 w-full flex flex-col">
          <div> id - {item.id}</div>
          <div> price - ${item.price}</div>
          <div>discount- ${item.discount}</div>
          <div>availableStock - {item.availableStock}</div>

          {/* <button onClick={addButton} className="btn-primary">
            Add
          </button> */}
          <Quantity item={item} />
        </main>
      </div>
    </div>
  );
};

export default Popup;
