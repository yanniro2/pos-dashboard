import React, { useEffect } from "react";

type ColorShades = { [key: string]: string };

const generateShades = (color: string, length: number): ColorShades => {
  const hexToRgb = (hex: string): number[] => {
    if (!hex) {
      return [0, 0, 0]; // Default to black if hex is null or undefined
    }

    return hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)!
      .map((x) => parseInt(x, 16));
  };

  const rgb = hexToRgb(color);
  const factor = 0.1; // Adjust this factor for different shades

  const shades: ColorShades = {};
  for (let i = 1; i <= length; i++) {
    const modifier = (i - 1) * factor;
    const modifiedRgb = rgb.map((value) =>
      i < length ? Math.round(value + (255 - value) * modifier) : value
    );
    shades[`shade${i}`] = `rgb(${modifiedRgb.join(",")})`;
  }

  return shades;
};

const SalesDataComponent: React.FC<{
  data: Array<{ month: string; totalSales: number; additionalSales: number }>;
}> = ({ data }) => {
  const [primaryColor, setPrimaryColor] = React.useState<string>("");
  useEffect(() => {
    // Get the computed primary color from the root element
    const root = document.documentElement;
    const primaryColor = getComputedStyle(root).getPropertyValue(
      "--color-text-primary"
    );

    // Set the primary color in the component state
    setPrimaryColor(primaryColor.trim());
  }, []);
  return (
    <div className="flex flex-wrap">
      {data.map((item, index) => {
        const baseColor = primaryColor; // replace with your desired base color
        const shades = generateShades(baseColor, data.length);

        return (
          <div
            key={index}
            className="p-4 m-2 w-48 border border-gray-300 rounded-md"
            style={{ backgroundColor: shades[`shade${index + 1}`] }}>
            <p>{item.month}</p>
            <p>Total Sales: {item.totalSales}</p>
            <p>Additional Sales: {item.additionalSales}</p>
          </div>
        );
      })}
    </div>
  );
};

const App: React.FC = () => {
  const salesData = [
    { month: "Jan", totalSales: 4000, additionalSales: 2400 },
    { month: "Feb", totalSales: 4800, additionalSales: 3200 },
    { month: "Mar", totalSales: 5500, additionalSales: 4000 },
    { month: "Apr", totalSales: 6200, additionalSales: 4800 },
    { month: "May", totalSales: 7000, additionalSales: 5500 },
    { month: "Jun", totalSales: 7800, additionalSales: 6200 },
    { month: "Jul", totalSales: 8500, additionalSales: 7000 },
  ];

  return (
    <div className="App">
      <SalesDataComponent data={salesData} />
    </div>
  );
};

export default App;
