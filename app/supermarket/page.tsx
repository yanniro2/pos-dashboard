import ButtonBlog from "@/components/custom/ButtonBlog";
import NumberBlog from "@/components/custom/NumberBlog";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex h-full">
      <div className="w-1/3 h-full bg-orange-400">crud</div>
      <div className="w-1/3 h-full bg-orange-500">category</div>
      <div className="w-1/3 h-full bg-slate-200">
        <div className="h-1/2 w-full p-3">
          <ButtonBlog />
        </div>
        <div className="h-1/2 w-full p-3">
          <NumberBlog />
        </div>
      </div>
    </div>
  );
};

export default page;
