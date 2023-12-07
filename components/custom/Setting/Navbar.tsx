"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { usePathname } from "next/navigation";
import navData from "../../../data/navLinks.json";
type Props = {};

const Navbar = (props: Props) => {
  const currentRoute = usePathname();
  const [sub, setSub] = useState<any | null>(null);

  return (
    <div className="w-1/4 h-[85vh] grid grid-cols-2 gap-1 drop-shadow rounded-lg  border shadow-md relative">
      {navData.map((data) => (
        <Link
          key={data.label}
          href={data.href}
          className={`${
            currentRoute === data.href ? "nav-link-active" : "nav-link"
          } `}
          onMouseEnter={() => setSub(data.subLinks)}>
          <MdOutlineSettingsSystemDaydream className="link-icon" />
          {data.label}
        </Link>
      ))}

      <div className="fixed top-0 bottom-0 left-[105%]   z-[5000] bg-primary flex flex-col gap-3 rounded-lg w-min drop-shadow-lg">
        {sub?.map((item: any) => (
          <Link
            href={item.href}
            key={item.label}
            className="text-white cursor-pointer hover:text-primary hover:bg-white w-full px-3 py-1 rounded-lg">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
