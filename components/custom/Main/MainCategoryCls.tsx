// Page.tsx
"use client";
import React, { useState, useEffect } from "react";
import CategoryButtons from "../Category/CategoryButtons";
import ItemList from "../Category/ItemList";

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
        const response = await fetch("http://localhost:4000/categories");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: Category[] = await response.json();

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
      {selectedCategory && <ItemList items={selectedCategory.items} />}
    </div>
  );
}
