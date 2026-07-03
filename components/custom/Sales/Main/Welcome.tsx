import Image from "next/image";
import React from "react";

type Props = {};

const Welcome = (props: Props) => {
  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <div className="flex min-h-[9rem] w-full shrink-0 items-center justify-between gap-3 rounded-lg bg-primary p-3 text-white drop-shadow">
      <div className="flex items-start justify-between flex-col gap-1">
        <h3 className="text-sm font-normal text-skin-secoundary">
          {getGreetingMessage()}{" "}
          <span className="underline font-medium">Niroyan</span>
        </h3>
        <h1 className="text-3xl font-bold">Check your Daily Sales & Reports</h1>
      </div>
      <div className="relative w-1/2 h-full">
        <Image
          width={100}
          height={100}
          src="./user.svg"
          alt="user img"
          className="absolute bottom-0 right-0 z-10"
        />
      </div>
    </div>
  );
};

export default Welcome;
