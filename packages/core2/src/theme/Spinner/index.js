// .loader,
// .loader:after {
//     border-radius: 50%;
//     width: 10em;
//     height: 10em;
// }
// .loader {
//     margin: 60px auto;
//     font-size: 10px;
//     position: relative;
//     text-indent: -9999em;
//     border-top: 1.1em solid rgba(255, 255, 255, 0.2);
//     border-right: 1.1em solid rgba(255, 255, 255, 0.2);
//     border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
//     border-left: 1.1em solid #ffffff;
//     -webkit-transform: translateZ(0);
//     -ms-transform: translateZ(0);
//     transform: translateZ(0);
//     -webkit-animation: load8 1.1s infinite linear;
//     animation: load8 1.1s infinite linear;
// }
// @-webkit-keyframes load8 {
//     0% {
//     -webkit-transform: rotate(0deg);
//     transform: rotate(0deg);
// }
//     100% {
//     -webkit-transform: rotate(360deg);
//     transform: rotate(360deg);
// }
// }
// @keyframes load8 {
//     0% {
//     -webkit-transform: rotate(0deg);
//     transform: rotate(0deg);
// }
//     100% {
//     -webkit-transform: rotate(360deg);
//     transform: rotate(360deg);
// }
// }

/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import React from "react";

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
  }
  // animationDuration: 300,
  // animationTimingFunction: "linear",
  // animationIterationCount: "infinite",
  // animationName: {
  //     to: {
  //         transform: "rotate(360deg)"
  //     },
  //     from: {
  //         transform: "rotate(0deg)"
  //     }
  // }
});

const Spinner = ({ sx, light = true }) => (
  <div sx={[SpinnerBaseStyles(light), sx]}>Spin...</div>
);

export default Spinner;
