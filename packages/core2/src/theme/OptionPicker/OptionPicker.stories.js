/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import { Button$ } from "@commerce-ui/core/Button";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import Box from "@commerce-ui/core/Box";

import {
  products,
  options as productOptions
} from "@commerce-ui/core/OptionPicker/data";

import Select from "../Select";
import SelectNative from "../SelectNative";

export const hook = () => {
  const { product, options } = useOptionPicker({
    products,
    options: productOptions,
    initialProduct: products[10]
  });

  return (
    <Box>
      <Box>Product id: {product.id}</Box>
      <br />

      <Select {...options[0].selectProps} />
      <br />

      <Select {...options[1].selectProps} />
      <br />

      <SelectNative {...options[2].selectProps} />
    </Box>
  );
};

export default {
  title: "OptionPicker"
};
