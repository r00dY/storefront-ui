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

function useScrollSegment(segments) {
  const [segment, setSegment] = useState(undefined);

  useEffect(
    () => {
      const updateScroll = () => {
        setSegment(getActiveOffset(segments, window.scrollY));
      };

      window.addEventListener("scroll", updateScroll);
      updateScroll();

      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    },
    [segments]
  );

  return segment;
}

export default useScrollSegment;
