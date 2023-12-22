"use client";
import React, { useContext, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import SearchPopup from "../Popup/SearchPopup";
import { CartContext } from "@/app/contexts/CartContext";
import Quantity from "../Quantity/Quantity_1";

type Props = {};

const TableList = (props: Props) => {
  const { items, removeItem } = useContext(CartContext);
  const [search, setSearch] = useState<null | string>(null);
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5; // Adjust the number of items per page as needed

  const handleSearchNull = () => {
    setSearch(null);
  };

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full h-2/3  rounded-lg   flex flex-col gap-1  bg-skin-fill ">
      <div className="flex relative items-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search product name | SKU | Others"
          className="border rounded-lg p-3 w-full  capitalize outline-primary bg-skin-dark border-borded text-skin-base"
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
      <div className="table-fixed w-full rounded-lg h-full overflow-x-auto">
        <table className="table-auto w-full rounded-lg text-skin-base">
          <thead className="w-full">
            <tr className="w-full bg-skin-light">
              <th>Product Name</th>
              <th>U Price</th>
              <th>Qy</th>
              <th>Sub Total</th>
              <th>act</th>
            </tr>
          </thead>
          <tbody className="h-60 overflow-x-auto ">
            {items.map((data) => (
              <tr key={data.id} className="">
                <td className="text-ellipsis p-1">
                  {data.name.length > 50
                    ? `${data.name.substring(0, 50)}...`
                    : data.name}
                </td>
                <td className="text-left">{data.price}$</td>
                <td className="text-center">
                  <Quantity item={data} value={data.qt} />
                </td>
                <td className="text-right"> {data.price * data.qt}$</td>
                <td className="text-center">
                  <button onClick={() => removeItem(data.id)}>
                    <MdDeleteOutline className="text-primary font-bold text-[1.4rem]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="px-2 flex justify-between w-full">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-400 cursor-pointer font-bold">
          Previous
        </button>
        <div className="flex items-center justify-center gap-3">
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}>
                {index + 1}
              </button>
            )
          )}
        </div>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
          className=" px-2 py-1 rounded-lg font-bold text-primary cursor-pointer">
          Next
        </button>
      </div> */}
    </div>
  );
};

export default TableList;
