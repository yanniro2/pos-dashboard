"use client";
import React, { FC, useEffect, useState } from "react";
import salesData from "../../../../data/sales.json";
import Sales from "./Sales";
interface Sale {
  id: number;
  userName: string;
  salesmanName: string;
  amount: number;
  paymentMethod: string;
  timestamp: string;
}

interface ScoreBoardProps {
  // No need to pass recentSales as a prop
}

const ScoreBoard: FC<ScoreBoardProps> = () => {
  const [recentSales, setRecentSales] = useState<Sale[]>(salesData);

  return (
    <div className="w-full h-max  bg-skin-medium rounded-lg p-3">
      <h2 className="font-bold mb-5 text-skin-base">Recent Sales</h2>

      <div className="flex w-full h-[18rem] flex-col overflow-auto gap-3 ">
        {recentSales.map((sale) => (
          <Sales key={sale.id} sale={sale} />
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;
