import { FaHome } from "react-icons/fa";
import React from "react";

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
    <div className="w-full flex h-full overflow-hidden">
      <div className="w-1/3 h-full bg-orange-400">crud</div>
      <div className="w-1/3 h-full bg-orange-500">category</div>
      <div className="w-1/3 h-full bg-slate-200">
        <div className="h-1/2 w-full flex flex-col flex-wrap overflow-x-auto">
          {buttons_icons.map((data) => (
            <button
              key={data.id}
              className="bg-white  grow drop-shadow text-[1.2rem] font-bold hover:bg-gray-100 transition active:bg-gray-200 basis-1/4 flex flex-col gap-3 items-center justify-center ">
              <span className="text-sm">{data.label}</span>
              {React.createElement(iconComponents[data.icon])}
            </button>
          ))}
        </div>
        <div className="h-1/2 w-full flex flex-col flex-wrap">
          {buttons_number.map((data) => (
            <button
              key={data.id}
              className="bg-white  grow drop-shadow text-[1.5rem] font-bold hover:bg-gray-100 transition active:bg-gray-200 basis-1/4 ">
              {data.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
