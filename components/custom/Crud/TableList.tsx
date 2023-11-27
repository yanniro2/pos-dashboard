import { RiSearch2Line } from "react-icons/ri";
import React from "react";

type Props = {};

const TableList = (props: Props) => {
  return (
    <div className="w-full p-1 h-2/3 bg-gray-50">
      <div className="flex relative items-center">
        <input
          type="search"
          name="search"
          id="search"
          className="border rounded-lg py-2 px-1 w-full"
        />
        <label htmlFor="search" className="absolute right-6 top-3">
          <RiSearch2Line className="text-[1.2rem]" />
        </label>
      </div>
      <div className="p-1 w-full h-full overflow-y-auto pb-[3rem]">
        <table className="table-fixed w-full rounded-lg ">
          <thead className="w-full bg-black text-white  rounded-lg">
            <tr className="w-full rounded-lg ">
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
              <th>Title 1</th>
              <th>Title 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
              <td>details 1</td>
              <td>details 2</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
              <td>details 1</td>
              <td>details 2</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>details 1</td>
              <td>details 2</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>details 1</td>
              <td>details 2</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>details 1</td>
              <td>details 2</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>details 1</td>
              <td>details 2</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>details 1</td>
              <td>details 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
