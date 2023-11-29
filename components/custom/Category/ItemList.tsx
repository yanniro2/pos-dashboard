// ItemList.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Popup from "../Popup";

type Item = {
  id: number;
  name?: string;
  title?: string;
  price: number;
};

type ItemListProps = {
  items: Item[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handlePopup = (item: Item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-2/3 h-full bg-gray-100 border rounded-lg p-1 grid grid-cols-2 gap-1 overflow-y-auto content-start dark:bg-gray-900 ">
      {items.map((item) => (
        <button
          key={item.id}
          className="itemlist-btn"
          onClick={() => handlePopup(item)}>
          <div className="text-left">
            <h1 className="font-bold ">{item.name || item.title}</h1>
            <div className="price">${item.price}</div>
          </div>
          <div>
            <Image src="/item img.png" width="32" height="32" alt="img items" />
          </div>
        </button>
      ))}
      {selectedItem && <Popup item={selectedItem} onClose={handleClosePopup} />}
    </div>
  );
};

export default ItemList;
