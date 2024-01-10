"use client";
import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import Image from "next/image";

type Props = {
  type: string;
  style: number;
  close: () => void;
};

const UserPopup: React.FC<Props> = (props) => {
  const z = 10 - props.style;

  return (
    <div className="w-screen h-screen fixed z-[1500] ">
      <div
        className="w-full h-full z-[1501] bg-transparent backdrop-brightness-50"
        onClick={props.close}></div>
      <div
        className={`fixed z-[150${z}] w-[20rem] h-min  top-[3rem] rounded-lg  drop-shadow flex items-center  right-[8rem] bg-skin-light justify-between flex-col overflow-auto `}>
        <div className="bg-skin-fill w-full flex  items-center  p-3 text-primary border-b sticky top-0 left-0 right-0 justify-between border-borded">
          <div className="flex items-center gap-5">
            <Image
              src="/user img.jpeg"
              width="36"
              height="36"
              alt="user img"
              className="rounded-full object-contain"
            />

            <div>
              <h1 className="h3 capitalize">Niroyan</h1>
              <span className="text-sm">Manager</span>
            </div>
          </div>

          <IoIosSettings className="text-xl text-skin-base" />
        </div>
        <div className="w-full flex flex-col gap-3 bg-skin-fill h-full items-start p-3 capitalize text-skin-base">
          <button className="btn-2">Work space setting</button>
          <button className="btn-2">Billing</button>
          <button className="btn-2">Status page</button>
          <button className="btn-2">help center</button>
        </div>
        <div className="bg-skin-fill w-full flex  items-center gap-5 p-3  border-t sticky top-b left-0 right-0  font-semibold cursor-pointer text-primary border-borded">
          Log out
          <IoExitOutline className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default UserPopup;
