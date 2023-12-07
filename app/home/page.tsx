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
    <div className="w-full flex h-full overflow-hidden">
      <div className="w-1/3 h-full bg-gary-100">
        <MainCrudCls />
      </div>
      <div className="w-1/3 h-full bg-gray-50">
        <MainCategoryCls />
      </div>
      <div className="w-1/3 h-full bg-slate-200">
        <MainButtonCls />
      </div>
    </div>
  );
}
