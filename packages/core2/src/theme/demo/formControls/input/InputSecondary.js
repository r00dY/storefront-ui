import Input$ from "@commerce-ui/core2/Input";
import { createComponent } from "@commerce-ui/core2";

import React from "react";

const InputSecondary = createComponent(Input$, {
  $root: ({ focused, disabled, invalid }) => ({
    height: "42px",
    border: "1px solid",
    borderColor: invalid ? "negative" : focused ? "main" : "neutral",
    bg: disabled ? "neutral100" : "transparent",
    borderRadius: "4px"
  }),
  $control: ({ empty }) => ({
    font: "body2",
    pr: "10px",
    pl: "10px",
    color: empty ? "neutral900" : "main"
  }),
  $leftEnhancersContainer: {
    $gutter: "8px",
    pl: 10
  },
  $rightEnhancersContainer: {
    $gutter: "8px",
    pr: 10
  }
});

export default InputSecondary;
