// ItemList.tsx
"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Popup from "../Popup/Popup";
// import { CartContext } from "@/app/contexts/CartContext";
import Quantity from "../Sub/Quantity";
import { Items } from "@/typings";

type ItemListProps = {
  items: Items[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  // const { addItems } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState<Items | null>(null);

  const handlePopup = (item: Items) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-2/3 h-full bg-gray-100 border rounded-lg p-1 flex flex-col overflow-y-auto content-start dark:bg-gray-900  gap-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="itemlist-btn relative flex-col gap-[1rem]">
          <div className="flex justify-between w-full">
            <div className="text-left w-full ">
              <h1 className="font-bold z-5 ">{item.name}</h1>
              <div className="flex items-start flex-col">
                <div className="flex items-center gap-3">
                  <h2 className="capitalize font-semibold">unit price</h2>
                  <h3 className="price z-5">${item.price}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="capitalize font-semibold">unit discount</h2>
                  <h3 className="price z-5">${item.discount}</h3>
                </div>
              </div>

              <div className="flex items-center gap-[1rem]">
                {" "}
                {item.availableStock > 0 ? (
                  <div className="flex items-center gap-2">
                    <div className="w-[1rem] h-[1rem] rounded-full bg-primary"></div>
                    <h3 className="text-primary font-semibold">
                      Available Stocks - {item.availableStock}
                    </h3>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="w-[1rem] h-[1rem] rounded-full bg-gray-100"></div>
                    <h3 className="text-gray-700 font-semibold">
                      Available Stocks - {item.availableStock}
                    </h3>
                  </div>
                )}
              </div>

              {/* <button className="btn-primary" onClick={() => addButton(item)}>
              Add
            </button> */}
              <button
                className=" z-10 absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-lg"
                onClick={() => handlePopup(item)}></button>
            </div>
            <div>
              <Image
                src="/item img.png"
                width="32"
                height="32"
                alt="img items"
              />
            </div>
          </div>

          {/* <Quantity item={item} /> */}
        </div>
      ))}
      {selectedItem && <Popup item={selectedItem} onClose={handleClosePopup} />}
    </div>
  );
};

export default ItemList;
