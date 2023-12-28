import React from "react";
import Welcome from "./Main/Welcome";
import Chart from "./Main/Chart";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="default-layout flex flex-col gap-3">
      <Welcome />
      <Chart />
    </div>
  );
};

export default Main;
