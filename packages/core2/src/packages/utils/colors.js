export function colorWithOpacity(color, opacity) {
  color = color.trim();

  if (color.startsWith("#") && color.length === 7) {
    let r = parseInt(color.substr(1, 2), 16);
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
  }

  throw new Error(
    "colorWithOpacity doesn't support other colors than in format #123456 for now"
  );
}
