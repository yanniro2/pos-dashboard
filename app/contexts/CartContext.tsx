"use client";
import React, { createContext, useState, FC, ReactNode } from "react";

type Items = {
  id: number;
  name: string;
  price: number;
};

type CartContextType = {
  count: number;
  items: Items[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
  addItems: (item: Items) => void;
};

export const CartContext = createContext<CartContextType>({
  count: 0,
  setCount: () => {},
  items: [],
  addItems: () => {},
});

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [items, setItems] = useState<Items[]>([]);

  const addItems = (item: Items) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        items,
        addItems,
      }}>
      {children}
    </CartContext.Provider>
  );
};
