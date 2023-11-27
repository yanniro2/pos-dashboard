"use client";
import React, { useState, useEffect } from "react";

type Item = {
  id: number;
  name?: string;
  title?: string;
  author?: string;
  price: number;
};

type Category = {
  id: number;
  name: string;
  items: Item[];
};

const CategoryButtons: React.FC<{
  categories: Category[] | null | undefined; // Update the type here
  onSelectCategory: (category: Category) => void;
}> = ({ categories, onSelectCategory }) => (
  <div>
    {categories?.map((category) => (
      <button key={category.id} onClick={() => onSelectCategory(category)}>
        {category.name}
      </button>
    ))}
  </div>
);

const ItemList: React.FC<{ items: Item[] }> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        {item.name || item.title} - ${item.price}
      </li>
    ))}
  </ul>
);

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
        setData(result);
      } catch (error) {
        // handle the error as needed
        console.error("An error occurred while fetching the data: ", error);
      }
    };

    fetchData();
  }, []); // Make sure to pass an empty dependency array if you only want to run the effect once

  return (
    <div>
      <CategoryButtons
        categories={data}
        onSelectCategory={handleSelectCategory}
      />
      {selectedCategory && <ItemList items={selectedCategory.items} />}
    </div>
  );
}
