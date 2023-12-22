import React from "react";
import { Button } from "../ui/button";

const NumberBlog = () => {
  const numberArray = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <div className="flex flex-col justify-start w-full h-full items-center bg-gray-900 p-3 rounded-xl drop-shadow gap-[1rem]  ">
      <h1 className="text-3xl font-bold text-center text-skin-base">Numbers</h1>
      <div className="flex flex-wrap gap-4 text-4xl items-center justify-center">
        {numberArray.map((number) => (
          // Render each number using the map function
          <button
            key={number}
            className="bg-white text-black font-semibold px-6 py-3 rounded-xl drop-shadow text-2xl">
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberBlog;
