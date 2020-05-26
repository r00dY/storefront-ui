import React from "react";
import Box from "../Box";

import { keyframes } from "@emotion/core";

const animation = keyframes({
  from: {
    transform: "rotate(360deg)"
  },
  to: {
    transform: "rotate(0deg)"
  }
});

const Spinner = ({ sx = {}, light = true }) => {
  const color = sx.$color || "inherit";
  const color2 = sx.$color2 || "lightgrey";
  const width = sx.$width || 2;

  const styles = {
    position: "absolute",
    width: "100%",
    height: "100%",

    borderRadius: "50%",
    textIndent: "-9999em",
    borderWidth: width,
    borderStyle: "solid",
    borderTopColor: color2,
    borderRightColor: color2,
    borderBottomColor: color2,
    borderLeftColor: color,

    transform: "translateZ(0)",

    animation: `${animation} 1s infinite linear`,
    overflow: "hidden"
  };

  return (
    <Box sx={[{ position: "relative", width: "24px" }, sx]}>
      <Box sx={{ pb: "100%" }}>
        <Box sx={styles}>Spin...</Box>
      </Box>
    </Box>
  );
};

export default Spinner;
