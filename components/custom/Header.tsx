"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBell, FaMoon, FaLightbulb } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

const Header = () => {
  const pathName = usePathname();
  const links = [
    { label: "home", href: "/" },
    { label: "link1", href: "/link1" },
    { label: "link2", href: "/link2" },
    { label: "link3", href: "/link3" },
  ];

  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(!hide);
  };
  return (
    <>
      <nav className="w-full h-min bg-white text-black ">
        <div className="container mx-auto py-4 flex items-center justify-between border-b-[1px] border-b-bGray">
          <a href="/">logo</a>
          <ul className="flex items-center gap-5 justify-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathName === link.href ? "link-active" : "link"
                  }`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
