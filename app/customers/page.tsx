import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Customers",
};
const page = (props: Props) => {
  return <div className="default-page">Customers page</div>;
};

export default page;
