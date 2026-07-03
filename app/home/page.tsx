import MainButtonCls from "@/components/custom/Main/MainButtonCls";
import MainCategoryCls from "@/components/custom/Main/MainCategoryCls";
import MainCrudCls from "@/components/custom/Main/MainCrudCls";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Created By Niroyan",
};

export default async function Page() {
  return (
    <div className="h-full min-h-0 w-full flex-1 overflow-auto bg-skin-dark">
      <div className="flex min-h-full w-full flex-col gap-2 xl:h-full xl:min-h-[640px] xl:min-w-[1180px] xl:flex-row xl:gap-0">
        <div className="min-h-[32rem] w-full bg-skin-dark xl:h-full xl:w-1/3">
          <MainCrudCls />
        </div>
        <div className="min-h-[36rem] w-full bg-skin-dark xl:h-full xl:w-1/3">
          <MainCategoryCls />
        </div>
        <div className="min-h-[42rem] w-full bg-skin-medium xl:h-full xl:w-1/3">
          <MainButtonCls />
        </div>
      </div>
    </div>
  );
}
