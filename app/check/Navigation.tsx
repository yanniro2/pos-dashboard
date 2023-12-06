// Navigation.tsx
import ChildLink from "@/components/custom/Setting/ChildLink";
import ParentLink from "@/components/custom/Setting/ParentLink";
import React from "react";

interface NavLink {
  label: string;
  url: string;
  children?: NavLink[];
}

interface NavigationProps {
  navLinks: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const renderLinks = (links: NavLink[]) => (
    <ul>
      {links.map((link) => (
        <React.Fragment key={link.label}>
          {link.children ? (
            <ParentLink label={link.label} url={link.url} />
          ) : (
            <ChildLink label={link.label} url={link.url} />
          )}
          {link.children && <ul>{renderLinks(link.children)}</ul>}
        </React.Fragment>
      ))}
    </ul>
  );

  return <nav>{renderLinks(navLinks)}</nav>;
};

export default Navigation;
