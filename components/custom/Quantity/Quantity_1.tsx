"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/contexts/CartContext";
import { Items } from "@/typings";

type Props = {
  item: Items;
  value: number;
};

const Quantity: React.FC<Props> = ({ item, value }) => {
  const { addItems, changeQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(value);
  const id = item.id;

  useEffect(() => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      discount: item.discount,
      availableStock: item.availableStock,
      qt: quantity,
    };
    if (quantity > 0) {
      changeQuantity(id, quantity);
    } else {
      alert("Quantity not be Zero!");

      setQuantity(1);
      addItems(newItem);
      console.error("Value should not be zero");
    }
  }, [quantity, item, addItems, changeQuantity, id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10) || 1;
    setQuantity(newQuantity);
  };

  return (
    <div className=" w-[5rem] flex items-center justify-center">
      <div className="flex items-center gap-2 justify-center w-full">
        <button
          onClick={() => setQuantity(quantity - 1)}
          className="text-[1.2rem] text-primary">
          -
        </button>
        <input
          type="text"
          name="number"
          id="quantity"
          value={quantity}
          onChange={handleChange}
          className="w-[3rem] rounded-lg px-2"
        />
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="text-[1.2rem] text-primary">
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
