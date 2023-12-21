"use client";
import React, { useState } from "react";

const Calculator: React.FC = () => {
  //   const [calculation, setCalculation] = useState<string[]>([]);
  //   const [result, setResult] = useState<string | number>("");

  //   const handleNumberButtonClick = (number: number) => {
  //     setCalculation([...calculation, number.toString()]);
  //   };

  //   const handleOperatorButtonClick = (operator: string) => {
  //     setCalculation([...calculation, operator]);
  //   };

  //   const handleEqualButtonClick = () => {
  //     try {
  //       const calculatedResult = eval(calculation.join(""));
  //       setResult(calculatedResult);
  //     } catch (error) {
  //       setResult("Error");
  //     }
  //   };

  //   const handleClearButtonClick = () => {
  //     setCalculation([]);
  //     setResult("");
  //   };

  return (
    <div className="h-1/2 w-full  grid grid-cols-4  rounded-lg overflow-hidden gap-1">
      <input
        type="text"
        //   value={result}
        readOnly
        className="col-span-4 p-2 text-right border border-gray-300 rounded-lg"
      />
      {[7, 8, 9, "ce"].map((number) => (
        <button
          key={number}
          // onClick={() => handleNumberButtonClick(number)}
          className="btn-number ">
          {number}
        </button>
      ))}
      {[4, 5, 6, "-"].map((number) => (
        <button
          key={number}
          // onClick={() => handleNumberButtonClick(number)}
          className="btn-number">
          {number}
        </button>
      ))}
      {[1, 2, 3, "+"].map((number) => (
        <button
          key={number}
          // onClick={() => handleNumberButtonClick(number)}
          className="btn-number">
          {number}
        </button>
      ))}
      {[0, "00", ".", "enter"].map((item) => (
        <button
          key={item === "=" ? "equal" : item}
          // onClick={() =>
          //   item === "="
          //     ? handleEqualButtonClick()
          //     : handleOperatorButtonClick(item.toString())
          // }
          className={`col-span-${item === "=" ? 2 : 1} btn-number`}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
