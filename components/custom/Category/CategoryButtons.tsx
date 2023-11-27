// CategoryButtons.tsx
import React from "react";

export namespace CategoryButtonsTypes {
  export type Category = {
    id: number;
    name: string;
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

const CategoryButtons: React.FC<CategoryButtonsTypes.CategoryButtonsProps> = ({
  categories,
  onSelectCategory,
}) => (
  <div>
    {categories?.map((category) => (
      <button key={category.id} onClick={() => onSelectCategory(category)}>
        {category.name}
      </button>
    ))}
  </div>
);

export default CategoryButtons;
