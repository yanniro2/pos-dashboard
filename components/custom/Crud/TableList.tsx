"use client";
import { RiSearch2Line } from "react-icons/ri";
import React, { useContext, useState } from "react";
import SearchPopup from "../Popup/SearchPopup";
import { CartContext } from "@/app/contexts/CartContext";

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
        {/* <table className="table-auto w-full rounded-lg h-min overflow-hidden">
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
            <tr>
              <td>The Sliding </td>
              <td>$5</td>
              <td>$99.99</td>
              <td>2</td>
              <td>$199.98</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>$5</td>
              <td>$19.99</td>
              <td>3</td>
              <td>$59.97</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>$5</td>
              <td>$9.99</td>
              <td>1</td>
              <td>$9.99</td>
            </tr>
            <tr>
              <td>Sneakers</td>
              <td>$5</td>
              <td>$59.99</td>
              <td>1</td>
              <td>$59.99</td>
            </tr>
            <tr>
              <td>The Great Gatsby</td>
              <td>$5</td>
              <td>$12.99</td>
              <td>2</td>
              <td>$25.98</td>
            </tr>
            <tr>
              <td>Smartphone</td>
              <td>$5</td>
              <td>$499.99</td>
              <td>1</td>
              <td>$499.99</td>
            </tr>
            <tr>
              <td>Jeans</td>
              <td>$5</td>
              <td>$39.99</td>
              <td>2</td>
              <td>$79.98</td>
            </tr>
            <tr>
              <td>To Kill a Mockingbird</td>
              <td>$5</td>
              <td>$14.99</td>
              <td>1</td>
              <td>$14.99</td>
            </tr>
            <tr>
              <td>Headphones</td>
              <td>$5</td>
              <td>$79.99</td>
              <td>1</td>
              <td>$79.99</td>
            </tr>
            <tr>
              <td>T-Shirt</td>
              <td>$5</td>
              <td>$19.99</td>
              <td>1</td>
              <td>$19.99</td>
            </tr>
          </tbody>
        </table> */}
        {items.map((data) => (
          <div key={data.id}>
            {data.name}
            {data.price}
            {data.qt}
            total Price : {data.price * data.qt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableList;
