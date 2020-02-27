/** @jsx jsx */
import React from "react";
import { jsx, rs } from "@commerce-ui/core";
import { Select2 } from "@commerce-ui/core/Select";

import ItemRow from "../Selectables/ItemRow";
import Box from "@commerce-ui/core/Box";

import Layer from "@commerce-ui/core/Layer";

import formStyles from "../form-styles";

const Select = props => (
  <Select2
    sx={{
      $layer: (
        <Layer
          anchoredTo={["window", null, "trigger"]}
          sx={{ width: ({ anchorRect }) => ["100vw", null, anchorRect.width] }}
        />
      ),
      // $button: <Button />,
      $selectable: <ItemRow />,
      $wrapper: <Box sx={{ p: 6 }} />,
      $separator: <Box sx={{ height: 1, bg: "mono200" }} />,
      ...formStyles,
      width: "400px"
    }}
    {...props}
  />
);

export default Select;
