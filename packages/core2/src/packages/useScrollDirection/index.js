import { useState, useEffect, useRef } from "react";

// takes overflow of Safari iOS into account
const getNormalizedScrollY = () => {
  const scrollY = window.scrollY;

  if (
    scrollY >= document.documentElement.scrollHeight - window.innerHeight ||
    scrollY < 0
  ) {
    return null;
  }

  return scrollY;
};

function useScrollDirection(options) {
  options = options || {};
  const { timeDebounce = 350 } = options;

  const [counter, setCounter] = useState(0);

  const blockedRef = useRef(false);
  const directionRef = useRef(undefined); // wrapper to have access to up-to-date values in updateScroll closure

  const previousScrollY = useRef(null);
  const timeout = useRef(null);

  useEffect(
    () => {
      const updateScroll = () => {
        const direction = directionRef.current;
        const blocked = blockedRef.current;

        const scrollY = getNormalizedScrollY();
        if (scrollY === null) {
          return;
        }

        if (previousScrollY.current !== null) {
          let newDirection;

          if (scrollY > previousScrollY.current) {
            newDirection = true;
          } else {
            newDirection = false;
          }

          if (newDirection !== direction && !blocked) {
            directionRef.current = newDirection;
            blockedRef.current = true;

            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
              blockedRef.current = false;
            }, timeDebounce);

            setCounter(counter => counter + 1);
          }
        }

        previousScrollY.current = scrollY;
      };

      window.addEventListener("scroll", updateScroll);
      updateScroll();

      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
        clearTimeout(timeout.current);
      };
    },
    [timeDebounce]
  );

  return directionRef.current;
}

export default useScrollDirection;
