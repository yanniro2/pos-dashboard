import MainButtonCls from "@/components/custom/Main/MainButtonCls";
import MainCategoryCls from "@/components/custom/Main/MainCategoryCls";
import React from "react";

export default async function Page() {
  return (
    <div className="w-full flex h-full overflow-hidden">
      <div className="w-1/3 h-full bg-orange-400">crud</div>
      <div className="w-1/3 h-full bg-orange-500">
        <MainCategoryCls />
      </div>
      <div className="w-1/3 h-full bg-slate-200">
        <MainButtonCls />
      </div>
    </div>
  );
}
