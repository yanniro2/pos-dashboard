"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const currentRoute = usePathname();
  const navLinks = [
    { href: "/settings/link1", label: "Setting 1" },
    { href: "/settings/link2", label: "Setting 2" },
    { href: "/settings/link3", label: "Setting 3" },
    { href: "/settings/link4", label: "Setting 4" },
    { href: "/settings/link5", label: "Setting 5" },
  ];

  return (
    <div className="w-1/4 h-full flex flex-col gap-1 drop-shadow rounded-lg  border shadow-md">
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
