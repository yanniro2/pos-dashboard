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
      <nav className="w-full shrink-0 bg-skin-fill text-skin-base relative">
        <div className="container mx-auto flex flex-col gap-4 border-b-[1px] border-borded py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:gap-[1rem]">
            <Link
              href="/"
              className="flex min-w-0 items-center justify-center gap-3 lg:justify-start">
              <IoLogoBitbucket className="text-[2rem] hover:text-primary transition-all text-primary" />

              <h3 className="truncate font-bold uppercase text-primary"> Pos System</h3>
            </Link>
            <ul className="flex w-full items-center justify-start gap-3 overflow-x-auto pb-1 sm:justify-center lg:w-auto lg:gap-5 lg:overflow-visible lg:pb-0 lg:pl-[5rem]">
              {links.map((link) => {
                const isActive = pathName.startsWith(link.href);
                return (
                  <li
                    key={link.href}
                    className={`shrink-0 ${isActive ? "active" : "not-active"}`}>
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

          <ul className="flex shrink-0 flex-wrap items-center justify-center gap-5">
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
