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
  discount: number;
  availableStock: number;
};

export type CartItems = {
  id: number;
  name: string;
  price: number;
  qt: number;
  discount: number;
};
