"use client";
import { CartContext } from "@/app/contexts/CartContext";
import React, { useContext } from "react";

type Props = {};

const ExampleTwo = (props: Props) => {
  const { count, setCount } = useContext(CartContext);
  return (
    <div>
      ExampleTwo
      <button className="btn-primary" onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
};

export default ExampleTwo;
