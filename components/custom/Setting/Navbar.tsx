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
    <div className="relative grid w-full shrink-0 grid-cols-2 gap-2 rounded-lg border p-2 shadow-md drop-shadow sm:grid-cols-3 lg:h-[85vh] lg:w-1/4 lg:grid-cols-2">
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

      <div className="absolute left-0 top-full z-[5000] mt-2 flex w-full flex-col gap-3 rounded-lg bg-primary p-2 drop-shadow-lg lg:fixed lg:bottom-0 lg:left-[26%] lg:top-auto lg:mt-0 lg:w-min">
        {sub?.map((item: any) => (
          <Link
            href={item.href}
            key={item.label}
            className="text-skin-base cursor-pointer hover:text-primary hover:bg-white w-full px-3 py-1 rounded-lg">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
