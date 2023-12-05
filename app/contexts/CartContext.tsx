"use client";

import { CartItems } from "@/typings";
import React, { createContext, useState, FC, ReactNode } from "react";

type CartContextType = {
  count: number;
  items: CartItems[];
  // Categorys: Categorys[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
  addItems: (item: CartItems) => void;
};

export const CartContext = createContext<CartContextType>({
  count: 0,
  setCount: () => {},
  items: [],
  addItems: () => {},
  // Categorys: [],
});

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [items, setItems] = useState<CartItems[]>([]);

  const addItems = (item: CartItems) => {
    // setItems((prev) => [...prev, item]);

    setItems((prev) => {
      const index = prev.findIndex(
        (existingItem) => existingItem.id === item.id
      );

      if (index !== -1) {
        // If the item with the same id exists, update the quantity
        const updatedItems = [...prev];
        updatedItems[index] = {
          ...updatedItems[index],
          qt: item.qt,
        };
        return updatedItems;
      } else {
        // If the item with the same id doesn't exist, add the new item
        return [...prev, item];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        items,
        addItems,
        // Category,
      }}>
      {children}
    </CartContext.Provider>
  );
};
