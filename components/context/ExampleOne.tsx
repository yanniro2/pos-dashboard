"use client";
import { CartContext } from "@/app/contexts/CartContext";
import React, { useContext } from "react";

type Props = {};

const ExampleOne = (props: Props) => {
  const { count } = useContext(CartContext);
  return (
    <div>
      ExampleOne
      {count}
    </div>
  );
};

export default ExampleOne;
