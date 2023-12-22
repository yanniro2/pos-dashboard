import React from "react";
import { FaHome } from "react-icons/fa";
import data from "../../../data/db.json";
import Calculate from "../Calculate";
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
  // const res_number = await fetch("http://localhost:4000/numberButtons", {
  //   cache: "no-cache",
  // });
  // const buttons_number: ButtonsNumber[] = await res_number.json();

  const buttons_number = data.numberButtons;
  const buttons_icons = data.iconButtons;
  // const res_icons = await fetch("http://localhost:4000/iconButtons", {
  //   cache: "no-cache",
  // });
  // const buttons_icons: ButtonsIcons[] = await res_icons.json();

  const iconComponents: Record<
    string,
    React.FC<React.SVGProps<SVGSVGElement>>
  > = {
    FaHome,

    // Add more icon components as needed
  };
  return (
    <div className="w-full h-full flex flex-col  p-1 gap-1 ">
      <div className="h-1/2 w-full flex flex-col flex-wrap overflow-x-auto  rounded-lg overflow-hidden gap-1 bg-skin-fill ">
        {buttons_icons.map((data) => (
          <button
            key={data.id}
            className="bg-primary grow drop-shadow text-[1.2rem] font-bold  transition  basis-1/4 flex flex-col  items-center justify-center  rounded-lg gap-1 text-skin-base">
            {React.createElement(iconComponents[data.icon], {
              className: "big-btn-icon",
            })}
            <span className="text-sm ">{data.label}</span>
          </button>
        ))}
      </div>

      <Calculate />
    </div>
  );
}
