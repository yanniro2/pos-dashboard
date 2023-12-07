import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Report",
};
const page = (props: Props) => {
  return <div className="default-page">Report page</div>;
};

export default page;
