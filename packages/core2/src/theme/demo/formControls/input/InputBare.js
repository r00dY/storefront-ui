import Input$ from "@commerce-ui/core2/Input";
import { createComponent } from "@commerce-ui/core2";

import React from "react";

const InputBare = createComponent(Input$, {
  $root: ({ focused, disabled, invalid }) => ({
    height: "48px",
    bg: disabled ? "neutral100" : "transparent"
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

export default InputBare;
