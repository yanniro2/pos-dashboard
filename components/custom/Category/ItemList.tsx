// ItemList.tsx
import React from "react";
import Image from "next/image";
type Item = {
  id: number;
  name?: string;
  title?: string;
  price: number;
};

type ItemListProps = {
  items: Item[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => (
  <div className="w-2/3 h-full bg-gray-100 border rounded-lg p-1 grid grid-cols-2 gap-1  overflow-y-auto content-start">
    {items.map((item) => (
      <button
        key={item.id}
        className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-200 active:bg-gray-300 transition duration-300 flex justify-between ">
        <div className="text-left">
          <h1 className="font-bold ">{item.name || item.title}</h1>
          <div>${item.price}</div>
        </div>
        <div>
          <Image src="/item img.png" width="32" height="32" alt="img items" />
        </div>
      </button>
    ))}
  </div>
);

export default ItemList;
