import { Metadata } from "next";
import React from "react";
import InventoryTable from "./InventoryTable";

type Props = {};
export const metadata: Metadata = {
  title: "Inventory",
};
const page = (props: Props) => {
  return <InventoryTable />;
};

export default page;
