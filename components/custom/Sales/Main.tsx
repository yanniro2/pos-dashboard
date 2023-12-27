import React from "react";
import Welcome from "./Main/Welcome";
import Daily from "./Main/Daily";
import Chart from "./Main/Chart";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="default-layout">
      <Welcome />
      <Chart />
      <Daily />
    </div>
  );
};

export default Main;
