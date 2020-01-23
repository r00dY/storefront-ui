/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Menu, { useMenu, MenuButton } from "@commerce-ui/core/Menu";

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
      <MenuButton
        button={<Button>{selectedValue || "Pick color"}</Button>}
        menu={
          <Menu
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
            {({ anchored, options }) => (
              <>
                {options.map(option => (
                  <div sx={{ mb: 1 }} key={option.color}>
                    <Color
                      {...option.itemProps}
                      color={option.color}
                      label={option.color}
                      selected={option.value === selectedValue}
                    />
                  </div>
                ))}
              </>
            )}
          </Menu>
        }
        options={colors}
        onClick={val => {
          setSelectedValue(val);
        }}
      />
    </div>
  );
};

export default {
  title: "Menu"
};
