/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import {
  Select$,
  SelectInline$,
  useSelect,
  Select2
} from "@commerce-ui/core/Select";

import Button from "../Button/Button";
import Color from "../Selectables/Color";
import Box from "@commerce-ui/core/Box";

import Layer from "@commerce-ui/core/Layer";

const colors = [
  { color: "red", value: "red" },
  { color: "blue", value: "blue" },
  { color: "yellow", value: "yellow" },
  { color: "green", value: "green" },
  { color: "magenta", value: "magenta" },
  { color: "purple", value: "purple" }
];

import formStyles from "../form-styles";

export const newSelect = () => {
  const [value, setValue] = useState(null); // useState(colors[2]);

  return (
    <div>
      <Button>Test</Button>
      <Button>Test2</Button>

      <Select2
        sx={{
          $layer: <Layer anchoredTo={["window", null, "trigger"]} />,
          // $button: <Button />,
          $selectable: <Color />,
          $wrapper: <Box sx={{ p: 6 }} />,
          $separator: <Box sx={{ height: 4 }} />,
          ...formStyles,
          width: "400px"
        }}
        label={"Test select"}
        options={colors}
        value={value}
        onChange={value => setValue(value)}
      />

      <Button>Test</Button>
      <Button>Test2</Button>

      <Select2
        sx={{
          $layer: <Layer anchoredTo={["window", null, "trigger"]} />,
          // $button: <Button />,
          $selectable: <Color />,
          $wrapper: <Box sx={{ p: 6 }} />,
          $separator: <Box sx={{ height: 4 }} />,
          $value: ({ selectedItem, placeholder }) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              {selectedItem && (
                <Box
                  sx={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "7px",
                    mr: "4px",
                    bg: selectedItem.color
                  }}
                />
              )}
              {selectedItem ? selectedItem.value : placeholder}
            </Box>
          ),
          ...formStyles,
          width: "400px"
        }}
        label={"Test select"}
        options={colors}
        value={value}
        onChange={value => setValue(value)}
      />
    </div>
  );
};

export const unstyled = () => {
  const [value, setValue] = useState(colors[2]);

  return (
    <div>
      <Button>Test</Button>
      <Button>Test2</Button>

      <Select$
        config={{
          xs: {
            mode: "slide-from-bottom",
            height: "auto"
          },
          md: {
            anchored: true
          }
        }}
        button={({ selectedItem }) => (
          <Button>{selectedItem ? selectedItem.value : "Pick color"}</Button>
        )}
        options={colors}
        value={value}
        onChange={value => setValue(value)}
      >
        {({ options }) =>
          options.map(option => (
            <Color color={option.color} label={option.color} />
          ))
        }
      </Select$>

      <Button>Test</Button>
      <Button>Test2</Button>
    </div>
  );
};

export const inline = () => {
  const { selectProps } = useSelect({ options: colors });

  return (
    <div>
      <Button>Test</Button>
      <Button>Test2</Button>

      <br />
      <br />

      <SelectInline$ {...selectProps}>
        {({ options }) =>
          options.map(option => (
            <Color color={option.color} label={option.color} />
          ))
        }
      </SelectInline$>

      <br />
      <br />

      <Button>Test</Button>
      <Button>Test2</Button>
    </div>
  );
};

export default {
  title: "Select"
};
