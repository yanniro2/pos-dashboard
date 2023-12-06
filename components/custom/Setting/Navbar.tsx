// Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { usePathname } from "next/navigation";
import navLinks from "../../../data/navLinks.json";
import ParentLink from "./ParentLink";
import ChildLink from "./ChildLink";

interface NavLink {
  label: string;
  url: string;
  children?: NavLink[];
}

interface NavigationProps {
  navLinks: NavLink[];
}

type Props = {};

const Navbar = (props: Props) => {
  const currentRoute = usePathname();

  const renderLinks = (links: NavLink[]) => (
    <div className="relative">
      {links.map((link) => (
        <div
          key={link.label}
          className={
            link.children
              ? "parent-link"
              : "absolute bg-primary top-0 bottom-0  right-[-7rem] rounded-lg drop-shadow-lg p-3"
          }>
          {link.children ? (
            <ParentLink label={link.label} url={link.url} />
          ) : (
            <ChildLink label={link.label} url={link.url} />
          )}
          {link.children && <ul>{renderLinks(link.children)}</ul>}
        </div>
      ))}
    </div>
  );

  return renderLinks(navLinks);
};

export default Navbar;
