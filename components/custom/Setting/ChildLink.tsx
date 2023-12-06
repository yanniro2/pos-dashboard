// ChildLink.tsx
import Link from "next/link";
import React from "react";

interface ChildLinkProps {
  label: string;
  url: string;
}

const ChildLink: React.FC<ChildLinkProps> = ({ label, url }) => (
  <div className="absolute z-50 bg-primary">
    <Link href={url} className="">
      {label}
    </Link>
  </div>
);

export default ChildLink;
