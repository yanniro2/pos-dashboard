"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBell, FaMoon, FaLightbulb, FaUser } from "react-icons/fa";
import { IoLogoBitbucket } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

const Header = () => {
  const pathName = usePathname();
  const links = [
    { label: "home", href: "/supermarket", icon: "MdHome" },
    { label: "link1", href: "/supermarket/link1", icon: "IoIosSettings" },
    { label: "link2", href: "/supermarket/link2", icon: "IoIosSettings" },
    { label: "link3", href: "/supermarket/link3", icon: "IoIosSettings" },
  ];

  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(!hide);
  };

  const iconComponents: { [key: string]: React.ElementType } = {
    MdHome,
    IoIosSettings,

    // Add more icon components as needed
  };
  return (
    <>
      <nav className="w-full h-min bg-white text-black ">
        <div className="container mx-auto py-4 flex items-center justify-between border-b-[1px] border-b-bGray">
          <div className="flex items-center gap-[1rem] ">
            <Link href="/supermarket">
              <IoLogoBitbucket className="text-[2rem] hover:text-orange-600 transition-all" />
            </Link>
            <ul className="flex items-center gap-5 justify-center pl-[5rem]">
              {links.map((link) => {
                const isActive = pathName.startsWith(link.href);
                return (
                  <li
                    key={link.href}
                    className={`${isActive ? "active" : "not-active"}`}>
                    <Link href={link.href}>
                      {/* {link.label} */}
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
            <li className="flex items-center">
              <button onClick={handleClick}>
                {hide ? (
                  <FaLightbulb className="icon" />
                ) : (
                  <FaMoon className="icon" />
                )}
              </button>
            </li>
            <li>
              <FaBell className="icon" />
            </li>
            <li>
              <FaUser className="icon" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
