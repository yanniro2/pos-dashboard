import React from "react";

interface Sale {
  id: number;
  userName: string;
  salesmanName: string;
  amount: number;
  paymentMethod: string;
  timestamp: string;
}

type SalesProps = {
  sale: Sale;
};

const Sales: React.FC<SalesProps> = ({ sale }) => {
  return (
    <div className="w-full h-full flex items-center justify-between bg-skin-light p-1 rounded-lg">
      <div className="flex flex-col">
        <p className="font-semibold text-skin-base">{sale.salesmanName}</p>
        <p className="text-gray-500 font-light">{sale.timestamp}</p>
      </div>

      <div className="text-right flex flex-col justify-end">
        <p className="text-primary font-semibold"> ${sale.amount}</p>
        <p className="text-gray-500 font-medium">{sale.paymentMethod}</p>
      </div>
    </div>
  );
};

export default Sales;
