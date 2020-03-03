/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import React from "react";

import { keyframes } from "@emotion/core";

const animation = keyframes({
  from: {
    transform: "rotate(360deg)"
  },
  to: {
    transform: "rotate(0deg)"
  }
});

const SpinnerBaseStyles = light => ({
  borderRadius: "50%",
  width: "10em",
  height: "10em",
  fontSize: "1.5px",
  position: "relative",
  textIndent: "-9999em",
  borderTop: "2em solid rgba(255, 255, 255, 0.2)",
  borderRight: "2em solid rgba(255, 255, 255, 0.2)",
  borderBottom: "2em solid rgba(255, 255, 255, 0.2)",
  borderLeft: "2em solid rgb(255,255,255)",
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

const Spinner = ({ sx, light = true }) => (
  <div sx={[SpinnerBaseStyles(light), sx]}>Spin...</div>
);

export default Spinner;
