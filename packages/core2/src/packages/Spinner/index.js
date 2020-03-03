/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import React from "react";

import { colorWithOpacity } from "../utils/colors";
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

const SpinnerBaseStyles = color => ({
  borderRadius: "50%",
  width: "10em",
  height: "10em",
  fontSize: "1.5px",
  position: "relative",
  textIndent: "-9999em",
  borderWidth: "2em",
  borderStyle: "solid",
  borderTopColor: "rgba(255,255,255,0.2)",
  borderRightColor: "rgba(255,255,255,0.2)",
  borderBottomColor: "rgba(255,255,255,0.2)",
  borderLeftColor: "rgb(255,255,255)",

  // borderTop: "2em solid rgba(255, 255, 255, 0.2)",
  // borderRight: "2em solid rgba(255, 255, 255, 0.2)",
  // borderBottom: "2em solid rgba(255, 255, 255, 0.2)",
  // borderLeft: "2em solid rgb(255,255,255)",

  transform: "translateZ(0)",
  ":after": {
    borderRadius: "50%",
    width: "10em",
    height: "10em"
  },
  // transform: "rotate(180deg)"
  // animationDuration: 300,
  // animationTimingFunction: "linear",
  // animationIterationCount: "infinite",
  animation: `${animation} 1.1s infinite linear`,
  overflow: "hidden"
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
    borderWidth: `${width}px`,
    borderStyle: "solid",
    borderTopColor: color2,
    borderRightColor: color2,
    borderBottomColor: color2,
    borderLeftColor: color,

    transform: "translateZ(0)",
    // ":after": {
    //     borderRadius: "50%",
    //     width: "10em",
    //     height: "10em"
    // },

    animation: `${animation} 1s infinite linear`,
    overflow: "hidden"
  };

  return (
    <Box sx={[{ position: "relative" }, sx]}>
      <Box sx={{ pb: "100%" }}>
        <Box sx={styles}>Spin...</Box>
      </Box>
    </Box>
  );
};

export default Spinner;
