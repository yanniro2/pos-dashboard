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
    <section className="flex min-h-0 w-full flex-1 flex-col gap-3 overflow-y-auto bg-skin-light p-3 md:flex-row md:overflow-hidden">
      <div className="min-h-[32rem] w-full md:h-full md:w-3/4">
        <Main />
      </div>
      <div className="min-h-[24rem] w-full md:h-full md:w-1/4">
        <Sub />
      </div>
    </section>
  );
};

export default page;
