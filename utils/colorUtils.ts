// utils/colorUtils.ts
export const hexToRgb = (hex: string): number[] => {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
};

export const calculateColorDifference = (
  color1: number[],
  color2: number[]
): number => {
  return Math.sqrt(
    Math.pow(color2[0] - color1[0], 2) +
      Math.pow(color2[1] - color1[1], 2) +
      Math.pow(color2[2] - color1[2], 2)
  );
};

type ColorType =
  | ["red", "lightRed", "darkRed"]
  | ["green", "lightGreen", "darkGreen"]
  | ["blue", "lightBlue", "darkBlue"];

export const findNearestColorType = (
  targetHex: string,
  colorPalette: Record<string, string[]>
): ColorType => {
  const targetRgb = hexToRgb(targetHex);

  let nearestColorType: ColorType = ["red", "lightRed", "darkRed"];
  let minDifference = calculateColorDifference(
    targetRgb,
    hexToRgb(colorPalette[nearestColorType[0]][0])
  );

  Object.keys(colorPalette).forEach((colorType: string) => {
    const colors = colorPalette[colorType];
    colors.forEach((hex: string) => {
      const difference = calculateColorDifference(targetRgb, hexToRgb(hex));
      if (difference < minDifference) {
        minDifference = difference;
        nearestColorType = [
          colorType as ColorType[0],
          ...colors.slice(1),
        ] as ColorType;
      }
    });
  });

  return nearestColorType;
};
