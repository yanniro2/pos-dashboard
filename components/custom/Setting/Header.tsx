import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <section className="flex items-center w-[95%] p-5 border-b justify-between flex-col">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-3 ">
          <h1 className="text-[1.2rem] font-bold ">Main Heading </h1>
          <span>|</span>
          <h2 className="text-[1rem] font-medium"> Sub Heading</h2>
        </div>

        <button className="btn-primary-1">submit</button>
      </div>
      <main className="w-full h-full"></main>
    </section>
  );
};

export default Header;
