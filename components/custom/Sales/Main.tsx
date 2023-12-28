import React from "react";
import Welcome from "./Main/Welcome";
import Chart from "./Main/Chart";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-1">
      <Welcome />
      <Chart />
    </div>
  );
};

export default Main;
