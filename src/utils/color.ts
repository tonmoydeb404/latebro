export function generateRandomColor(): string {
  // Generate random RGB values within a smooth range
  const r = Math.floor(Math.random() * 156 + 100); // Red: 100-255
  const g = Math.floor(Math.random() * 156 + 100); // Green: 100-255
  const b = Math.floor(Math.random() * 156 + 100); // Blue: 100-255

  // Convert to a hex color string
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

/**
 * Returns a suitable text color (either black or white) based on the provided background color.
 * @param bgColor - The background color in hex format (e.g., "#ffffff" or "#000000").
 * @returns "black" or "white" depending on the background color's brightness.
 */
export function getForegroundColor(bgColor: string): string {
  // Convert hex color to RGB
  const hexToRgb = (hex: string) => {
    let sanitizedHex = hex.replace("#", "");
    if (sanitizedHex.length === 3) {
      sanitizedHex = sanitizedHex
        .split("")
        .map((c) => c + c)
        .join("");
    }
    const bigint = parseInt(sanitizedHex, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  // Calculate relative luminance
  const getLuminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
    const normalize = (value: number) => {
      const normalized = value / 255;
      return normalized <= 0.03928
        ? normalized / 12.92
        : Math.pow((normalized + 0.055) / 1.055, 2.4);
    };
    return (
      0.2126 * normalize(r) + 0.7152 * normalize(g) + 0.0722 * normalize(b)
    );
  };

  const rgb = hexToRgb(bgColor);
  const luminance = getLuminance(rgb);

  // Return "black" for light backgrounds, "white" for dark backgrounds
  return luminance > 0.5 ? "black" : "white";
}