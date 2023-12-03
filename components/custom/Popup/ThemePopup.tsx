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
  const { setTheme } = useTheme();
  return (
    <div className="w-screen h-screen fixed z-[1500] ">
      <div
        className="w-full h-full z-[1501] bg-transparent backdrop-brightness-50"
        onClick={props.close}></div>
      <div className="fixed z-[1510] w-min h-min  top-[3rem] rounded-lg bg-white drop-shadow flex items-start justify-center right-[9rem] flex-col gap-[1rem] dark:bg-gray-800 ">
        <button onClick={() => setTheme("light")} className="theme-btn">
          <MdOutlineLightMode />
          light
        </button>
        <button onClick={() => setTheme("dark")} className="theme-btn">
          <MdNightlightRound />
          dark
        </button>
        <button onClick={() => setTheme("system")} className="theme-btn">
          <MdSettingsSystemDaydream />
          system
        </button>
        <button onClick={() => setTheme("red")} className="theme-btn">
          <MdSettingsSystemDaydream />
          red
        </button>
      </div>
    </div>
  );
};

export default ThemePopup;
