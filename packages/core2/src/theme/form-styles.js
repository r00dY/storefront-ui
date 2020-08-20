// const formStyles = {
//   $root: ({ focused, disabled, invalid }) => ({
//     height: "48px",
//     border: "2px solid",
//     borderColor: invalid ? "red" : focused ? "mono800" : "transparent",
//     borderRadius: "8px",
//     bg: disabled ? "lightgrey" : "#f7f7f7"
//   }),
//   $input: ({ empty }) => ({
//     pr: "10px",
//     pl: "10px",
//     font: "body2",
//     pt: empty ? 0 : "16px",
//     transition: "padding .2s ease-out"
//   }),
//   $leftEnhancersContainer: {
//     $gutter: "8px",
//     pl: "16px",
//     font: "body2"
//   },
//   $rightEnhancersContainer: {
//     $gutter: "8px",
//     pr: "16px",
//     font: "body2"
//   },
//   $label: ({ empty }) => ({
//     top: "50%",
//     transform: empty ? "translateY(-12px)" : "translateY(-18px)",
//     opacity: empty ? 0 : 1,
//     transition: "all .2s ease-out",
//     left: "10px",
//     font: "body2",
//     fontSize: "13px",
//     color: "mono700"
//   }),
//   $labelInside: true
// };

import React from "react";
import Box from "@commerce-ui/core/Box";

const formStyles = {
  $root: ({ focused, disabled, invalid }) => ({
    height: "48px",
    border: "2px solid",
    borderColor: invalid ? "red" : focused ? "mono800" : "transparent",
    borderRadius: "8px",
    bg: disabled ? "lightgrey" : "#f7f7f7"
  }),
  $control: ({ empty }) => ({
    font: "body2",
    pt: empty ? 0 : "16px",
    pr: "10px",
    pl: "10px",
    transition: "padding .2s ease-out"
  }),
  $leftEnhancersContainer: {
    $gutter: "8px",
    pl: "16px",
    font: "body2"
  },
  $rightEnhancersContainer: {
    $gutter: "16px",
    pr: "16px",
    font: "body2"
  },
  $arrow: {
    pr: "10px"
  },
  $label: ({ empty }) => ({
    top: "50%",
    left: "10px",
    transform: empty ? "translateY(-12px)" : "translateY(-18px)",
    opacity: empty ? 0 : 1,
    transition: "all .2s ease-out",
    font: "body2",
    fontSize: "13px",
    color: "mono700"
  }),
  $labelInside: true,
  $clearElement: <Box sx={{ width: 16, height: 16, bg: "main" }} />
};

export default formStyles;
