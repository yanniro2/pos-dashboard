import React from "react";
import Welcome from "./Main/Welcome";
import Chart from "./Main/Chart";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-3 p-1">
      <Welcome />
      <Chart />
    </div>
  );
};

export default Main;
