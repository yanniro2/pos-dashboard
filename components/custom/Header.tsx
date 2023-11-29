"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBell, FaMoon, FaUser } from "react-icons/fa";
import { IoLogoBitbucket } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import HeaderPopup from "./Sub/HeaderPopup";
import { IoIosSettings } from "react-icons/io";

const Header = () => {
  const pathName = usePathname();
  const links = [
    { label: "home", href: "/supermarket", icon: "MdHome" },
    { label: "link1", href: "/supermarket/link1", icon: "IoIosSettings" },
    { label: "link2", href: "/supermarket/link2", icon: "IoIosSettings" },
    { label: "link3", href: "/supermarket/link3", icon: "IoIosSettings" },
  ];

  const [activePopup, setActivePopup] = useState("");

  const handleClick = (popupType: React.SetStateAction<string>) => {
    setActivePopup(popupType);
  };

  const iconComponents: { [key: string]: React.ElementType } = {
    MdHome,
    IoIosSettings,

    // Add more icon components as needed
  };

  return (
    <>
      <nav className="w-full h-min bg-white text-black relative">
        <div className="container mx-auto py-4 flex items-center justify-between border-b-[1px] border-b-bGray">
          <div className="flex items-center gap-[1rem]">
            <Link href="/supermarket">
              <IoLogoBitbucket className="text-[2rem] hover:text-primary transition-all text-primary" />
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
                        className: "text-[22px]",
                      })}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className="flex items-center gap-5 justify-center">
            <li className="flex items-center justify-center">
              <button onClick={() => handleClick("theme")}>
                <FaMoon className="icon" />
              </button>
            </li>
            <li className="flex items-center justify-center">
              <button
                onClick={() => handleClick("notification")}
                className="relative">
                <FaBell className="icon " />
                <div className="w-[1.5rem] h-[1.5rem] absolute bg-primary rounded-full top-[-.5rem] right-0 translate-x-1/2 text-white font-bold">
                  3
                </div>
              </button>
            </li>
            <li className="flex items-center justify-center">
              <button onClick={() => handleClick("user")}>
                <FaUser className="icon" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {activePopup === "user" && (
        <HeaderPopup style={8} type="user" close={() => setActivePopup("")} />
      )}
      {activePopup === "notification" && (
        <HeaderPopup
          style={4}
          type="notification"
          close={() => setActivePopup("")}
        />
      )}
      {activePopup === "theme" && (
        <HeaderPopup style={2} type="theme" close={() => setActivePopup("")} />
      )}
    </>
  );
};

export default Header;
