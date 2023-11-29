import React from "react";
import { FaHome } from "react-icons/fa";
type ButtonsNumber = {
  id: string | number;
  label: string;
};

type ButtonsIcons = {
  id: string | number;
  label: string;
  icon: string;
};

export default async function Page() {
  const res_number = await fetch("http://localhost:4000/numberButtons", {
    cache: "no-cache",
  });
  const buttons_number: ButtonsNumber[] = await res_number.json();

  const res_icons = await fetch("http://localhost:4000/iconButtons", {
    cache: "no-cache",
  });
  const buttons_icons: ButtonsIcons[] = await res_icons.json();

  const iconComponents: Record<
    string,
    React.FC<React.SVGProps<SVGSVGElement>>
  > = {
    FaHome,

    // Add more icon components as needed
  };
  return (
    <>
      <div className="h-1/2 w-full flex flex-col flex-wrap overflow-x-auto">
        {buttons_icons.map((data) => (
          <button
            key={data.id}
            className="bg-primary text-white hover:bg-primary-foreground hover:text-primary  grow drop-shadow text-[1.2rem] font-bold hover:bg-gray-100 transition active:bg-white basis-1/4 flex flex-col gap-3 items-center justify-center ">
            {React.createElement(iconComponents[data.icon], {
              className: "big-btn-icon",
            })}
            <span className="text-sm">{data.label}</span>
          </button>
        ))}
      </div>
      <div className="h-1/2 w-full flex flex-col flex-wrap">
        {buttons_number.map((data) => (
          <button
            key={data.id}
            className="bg-white hover:bg-primary hover:text-white grow drop-shadow text-[1.8rem] font-bold   transition active:bg-white basis-1/4 text-primary active:text-primary ">
            {data.label}
          </button>
        ))}
      </div>
    </>
  );
}
