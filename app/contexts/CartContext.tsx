"use client";
import React, { createContext, useState, FC, ReactNode } from "react";

type CartContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CartContext = createContext<CartContextType>({
  count: 0,
  setCount: () => {},
});

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
      }}>
      {children}
    </CartContext.Provider>
  );
};
