import React from "react";
import Box from "@commerce-ui/core/Box";
import IconArrowDown from "../../svg/keyboard_arrow_down.svg";

const formStyles = {
  $root: ({ focused, disabled, invalid }) => ({
    height: "48px",
    border: "1px solid",
    borderColor: invalid ? "negative" : focused ? "main" : "neutral",
    bg: disabled ? "neutral100" : "transparent",
    borderRadius: "4px"
  }),
  $control: ({ empty }) => ({
    font: "body2",
    pt: empty ? 0 : "14px",
    pr: "10px",
    pl: "10px",
    transition: "padding .2s ease-out",
    color: empty ? "neutral900" : "main"
  }),
  $leftEnhancersContainer: {
    $gutter: "8px",
    pl: "16px"
  },
  $rightEnhancersContainer: {
    $gutter: "8px",
    pr: "16px"
  },
  $arrow: ({ empty }) => ({
    pr: "10px",
    color: empty ? "neutral900" : "main",
    lineHeight: 1,
    svg: {
      display: "block"
    },
    __children: <IconArrowDown />
  }),
  $label: ({ empty, invalid }) => ({
    top: "50%",
    left: "10px",
    transform: empty ? "translateY(-12px)" : "translateY(-15px)",
    opacity: empty ? 0 : 1,
    transition: "all .2s ease-out",
    font: "xxs_caps",
    color: invalid ? "negative" : "neutral900"
  }),
  $labelInside: true
};

export default formStyles;
