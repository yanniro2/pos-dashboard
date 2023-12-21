import React, { useEffect } from "react";
import {
  MdOutlineLightMode,
  MdNightlightRound,
  MdSettingsSystemDaydream,
  MdDoneAll,
} from "react-icons/md";
import { useTheme } from "next-themes";

type Props = {
  type: string;
  style: number;
  close: () => void;
};

const ThemePopup = (props: Props) => {
  const { setTheme, theme } = useTheme();
  const currentTheme = theme?.split("-")[1];
  const currentColor = theme?.split("-")[0];

  // Array of theme objects
  const themes = [
    { name: "dark", icon: <MdNightlightRound /> },
    { name: "light", icon: <MdOutlineLightMode /> },
    // { name: "system", icon: <MdSettingsSystemDaydream /> },
  ];

  // Array of color objects
  const colors = [
    { name: "red", icon: <MdDoneAll className="text-white" /> },
    { name: "blue", icon: <MdDoneAll className="text-white" /> },
    { name: "green", icon: <MdDoneAll className="text-white" /> },
    { name: "orange", icon: <MdDoneAll className="text-white" /> },
  ];

  // console.log(theme);

  const colorChange = (color: string) => {
    const currentTheme = theme?.split("-")[1]; // Extract current theme from the theme
    const newTheme = `${color}-${currentTheme}`;
    setTheme(newTheme);
  };

  const themeChange = (selectedTheme: string) => {
    const currentColor = theme?.split("-")[0]; // Extract current color from the theme
    const newTheme = `${currentColor}-${selectedTheme}`;
    setTheme(newTheme);
  };

  // alert(theme);

  return (
    <div className="w-screen h-screen fixed z-[1500]">
      <div
        className="w-full h-full z-[1501] bg-transparent backdrop-brightness-50"
        onClick={props.close}></div>
      <div className="fixed z-[1510] w-min h-min  top-[3rem] rounded-lg bg-background drop-shadow flex items-start justify-center right-[9rem] flex-col gap-[1rem]  p-1 ">
        <div className="w-full flex items-center justify-center gap-3">
          {/* Map through themes array */}
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => themeChange(t.name)}
              className={`theme-icon ${
                currentTheme === t.name ? "bg-primary text-white" : ""
              }`}>
              {t.icon}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center w-full gap-3 p-1">
          {/* Map through colors array */}
          {colors.map((c) => (
            <button
              key={c.name}
              className={`w-[1rem] h-[1rem] bg-${c.name}-500 rounded-full`}
              onClick={() => colorChange(c.name)}>
              {theme?.includes(c.name) && c.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemePopup;
