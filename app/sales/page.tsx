import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Sales",
};

const page = (props: Props) => {
  return <div className="default-page">Sale page</div>;
};

export default page;
