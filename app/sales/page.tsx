import Main from "@/components/custom/Sales/Main";
import Sub from "@/components/custom/Sales/Sub";
import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Sales",
};

const page = (props: Props) => {
  return (
    <section className="w-screen h-screen p-3 flex bg-skin-light">
      <div className="w-3/4 h-full">
        <Main />
      </div>
      <div className="w-1/4 h-full">
        <Sub />
      </div>
    </section>
  );
};

export default page;
