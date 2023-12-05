// Page.tsx
"use client";
import React, { useState, useEffect } from "react";
import CategoryButtons from "../Category/CategoryButtons";
import ItemList_2 from "../Category/ItemList_2";
import ItemList_1 from "../Category/ItemList_1";
import dataCategory from "../../../data/categories.json";
import { Category } from "@/typings";
import PopAndClick from "../Item/PopAndClick";

export default function Page() {
  const [data, setData] = useState<Category[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

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
        if (result.length > 0) {
          setSelectedCategory(result[0]);
        }

        setData(result);
      } catch (error) {
        // handle the error as needed
        console.error("An error occurred while fetching the data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full h-full items-start dark:bg-gray-950">
      <CategoryButtons
        categories={data}
        onSelectCategory={handleSelectCategory}
      />
      {selectedCategory && <ItemList_2 items={selectedCategory.items} />}
      {/* {selectedCategory && <ItemList_1 items={selectedCategory.items} />} */}
    </div>
  );
}
