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
