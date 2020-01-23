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

import Color from "../Selectables/Color";
import ItemRow from "../Selectables/ItemRow";

import product from "../data";

export const hook = () => {
  const { options, productVariant } = useOptionPicker({ product });

  return (
    <div>
      <div>Variant price: {productVariant.price}$</div>

      {options.map(option => {
        if (option.name === "Color") {
          return (
            <HorizontalStack key={option.name} sx={{ $gutter: "10px" }}>
              {option.values.map(value => (
                <Color
                  key={value.name}
                  color={value.color}
                  {...value.selectableRadioProps}
                />
              ))}
            </HorizontalStack>
          );
        }

        if (option.name === "Size") {
          return (
            <MenuButton
              key={option.name}
              {...option.menuButtonProps}
              button={<Button>Pick size</Button>}
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
                        <ItemRow
                          key={option.value}
                          label={option.value}
                          {...option.itemProps}
                        />
                      ))}
                    </>
                  )}
                </Menu>
              }
            />
          );
        }

        return (
          <div key={option.name}>
            <label {...option.labelProps} sx={{ display: "block" }}>
              {option.name}
            </label>
            <SelectNative {...option.selectProps} />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: "OptionPicker"
};
