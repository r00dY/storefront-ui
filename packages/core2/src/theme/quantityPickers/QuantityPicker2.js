import React from "react";
import QuantityPicker$ from "@commerce-ui/core/QuantityPicker";
import { Button$ } from "@commerce-ui/core/Button";
import Box from "@commerce-ui/core/Box";
import IconChevronDown from "../svg/keyboard_arrow_down.svg";

import { createComponent } from "@commerce-ui/core";

const QuantityPicker = createComponent(QuantityPicker$, {
  $root: ({ focused }) => ({
    border: "1px solid black",
    borderColor: focused ? "black" : "mono300",
    height: 28,
    borderRadius: "14px"
  }),
  $input: {
    font: "body",
    width: "54px",
    lineHeight: 1
  },
  $select: {
    width: "54px",
    $control: {
      font: "body",
      pl: "12px",
      pr: "12px"
    },
    $arrow: {
      __children: (
        <Box
          sx={{
            width: 16,
            height: 16,
            mr: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            svg: { lineHeight: 1 }
          }}
        >
          <IconChevronDown />
        </Box>
      )
    }
  },
  $buttonIncrease: null,
  $buttonDecrease: null
});

export default QuantityPicker;
