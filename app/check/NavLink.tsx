// components/NavLink.tsx
"use client";
import { ReactNode, useState } from "react";

interface NavLinkProps {
  href: string;
  label: string;
  icon: string;
  subLinks?: {
    id: string;
    href: string;
    icon: string;
    label: string;
  }[];
  children?: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ label, subLinks }) => {
  const [hide, setHide] = useState(false);

  const handleShow = () => {
    setHide(true);
  };

  const handleHide = () => {
    setHide(false);
  };
  return (
    <button className="group relative" onMouseEnter={handleShow}>
      <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800">
        {label}
      </a>
      {subLinks && (
        <ul className="absolute  space-y-2 bg-gray-700 text-white ">
          {hide &&
            subLinks.map((subLink) => (
              <li key={subLink.id} className="py-2 px-4">
                <a href={subLink.href}>{subLink.label}</a>
              </li>
            ))}
        </ul>
      )}
    </button>
  );
};

export default NavLink;
