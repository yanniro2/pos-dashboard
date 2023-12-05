"use client";
import { RiSearch2Line } from "react-icons/ri";
import React, { useContext, useState } from "react";
import SearchPopup from "../Popup/SearchPopup";
import { CartContext } from "@/app/contexts/CartContext";
import Quantity from "../Sub/Quantity";
import QuantityTypeTwo from "../Sub/QuantityTypeTwo";

type Props = {};

const TableList = (props: Props) => {
  const { items } = useContext(CartContext);
  const [search, setSearch] = useState<null | string>(null);
  const handleSearchNull = () => {
    setSearch(null);
  };
  return (
    <div className="w-full p-1 h-2/3 bg-gray-100 rounded-lg border dark:bg-gray-900 flex flex-col gap-1 ">
      <div className="flex relative items-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search product name | SKU | Others"
          className="border rounded-lg p-3 w-full outline-primary dark:bg-gray-800 capitalize"
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="search" className="absolute right-6 top-4">
          <RiSearch2Line className="text-[1.2rem] text-primary" />
        </label>
        <div>
          {search && (
            <SearchPopup search={search} handleSearchNull={handleSearchNull} />
          )}
        </div>
      </div>
      <div className="table-fixed w-full rounded-lg h-min overflow-hidden">
        <table className="table-auto w-full rounded-lg h-min overflow-hidden">
          <thead className="w-full text-white">
            <tr className="w-full">
              <th>Product Name</th>
              <th>Discount</th>
              <th>U Price</th>
              <th>Qy</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td className="text-center">{data.discount}$</td>
                <td className="text-right">{data.price}$</td>
                <td className="text-center">
                  {/* {data.qt} */}
                  <QuantityTypeTwo item={data} value={data.qt} />
                </td>
                <td className="text-right"> {data.price * data.qt}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
