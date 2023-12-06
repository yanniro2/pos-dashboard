// ParentLink.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";

interface ParentLinkProps {
  label: string;
  url: string;
}

const ParentLink: React.FC<ParentLinkProps> = ({ label, url }) => {
  const currentRoute = usePathname();
  return (
    <Link
      href={url}
      className={`${currentRoute === url ? "nav-link-active" : "nav-link"} `}>
      <MdOutlineSettingsSystemDaydream className="link-icon" />
      {label}
    </Link>
  );
};

export default ParentLink;
