// Popup.tsx
import { IoClose } from "react-icons/io5";
import React from "react";

type Item = {
  id: number;
  name?: string;
  title?: string;
  price: number;
};

type PopupProps = {
  item: Item;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ item, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div
        className="w-screen h-screen backdrop-blur-sm z-[1001] fixed"
        onClick={onClose}></div>
      <div className="bg-white  rounded-md z-[1005] w-1/2 h-1/2">
        <header className="w-full border-b p-3 flex justify-between items-center">
          <h1 className="font-bold text-xl ">{item.name || item.title}</h1>
          <button
            onClick={onClose}
            className="bg-black text-white p-1 rounded text-[1.5rem]">
            <IoClose />
          </button>
        </header>
        <main className="p-3 w-full flex flex-col">
          <div> id - {item.id}</div>
          <div> price - ${item.price}</div>
        </main>
      </div>
    </div>
  );
};

export default Popup;
