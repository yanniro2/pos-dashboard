"use client";

import { CartItems } from "@/typings";
import React, { createContext, useState, FC, ReactNode } from "react";
type CartContextType = {
  count: number;
  items: CartItems[];
  taxRate: number; // Tax rate as a percentage
  totalTax: number;
  discount: number;
  totalDiscount: number;
  subTotal: number;
  totalItems: number;
  grandTotal: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  addItems: (item: CartItems) => void;
  removeItem: (itemId: number) => void;
  changeQuantity: (itemId: number, newQuantity: number) => void;
  getItemById: (itemId: number) => CartItems | undefined;
};

export const CartContext = createContext<CartContextType>({
  count: 0,
  setCount: () => {},
  items: [],
  taxRate: 0.01,
  totalTax: 0,
  discount: 0,
  totalDiscount: 0,
  subTotal: 0,
  totalItems: 0,
  grandTotal: 0,
  addItems: () => {},
  removeItem: () => {},
  changeQuantity: () => {},
  getItemById: () => undefined,
});

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [items, setItems] = useState<CartItems[]>([]);
  const [taxRate, setTaxRate] = useState<number>(0.01);
  const [discount, setDiscount] = useState<number>(0);

  const addItems = (item: CartItems) => {
    setItems((prev) => {
      const index = prev.findIndex(
        (existingItem) => existingItem.id === item.id
      );

      if (index !== -1) {
        const updatedItems = [...prev];
        updatedItems[index] = {
          ...updatedItems[index],
          qt: item.qt,
        };
        return updatedItems;
      } else {
        return [...prev, item];
      }
    });
  };

  const removeItem = (itemId: number) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const changeQuantity = (itemId: number, newQuantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, qt: newQuantity } : item
      )
    );
  };

  const getItemById = (itemId: number) => {
    return items.find((item) => item.id === itemId);
  };

  const subTotal = items.reduce(
    (total, item) => total + item.price * item.qt,
    0
  );

  const totalItems = items.reduce((total, item) => total + item.qt, 0);
  const totalTax = subTotal * (taxRate / 100);
  const totalDiscount = discount;
  const grandTotal = subTotal - totalDiscount + totalTax;

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        items,
        taxRate,
        totalTax,
        discount,
        totalDiscount,
        subTotal,
        totalItems,
        grandTotal,
        addItems,
        removeItem,
        changeQuantity,
        getItemById,
      }}>
      {children}
    </CartContext.Provider>
  );
};

