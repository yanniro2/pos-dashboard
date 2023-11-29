// CategoryButtons.tsx
import React from "react";
import { FaLaptop, FaTshirt, FaBook } from "react-icons/fa";

export namespace CategoryButtonsTypes {
  export type Category = {
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

  export type CategoryButtonsProps = {
    categories: Category[] | null | undefined;
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
  <div className="w-1/3 flex flex-col items-start gap-1 p-1 border rounded-lg h-full overflow-x-auto bg-gray-100">
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
