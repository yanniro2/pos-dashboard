import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Login",
  description: "Created By Niroyan",
};

const page = (props: Props) => {
  return <section className="w-screen h-screen p-3">login</section>;
};

export default page;
