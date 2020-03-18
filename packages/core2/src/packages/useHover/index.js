import { useRef, useState, useEffect } from "react";

// Hook
function useHover(ref) {
  const [value, setValue] = useState(false);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  if (
    typeof window === "object" &&
    window.matchMedia("screen and (pointer: fine)").matches
  ) {
    return false;
  }

  return value;
}

export default useHover;
