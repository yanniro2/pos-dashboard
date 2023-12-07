import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Inventory",
};
const page = (props: Props) => {
  return <div className="default-page">Inventory page</div>;
};

export default page;
