// components/InventoryTable.tsx
"use client";
import React, { useEffect, useState } from "react";
import categorysData from "../../data/categories.json";

const InventoryTable: React.FC = () => {
  const [inventoryData, setInventoryData] = useState<any>(null);
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setInventoryData(categorysData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (inventoryData) {
      const newFilteredItems = inventoryData.categories.reduce(
        (acc: any, category: any) => {
          const filteredCategory = {
            ...category,
            items: category.items.filter((item: any) => {
              switch (filter) {
                case "all":
                  return true;
                case "available":
                  return item.availableStock > 0;
                case "not-available":
                  return item.availableStock === 0;
                case "low-stock":
                  return item.availableStock > 0 && item.availableStock < 10; // You can adjust the threshold for low stock
                default:
                  return true;
              }
            }),
          };

          return [...acc, filteredCategory];
        },
        []
      );
      setFilteredItems(newFilteredItems);
    }
  }, [filter, inventoryData]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredAndSortedItems = filteredItems.map((category: any) => ({
    ...category,
    items: category.items.filter((item: any) =>
      (item.name ?? "").toLowerCase().includes((searchTerm ?? "").toLowerCase())
    ),
  }));

  return (
    <div className="default-layout bg-skin-light overflow-hidden text-skin-base">
      <div className="container mx-auto py-[1rem] flex flex-col gap-3">
        <div className="flex w-full items-center bg-skin-fill justify-between p-3 rounded-lg drop-shadow">
          <div>
            <label htmlFor="filter" className="mr-2">
              Filter by Availability:
            </label>
            <select
              id="filter"
              onChange={handleFilterChange}
              value={filter}
              className="text-primary font-semibold">
              <option value="all">All Items</option>
              <option value="available">Available Items</option>
              <option value="not-available">Not Available Items</option>
              <option value="low-stock">Low Stock Items</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search by name"
            className="input-1 text-primary"
            onChange={handleSearchChange}
            value={searchTerm}
          />
        </div>

        <div className="table-container h-[70vh] overflow-y-auto">
          <table className="table-auto w-full bg-skin-fill rounded-lg">
            <thead className="h-[2rem]">
              <tr className="bg-primary text-white">
                <th className="border  px-4 py-2">Category</th>
                <th className="border px-4 py-2">Item Name</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Discount</th>
                <th className="border px-4 py-2">Availability</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedItems.map((category: any) =>
                category.items.map((item: any) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{category.name}</td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.price}$</td>
                    <td className="border px-4 py-2">{item.discount}$</td>
                    <td className="border px-4 py-2">
                      {item.availableStock > 0 ? "Available" : "Not Available"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;
