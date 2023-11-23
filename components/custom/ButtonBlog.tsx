import React from "react";

const NumberBlog = () => {
  const numberArray = Array.from(
    { length: 9 },
    (_, index) => "Button " + index
  );
  return (
    <div className="flex flex-col justify-start w-full h-full items-center bg-white p-3 rounded-xl drop-shadow gap-[1rem] ">
      <h1 className="text-3xl font-bold text-center">Buttons</h1>
      <div className="flex flex-wrap gap-4 text-4xl items-center justify-center">
        {numberArray.map((number) => (
          // Render each number using the map function
          <button
            key={number}
            className="bg-black text-white font-semibold px-4 py-2 rounded-xl drop-shadow text-2xl">
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberBlog;
