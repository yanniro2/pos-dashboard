import { Metadata } from "next";
import React from "react";
import Report from "./SalesReports";

type Props = {};
export const metadata: Metadata = {
  title: "Report",
};
const page = (props: Props) => {
  return <Report />;
};

export default page;
