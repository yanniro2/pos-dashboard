import React from "react";
import TableList from "../Crud/TableList";
import ShowList from "../Crud/ShowList";

type Props = {};

const MainCrudCls = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-1 bg-skin-fill">
      <TableList />
      <ShowList />
    </div>
  );
};

export default MainCrudCls;
