import React from "react";
import Date from "./Sub/Date";
import ScoreBoard from "./Sub/ScoreBoard";

type Props = {};

const Sub = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-1">
      <Date />
      <ScoreBoard />
    </div>
  );
};

export default Sub;
