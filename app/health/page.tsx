import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Health",
};
const page = (props: Props) => {
  return <h1>hello world</h1>;
};

export default page;
