import React from "react";
import {
  MdOutlineLightMode,
  MdNightlightRound,
  MdSettingsSystemDaydream,
} from "react-icons/md";
import { useTheme } from "next-themes";
type Props = {
  type: string;
  style: number;
  close: () => void;
};

const ThemePopup = (props: Props) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-screen h-screen fixed z-[1500] ">
      <div
        className="w-full h-full z-[1501] bg-transparent backdrop-brightness-50"
        onClick={props.close}></div>
      <div className="fixed z-[1510] w-min h-min  top-[3rem] rounded-lg bg-white drop-shadow flex items-start justify-center right-[9rem] flex-col gap-[1rem] dark:bg-gray-800 p-1 ">
        <div className="w-full flex items-center justify-center gap-3">
          <button
            onClick={() => setTheme("light")}
            className={`theme-icon ${
              theme === "light" ? "bg-gray-500 text-white" : ""
            }`}>
            <MdOutlineLightMode />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`theme-icon ${
              theme === "dark" ? "bg-gray-500 text-white" : ""
            }`}>
            <MdNightlightRound />
          </button>
          <button
            onClick={() => setTheme("system")}
            className={`theme-icon ${
              theme === "system" ? "bg-gray-500 text-white" : ""
            }`}>
            <MdSettingsSystemDaydream />
          </button>
        </div>

        <div className="flex items-center justify-center w-full gap-3 p-1">
          <button
            className="w-[1rem] h-[1rem] bg-red-500 rounded-full"
            onClick={() => setTheme("red")}></button>
          <button
            className="w-[1rem] h-[1rem] bg-blue-500 rounded-full"
            onClick={() => setTheme("blue")}></button>
          <button
            className="w-[1rem] h-[1rem] bg-green-500 rounded-full"
            onClick={() => setTheme("green")}></button>
          <button
            className="w-[1rem] h-[1rem] bg-orange-500 rounded-full"
            onClick={() => setTheme("orange")}></button>
        </div>
      </div>
    </div>
  );
};

export default ThemePopup;
