import { Metadata } from "next";
import React from "react";
import Employee from "./Employee";

type Props = {};
export const metadata: Metadata = {
  title: "Employee",
};
const page = (props: Props) => {
  return <Employee />;
};

export default page;
