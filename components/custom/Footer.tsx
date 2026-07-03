"use client";

import React from "react";

const Footer = () => {
  const startYear = 2023;
  const [yearText, setYearText] = React.useState(`${startYear}`);

  React.useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYearText(
      currentYear > startYear
        ? `${startYear} - ${currentYear}`
        : `${startYear}`,
    );
  }, []);

  return (
    <div className="w-full shrink-0 bg-skin-fill py-3 drop-shadow text-skin-base">
      <div className="container footer-content">
        <div>© All rights reserved {yearText}</div>
        <div>
          created by :{" "}
          <a
            href="https://n12oyan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit">
            Niroyan K
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
