// ItemList.tsx
import React from "react";

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
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        {item.name || item.title} - ${item.price}
      </li>
    ))}
  </ul>
);

export default ItemList;
