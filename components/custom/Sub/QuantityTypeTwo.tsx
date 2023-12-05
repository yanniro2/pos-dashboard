"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/contexts/CartContext";

type Props = {
  item: Items;
  value: number;
};

type Items = {
  id: number;
  name: string;
  price: number;
};

const QuantityTypeTwo: React.FC<Props> = ({ item, value }) => {
  const { addItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(value);

  useEffect(() => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      qt: quantity,
    };

    if (quantity > 0) {
      addItems(newItem);
    } else {
      alert("Quantity not be Zero!");
      setQuantity(1);
      console.error("Value should not be zero");
    }
  }, [quantity, item, addItems]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10) || 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={handleChange}
          className="w-[4rem] rounded-lg px-2"
        />
      </div>
    </div>
  );
};

export default QuantityTypeTwo;
