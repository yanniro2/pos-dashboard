"use client";
import { CartContext } from "@/app/contexts/CartContext";
import React, { useContext } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = React.useState<string>("");
  const [result, setResult] = React.useState<string | null>(null);

  // Access payment-related values and functions from CartContext
  const { setPaymentAmount, processPayment, balance, grandTotal } =
    useContext(CartContext);

  const handleButtonClick = (value: string) => {
    if (value === "ce") {
      // Clear input
      setInput("");
      setResult(null);
    } else if (value === "enter") {
      // Evaluate and set result
      try {
        const newResult = eval(input).toString();
        setInput("");
        setResult(newResult);

        // Set payment amount and process payment
        setPaymentAmount(parseFloat(newResult));
        processPayment(parseFloat(newResult));
      } catch (error) {
        setInput("Error");
        setResult(null);
      }
    } else {
      // Update input
      setInput((prevInput) => prevInput + value);
      setResult(null);
    }
  };

  return (
    <div className="h-1/2 w-full  grid grid-cols-4  rounded-lg overflow-hidden gap-1 bg-skin-fill">
      <div className="col-span-4 p-1 text-right rounded-lg bg-skin-dark text-skin-base font-bold text-[2rem]">
        Balance: {balance}
      </div>
      <input
        type="text"
        value={result !== null ? result : input}
        className="col-span-4 p-1 text-right rounded-lg bg-skin-dark text-skin-base font-bold text-[2rem]"
        readOnly
      />
      {[7, 8, 9, "ce"].map((number) => (
        <button
          key={number}
          className="btn-number"
          onClick={() => handleButtonClick(number.toString())}>
          {number}
        </button>
      ))}
      {[4, 5, 6, "-"].map((number) => (
        <button
          key={number}
          className="btn-number"
          onClick={() => handleButtonClick(number.toString())}>
          {number}
        </button>
      ))}
      {[1, 2, 3, "+"].map((number) => (
        <button
          key={number}
          className="btn-number"
          onClick={() => handleButtonClick(number.toString())}>
          {number}
        </button>
      ))}
      {[0, "00", ".", "enter"].map((item) => (
        <button
          key={item === "=" ? "equal" : item}
          className={`col-span-${item === "=" ? 2 : 1} btn-number`}
          onClick={() => handleButtonClick(item.toString())}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
