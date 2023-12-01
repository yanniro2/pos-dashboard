import React from "react";
import { CartProvider } from "../contexts/CartContext";
import ExampleOne from "@/components/context/ExampleOne";
import ExampleTwo from "@/components/context/ExampleTwo";

type Props = {};

const page = (props: Props) => {
  return (
    <CartProvider>
      <ExampleOne />
      <ExampleTwo />
    </CartProvider>
  );
};

export default page;
