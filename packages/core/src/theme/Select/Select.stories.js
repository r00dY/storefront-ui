/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Select, { useSelect, SelectButton } from "@commerce-ui/core/Select2";

import Button from "../Button/Button";
import Color from "../Selectables/Color";

const colors = [
  { color: "red", value: "red" },
  { color: "blue", value: "blue" },
  { color: "yellow", value: "yellow" },
  { color: "green", value: "green" },
  { color: "magenta", value: "magenta" },
  { color: "purple", value: "purple" }
];

export const unstyled = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div>
      <SelectButton
        button={<Button>{selectedValue || "Pick color"}</Button>}
        menu={
          <Select
            config={{
              xs: {
                mode: "slide-from-bottom",
                height: "auto"
              },
              md: {
                anchored: true
              }
            }}
          >
            {({ anchored, options }) =>
              options.map(option => (
                <Color color={option.color} label={option.color} />
              ))
            }
          </Select>
        }
        options={colors}
        value={selectedValue}
        onChange={val => {
          setSelectedValue(val);
        }}
      />

      <Button>Test</Button>
      <Button>Test2</Button>
    </div>
  );
};

export default {
  title: "Select"
};
