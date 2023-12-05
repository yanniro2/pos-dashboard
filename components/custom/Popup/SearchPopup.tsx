"use client";
import React, { useEffect, useState } from "react";
import Quantity from "../Sub/Quantity";
import dataCategory from "../../../data/db.json";
import { Category } from "@/typings";
type Props = {
  search: string;
  handleSearchNull: () => void;
};

const SearchPopup = (props: Props) => {
  const [data, setData] = useState<Category[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:4000/categories");
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const result: Category[] = await response.json();

        const result: Category[] = dataCategory.categories;
        // Set the default selected category to the first category if available
        setData(result);
      } catch (error) {
        // handle the error as needed
        console.error("An error occurred while fetching the data: ", error);
      }
    };

    fetchData();
  }, [props.search]);
  return (
    <div className="w-screen h-screen fixed  text-primary  z-[1600] left-0 right-0 top-0 ">
      <div
        className="w-full h-full z-[1500] fixed top-0 left-0 right-0 bottom-0 "
        onClick={props.handleSearchNull}></div>
      <div className="drop-shadow-lg overflow-x-auto flex flex-col pb-[10rem] dark:bg-gray-800 bg-white top-[7.5rem] absolute left-1 rounded-lg p-3 w-1/3 h-screen z-[1600] gap-3">
        <div>to search values are &quot;{props.search}&quot;</div>

        <div className="flex flex-col gap-1 items-start">
          {data
            ?.filter((datas) => {
              return props.search.toLocaleLowerCase() === ""
                ? datas.name.toLocaleLowerCase().includes(props.search)
                : datas.items.some(
                    (item) =>
                      item.name &&
                      item.name.toLocaleLowerCase().includes(props.search)
                    // (item.title &&
                    //   item.title
                    //     .toLocaleLowerCase()
                    //     .includes(props.search)) ||
                    // (item.author &&
                    //   item.author.toLocaleLowerCase().includes(props.search))
                  );
            })
            .map((datas) => (
              <div
                key={datas.id}
                className="w-full h-full p-3  flex border rounded-lg dark:border-primary ">
                {/* <div className="flex gap-1 p-3 font-semibold">
                  <div>Id:{datas.id}</div>
                  <div>{datas.name}</div>
                </div> */}

                <div className=" w-full h-full overflow-y-auto content-start rounded-lg p-1 flex flex-col gap-1 ">
                  {datas.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-100  p-3 rounded-lg flex flex-col gap-3 w-auto h-full flex-wrap border">
                      <div>{item.id}</div>
                      <div>
                        {item.name}
                        {/* {item.author} {item.title} */}
                      </div>
                      <div>{item.price}</div>

                      {/* <button className="p-3 bg-white text-primary rounded-lg w-fit">
                        Add
                      </button> */}

                      <Quantity item={item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
