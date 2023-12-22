"use client";
import React, { useEffect, useState } from "react";
import dataCategory from "../../../data/categories.json";
import { Category } from "@/typings";
import Quantity from "../Quantity/Quantity_3";
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
      <div className="drop-shadow-lg overflow-x-auto flex flex-col pb-[10rem]  top-[7.5rem] absolute left-1 rounded-lg p-3 w-1/3 h-screen z-[1600] gap-3 bg-skin-dark">
        <div>to search values are &quot;{props.search}&quot;</div>

        <div className="gap-1 items-start grid grid-cols-2 grid-rows-2">
          {data
            ?.filter((datas) => {
              return props.search.toLocaleLowerCase() === ""
                ? datas.name.toLocaleLowerCase().includes(props.search)
                : datas.items.some(
                    (item) =>
                      (item.name &&
                        item.name.toLocaleLowerCase().includes(props.search)) ||
                      (item.id && item.id.toString().includes(props.search))
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
                className="w-full h-full   flex  rounded-lg   ">
                {/* <div className="flex gap-1 p-3 font-semibold">
                  <div>Id:{datas.id}</div>
                  <div>{datas.name}</div>
                </div> */}

                <div className=" w-full h-full overflow-y-auto content-start rounded-lg flex flex-col gap-1 ">
                  {datas.items.map((item) => (
                    <div
                      key={item.id}
                      className={` p-3 rounded-lg flex flex-col gap-3 w-auto h-full flex-wrap border drop-shadow ${
                        item.availableStock > 0
                          ? " bg-skin-medium cursor-pointer transition-all hover:bg-skin-light"
                          : "cursor-not-allowed"
                      }`}>
                      <div className="flex items-center gap-3 text-skin-base">
                        <div>{item.id}</div>
                        <div className="price">{item.name}</div>
                      </div>

                      <div className="price">${item.price}</div>

                      {item.availableStock > 0 ? (
                        <Quantity item={item} />
                      ) : (
                        <div className="font-bold">Stock not available</div>
                      )}
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
