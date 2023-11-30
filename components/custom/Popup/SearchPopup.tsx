import React, { useEffect, useState } from "react";

type Props = {
  value: string;
};
type Category = {
  id: number;
  name: string;
  icon: string;
  color: string;
  items: {
    id: number;
    name?: string;
    title?: string;
    price: number;
  }[];
};
const SearchPopup = (props: Props) => {
  const [data, setData] = useState<Category[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/categories");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: Category[] = await response.json();

        // Set the default selected category to the first category if available
        setData(result);
      } catch (error) {
        // handle the error as needed
        console.error("An error occurred while fetching the data: ", error);
      }
    };

    fetchData();
  }, [props.value]);
  return (
    <div className="w-full h-screen bg-white text-primary absolute z-[1600] left-0 right-0 top-[2.5rem] rounded-lg p-3 drop-shadow overflow-x-auto flex flex-col pb-[10rem]">
      <div>to search values are &quot;{props.value}&quot;</div>

      <div className="flex flex-col gap-1 items-start">
        {data
          ?.filter((datas) => {
            return props.value.toLocaleLowerCase() === ""
              ? datas.name.toLocaleLowerCase().includes(props.value)
              : datas.items.some(
                  (item) =>
                    item.name &&
                    item.name.toLocaleLowerCase().includes(props.value)
                );
          })
          .map((datas) => (
            <div
              key={datas.id}
              className="w-full h-full p-3  flex border rounded-lg ">
              <div className="flex gap-1 p-3 font-semibold">
                <div>Id:{datas.id}</div>
                <div>{datas.name}</div>
              </div>

              <div className=" w-full h-full overflow-y-auto content-start rounded-lg p-1 grid grid-cols-2 gap-1 ">
                {datas.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-primary text-white p-3 rounded-lg flex flex-col gap-3 w-auto h-full flex-wrap">
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.price}</div>

                    <button className="p-3 bg-white text-primary rounded-lg w-fit">
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchPopup;
