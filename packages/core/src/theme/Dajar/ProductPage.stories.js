/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import ButtonMinimal from "../Button/ButtonMinimal";
import Button from "../Button/Button";
import { Button$ } from "@commerce-ui/core/Button2";
import InputRaw$ from "@commerce-ui/core/InputRaw";
import Input from "../Input";

import HorizontalStack from "@commerce-ui/core/HorizontalStack";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import Menu, { MenuButton } from "@commerce-ui/core/Menu";

import SelectNative from "../SelectNative";

import ColorSquare from "./Selectables/ColorSquare";
import ColorRow from "./Selectables/ColorRow";
import ItemRow from "./Selectables/ItemRow";

import Box from "@commerce-ui/core/Box";

import product from "../data";

export const standard = () => {
  const { options, productVariant } = useOptionPicker({ product });

  return (
    <div>
      <div>Variant price: {productVariant.price}$</div>

      {options.map(option => {
        let items = [
          <Box
            sx={{
              font: "label",
              paddingTop: 3,
              paddingBottom: 2
            }}
          >
            <label {...options.labelProps} sx={{ color: "mono700" }}>
              {option.name}
            </label>{" "}
            <span sx={{ color: "navy" }}>
              {productVariant.selectedOptions[option.name]}
            </span>
          </Box>
        ];

        if (option.name === "Color") {
          items.push(
            <HorizontalStack key={option.name} sx={{ $gutter: "10px" }}>
              {option.values.map(value => (
                <ColorSquare
                  key={value.name}
                  color={value.color}
                  {...value.selectableRadioProps}
                />
              ))}
            </HorizontalStack>
          );
        } else if (option.name === "Size") {
          items.push(
            <MenuButton
              key={option.name}
              {...option.menuButtonProps}
              button={<Button>{productVariant.selectedOptions.Size}</Button>}
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
                    <Box
                      sx={{
                        width: anchored ? "300px" : "auto",
                        boxShadow: anchored
                          ? "0 4px 16px hsla(0, 0%, 0%, 0.16);"
                          : "none",
                        bg: "white"
                      }}
                    >
                      {options.map(option => (
                        <ItemRow
                          key={option.value}
                          label={option.value}
                          {...option.itemProps}
                        />
                      ))}
                    </Box>
                  )}
                </Menu>
              }
            />
          );
        } else {
          items.push(
            <div key={option.name}>
              <SelectNative {...option.selectProps} />
            </div>
          );
        }

        return items;
      })}
    </div>
  );
};

export default {
  title: "Dajar.ProductPage"
};
