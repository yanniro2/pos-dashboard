import React from "react";
import { useTheme } from "next-themes";
type Props = {
  type: string;
  style: number;
  close: () => void;
};

const HeaderPopup: React.FC<Props> = (props) => {
  
  const z = 10 - props.style;
  return (
    <div className="w-screen h-screen fixed z-[1500] ">
      <div
        className="w-full h-full z-[1501] bg-transparent backdrop-brightness-50"
        onClick={props.close}></div>
      <div
        className={`fixed z-[150${z}] w-[10rem] h-[10rem] right-[3rem] top-[3rem] rounded-lg bg-skin-fill drop-shadow flex items-center justify-center right-[${z}rem] text-skin-base`}>
        {props.type}
      </div>
    </div>
  );
};

export default HeaderPopup;
