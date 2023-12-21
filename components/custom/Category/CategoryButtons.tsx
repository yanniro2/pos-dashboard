// CategoryButtons.tsx
import { Category } from "@/typings";
import React from "react";
import { FaLaptop, FaTshirt, FaBook } from "react-icons/fa";

export namespace CategoryButtonsTypes {
  export type CategoryButtonsProps = {
    categories: Category[] | null;
    onSelectCategory: (category: Category) => void;
  };
}

const iconComponents: { [key: string]: React.ElementType } = {
  FaLaptop,
  FaTshirt,
  FaBook,
  // Add more icon components as needed
};

const CategoryButtons: React.FC<CategoryButtonsTypes.CategoryButtonsProps> = ({
  categories,
  onSelectCategory,
}) => (
  <div className="w-1/3 flex flex-col items-start gap-1 p-1 border rounded-lg h-full overflow-x-auto ">
    {categories?.map((category) => (
      <button
        key={category.id}
        onClick={() => onSelectCategory(category)}
        className="category-btn">
        {React.createElement(iconComponents[category.icon], {
          className: "category-icon",
        })}
        <span className="font-semibold">{category.name}</span>
      </button>
    ))}
  </div>
);

export default CategoryButtons;
