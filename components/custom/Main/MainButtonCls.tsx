import React from "react";
import {
  FaHome,
  FaShoppingCart,
  FaBarcode,
  FaPercent,
  FaMoneyBill,
  FaCreditCard,
  FaUndo,
  FaCog,
  FaSignOutAlt,
  FaFileAlt,
  FaUser,
  FaPrint,
  FaTrash,
  FaSearch,
  FaQuestionCircle,
  FaLock,
} from "react-icons/fa";
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
    FaShoppingCart,
    FaBarcode,
    FaPercent,
    FaMoneyBill,
    FaCreditCard,
    FaUndo,
    FaCog,
    FaSignOutAlt,
    FaFileAlt,
    FaUser,
    FaPrint,
    FaTrash,
    FaSearch,
    FaQuestionCircle,
    FaLock,

    // Add more icon components as needed
  };
  return (
    <div className="flex h-full w-full flex-col gap-1 p-1">
      <div className="grid min-h-[20rem] w-full grid-cols-4 gap-1 overflow-hidden rounded-lg bg-skin-fill xl:h-1/2 xl:grid-flow-col xl:grid-cols-none xl:grid-rows-3">
        {buttons_icons.map((data, index) => (
          <button
            key={data.id}
            className={`flex min-h-0 flex-col items-center justify-center gap-1 rounded-lg bg-primary text-[1.2rem] font-bold text-white drop-shadow transition-all hover:bg-skin-fill hover:text-primary ${
              index === buttons_icons.length - 1 ? "xl:row-span-3" : ""
            }`}>
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
