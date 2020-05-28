import React, { useState, useEffect } from "react";
import Box from "../Box";
import { responsiveValueCurrent } from "../index";
import useWindowSize from "../useWindowSize";

function Display({ when, children }) {
  const [mounted, setMounted] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentValue = responsiveValueCurrent(when);

  const shouldBeDisplayed =
    !mounted || (typeof window === "object" && currentValue);

  let sx = {};

  if (!mounted) {
    // on SSR and first render we use display: none to allow no blinking and good SEO
    sx = {
      display: when.map(t =>
        t === null ? null : t === true ? "block" : "none"
      )
    };
  }

  // If mounted, then we can simply not render not displayed items to decrease rerenders overload performance

  if (!shouldBeDisplayed) {
    return null;
  }

  return <Box sx={sx}>{children}</Box>;
}

export default Display;
