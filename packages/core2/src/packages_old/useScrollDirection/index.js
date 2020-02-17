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
  const { timeDebounce } = options;

  const [direction, setDirection] = useState(undefined);
  const [blocked, setBlocked] = useState(false);

  // wrapper to have access to up-to-date values in updateScroll closure
  const wrapper = useRef({});
  wrapper.current.blocked = blocked;
  wrapper.current.direction = direction;

  const previousScrollY = useRef(null);
  const timeout = useRef(null);

  useEffect(
    () => {
      const updateScroll = () => {
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

          if (
            newDirection !== wrapper.current.direction &&
            !wrapper.current.blocked
          ) {
            setDirection(newDirection);

            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
              setBlocked(false);
            }, timeDebounce);

            setBlocked(true);
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

  return direction;
}

export default useScrollDirection;
