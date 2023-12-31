import Header from "@/components/custom/Setting/Header";
import InputLabel from "@/components/custom/Sub/InputLabel";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" w-[95%] h-full flex items-center justify-center flex-col">
      <Header />
      <div className="w-full h-full p-3">
        <div className="grid grid-cols-2 items-start gap-[1rem]">
          <InputLabel label="name" id="name" placeholder="Enter name product" />
          <InputLabel label="name" id="name" placeholder="Enter name product" />

          <InputLabel label="name" id="name" placeholder="Enter name product" />
          <InputLabel label="name" id="name" placeholder="Enter name product" />
        </div>
      </div>
    </div>
  );
};

export default page;
