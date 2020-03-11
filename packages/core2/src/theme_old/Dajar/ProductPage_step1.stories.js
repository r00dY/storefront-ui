/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import { Button$ } from "@commerce-ui/core/Button";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import { Select$ } from "@commerce-ui/core/Select";

import ButtonSelect from "./Button/ButtonSelect";
import Button from "./Button/Button";

import IconAddToCart from "../../theme/svg/add_shopping_cart.svg";

import Select from "../../theme/Select";

import SelectNative from "./SelectNative/SelectNative";

import ColorSquare from "./Selectables/ColorSquare";
import ColorBigTile from "./Selectables/ColorBigTile";
import ColorRow from "./Selectables/ColorRow";
import ItemRow from "./Selectables/ItemRow";
import Pill from "./Selectables/Pill";

import Box from "@commerce-ui/core/Box";

import { useCounter } from "@commerce-ui/core/Counter";
import Counter from "./Counter";

import product from "../../theme/data";

import useAddToCart from "@commerce-ui/core/useAddToCart";

export const standard = () => {
  const { options, productVariant } = useOptionPicker({ product });
  const counter = useCounter();
  const addToCart = useAddToCart({
    productVariant,
    quantity: counter.amount,
    onSuccess: () => {
      counter.setAmount(1);
    }
  });

  return (
    <Box sx={{ maxWidth: "320px" }}>
      <Box sx={{ font: "heading" }}>Variant price: {productVariant.price}$</Box>

      {options.map(option => {
        let items = [
          <Box
            sx={{
              font: "label",
              paddingTop: 3,
              paddingBottom: 2
            }}
          >
            <label {...option.labelProps} sx={{ color: "mono700" }}>
              {option.name}
            </label>
          </Box>
        ];

        items.push(
          <Select
            key={option.name}
            {...option.select2Props}
            button={
              <ButtonSelect>
                {productVariant.selectedOptions[option.name]}
              </ButtonSelect>
            }
          >
            {({ options }) =>
              options.map(option => (
                <ItemRow key={option.value} label={option.value} />
              ))
            }
          </Select>
        );

        return items;
      })}

      <br />
      <br />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <Counter
          {...counter}
          sx={{ flex: "0 0 auto", height: "50px", mr: "10px" }}
        />
        <Button
          {...addToCart.buttonProps}
          startEnhancer={<IconAddToCart />}
          sx={{ width: "100%", flexGrow: 1 }}
        >
          Add to cart
        </Button>
      </Box>
      <br />
      {/*<Box {...addToCart.notificationProps} sx={{font: "body", color: "success"}}>Added to cart!</Box>*/}
    </Box>
  );
};

export default {
  title: "Dajar.ProductPage_step1"
};
