import { useState, useEffect, useRef } from "react";

function getActiveOffset(offsets, scrollY) {
  let offsetsCopy = { ...offsets };

  if (!offsetsCopy[0]) {
    offsetsCopy[0] = "top";
  }

  let keys = Object.keys(offsetsCopy);
  keys.sort();

  let result;
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] <= scrollY) {
      result = offsetsCopy[keys[i]];
    }
  }

  return result;
}

function useScrollSegment(config = {}) {
  const isActive = useRef(false); // ref instead of state prevents from extra re-renders.
  const [counter, setCounter] = useState(0);

  const { from = 0, to } = config;

  useEffect(
    () => {
      const updateScroll = () => {
        if (window.scrollY >= from && !isActive.current) {
          isActive.current = true;
          setCounter(c => c + 1);
        } else if (window.scrollY < from && isActive.current) {
          isActive.current = false;
          setCounter(c => c + 1);
        }
      };

      window.addEventListener("scroll", updateScroll);
      updateScroll();

      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    },
    [from, to]
  );

  return isActive.current;
}

export default useScrollSegment;
