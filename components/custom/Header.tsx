"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoLogoBitbucket,
  IoColorPaletteOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  MdHome,
  MdInsertChartOutlined,
  MdOutlineInventory2,
  MdPersonOutline,
  MdReport,
} from "react-icons/md";
import HeaderPopup from "./Popup/HeaderPopup";
import ThemePopup from "./Popup/ThemePopup";
import { GoGear } from "react-icons/go";
import NotificationPopup from "./Popup/NotificationPopup";
import { CartContext } from "@/app/contexts/CartContext";
import UserPopup from "./Popup/UserPopup";

const Header = () => {
  const pathName = usePathname();
  const setting = pathName.startsWith("/settings");
  const links = [
    { label: "home", href: "/home", icon: "MdHome" },
    { label: "sales", href: "/sales", icon: "MdInsertChartOutlined" },
    { label: "inventory", href: "/inventory", icon: "MdOutlineInventory2" },
    { label: "employees", href: "/employees", icon: "MdPersonOutline" },
    { label: "reports", href: "/reports", icon: "MdReport" },
  ];

  const [activePopup, setActivePopup] = useState("");

  const handleClick = (popupType: React.SetStateAction<string>) => {
    setActivePopup(popupType);
  };

  const iconComponents: { [key: string]: React.ElementType } = {
    MdHome,
    MdInsertChartOutlined,
    MdOutlineInventory2,
    MdPersonOutline,
    MdReport,

    // Add more icon components as needed
  };

  const { notificationNo } = useContext(CartContext);
  return (
    <>
      <nav className="w-full h-min bg-skin-fill text-skin-base relative ">
        <div className="container mx-auto py-4 flex items-center justify-between border-b-[1px] border-borded ">
          <div className="flex items-center gap-[1rem]">
            <Link href="/home" className="flex items-center gap-3">
              <IoLogoBitbucket className="text-[2rem] hover:text-primary transition-all text-primary" />

              <h3 className="font-bold uppercase text-primary"> Pos System</h3>
            </Link>
            <ul className="flex items-center gap-5 justify-center pl-[5rem]">
              {links.map((link) => {
                const isActive = pathName.startsWith(link.href);
                return (
                  <li
                    key={link.href}
                    className={`${isActive ? "active" : "not-active"}`}>
                    <Link href={link.href}>
                      {React.createElement(iconComponents[link.icon], {
                        className: "nav-icon-left",
                      })}
                      <div className="bg-orange">{isActive}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className="flex items-center gap-5 justify-center">
            <li className="flex items-center justify-center">
              <button onClick={() => handleClick("theme")}>
                <IoColorPaletteOutline className="icon-outline" />
              </button>
            </li>
            <li className="flex items-center justify-center">
              <button
                onClick={() => handleClick("notification")}
                className="relative">
                <IoMdNotificationsOutline className="icon-outline" />
                <div className="w-[1.5rem] h-[1.5rem] absolute bg-primary drop-shadow rounded-full top-[-.5rem] right-0 translate-x-1/2 text-white font-bold">
                  {notificationNo}
                </div>
              </button>
            </li>
            <li className="flex items-center justify-center">
              <button onClick={() => handleClick("user")}>
                <IoPersonOutline className="icon-outline" />
              </button>
            </li>
            <li>|</li>
            <li className="flex items-center justify-center">
              <Link
                href={"/settings/dashboard"}
                className={`${setting ? "text-primary" : ""}`}>
                <GoGear className="icon-outline" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {activePopup === "user" && (
        <UserPopup style={8} type="user" close={() => setActivePopup("")} />
      )}
      {activePopup === "notification" && (
        <NotificationPopup
          style={4}
          type="notification"
          close={() => setActivePopup("")}
        />
      )}
      {activePopup === "theme" && (
        <ThemePopup style={20} type="theme" close={() => setActivePopup("")} />
      )}
    </>
  );
};

export default Header;
