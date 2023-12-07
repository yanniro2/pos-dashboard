"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { usePathname } from "next/navigation";
import navLinks from "../../../data/navLinks.json";
type Props = {};

const Navbar = (props: Props) => {
  const currentRoute = usePathname();

  return (
    <div className="w-1/4 h-[85vh] grid grid-cols-2 gap-1 drop-shadow rounded-lg  border shadow-md overflow-hidden">
      {navLinks.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          className={`${
            currentRoute === href ? "nav-link-active" : "nav-link"
          } `}>
          <MdOutlineSettingsSystemDaydream className="link-icon" />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
