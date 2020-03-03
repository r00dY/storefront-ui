/** @jsx jsx */
import Counter$ from "@commerce-ui/core/Counter";
import { jsx, splitSx } from "@commerce-ui/core";
import { Button$ } from "@commerce-ui/core/Button";
import ButtonMinimal from "../Button/ButtonMinimal";

import { createComponent } from "@commerce-ui/core";

const Counter = createComponent(Counter$, {
  $root: ({ focused }) => ({
    border: "1px solid black",
    borderColor: focused ? "black" : "mono300",
    padding: "2px"
  }),
  $buttonIncrease: {
    __type: ButtonMinimal,
    width: "44px",
    height: "44px"
  },
  $buttonDecrease: {
    __type: ButtonMinimal,
    width: "42px",
    height: "42px"
  },
  $input: {
    font: "body",
    width: "42px"
  },
  $select: {
    width: "42px",
    $control: {
      font: "body",
      textAlignLast: "center"
    },
    $arrow: {
      display: "none"
    }
  }
});

export default Counter;
