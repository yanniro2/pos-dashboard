import React, { useContext, useEffect, useState } from "react";
import {
  FunnelChart,
  Funnel,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import Details from "./DetailsTypeOne";
import { transparentize } from "polished";
import { CartContext } from "../contexts/CartContext";

type Props = {};
interface SalesData {
  month: string;
  totalSales: number;
  additionalSales: number;
  fill?: string | null;
  className?: string | null;
}

const initialSalesData: SalesData[] = [
  {
    month: "Jan",
    totalSales: 4000,
    additionalSales: 2400,
  },
  {
    month: "Feb",
    totalSales: 4800,
    additionalSales: 3200,
  },
  {
    month: "Mar",
    totalSales: 5500,
    additionalSales: 4000,
  },
  {
    month: "Apr",
    totalSales: 6200,
    additionalSales: 4800,
  },
  {
    month: "May",
    totalSales: 7000,
    additionalSales: 5500,
  },
  {
    month: "Jun",
    totalSales: 7800,
    additionalSales: 6200,
  },
  {
    month: "Jul",
    totalSales: 8500,
    additionalSales: 7000,
  },
];

const FunnelChartComponent: React.FC<Props> = () => {
  const [salesData, setSalesData] = useState<SalesData[]>(initialSalesData);

  const [primaryColor, setPrimaryColor] = useState<string>("");

  useEffect(() => {
    const root = document.documentElement;
    const primaryColor = getComputedStyle(root).getPropertyValue(
      "--color-text-primary"
    );
    setPrimaryColor(primaryColor.trim());
    // modifi Data
    const modifiedData = salesData.map((item, index) => ({
      ...item,
      // fill: `bg-${(primaryColor)}-${100 * (index + 1)}`,
      // className: `bg-${primaryColor}-${100 * (index + 1)}`,
      fill: transparentize(index / salesData.length, primaryColor),
    }));
    setSalesData(modifiedData);
  }, []);

  return (
    <div className="bg-skin-medium p-3 rounded-lg w-full h-full">
      <h2 className="h3 p-4">Sales Funnel Chart</h2>
      <ResponsiveContainer width="100%" height="80%">
        <FunnelChart>
          <Tooltip
            contentStyle={{
              color: "white",
              background: primaryColor,
              padding: "10px",
              borderRadius: "10px",
            }}
            labelStyle={{ fontWeight: "bold", fontSize: "16px" }}
            itemStyle={{ listStyleType: "square", marginLeft: "10px" }}
            cursor={true}
          />
          <Funnel dataKey="totalSales" data={salesData} isAnimationActive>
            <LabelList
              position="right"
              className="fill-text-skin-base"
              stroke="none"
              dataKey="month"
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
      <div className="capitalize flex items-center w-full justify-around mx-auto">
        {salesData.map((entry, index) => (
          <Details key={index} color={entry.fill || ""} title={entry.month} />
        ))}
      </div>
    </div>
  );
};

export default FunnelChartComponent;
