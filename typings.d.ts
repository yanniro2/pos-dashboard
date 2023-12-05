export type Category = {
  id: number;
  name: string;
  icon: string;
  items: Items[];
};

export type Items = {
  id: number;
  name: string;
  price: number;
  availableStock: number;
};

export type CartItems = {
  id: number;
  name: string;
  price: number;
  qt: number;
};
