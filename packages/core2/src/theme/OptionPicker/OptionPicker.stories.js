/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Button from "../Button/Button";
import { Button$ } from "@commerce-ui/core/Button";

import HorizontalStack from "@commerce-ui/core/HorizontalStack";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import SelectNative from "../SelectNative";

import Color from "../Selectables/Color";
import ItemRow from "../Selectables/ItemRow";

import Box from "@commerce-ui/core/Box";

import { products, options } from "@commerce-ui/core/OptionPicker/data";
import formStyles from "../form-styles";

import Select2 from "../Select/Select2";

const values = [{ value: "one" }, { value: "two" }];

export const hook = () => {
  const { product } = useOptionPicker({
    products,
    options,
    initialProduct: products[10]
  });

  return (
    <Box>
      <Box>Product id: {product.id}</Box>

      <Select2 options={values} initialValue={values[1]} />

      {/*{options.map(option => {*/}
      {/*if (option.name === "Color") {*/}
      {/*return (*/}
      {/*<HorizontalStack key={option.name} sx={{ $gutter: "10px" }}>*/}
      {/*{option.values.map(value => (*/}
      {/*<Color*/}
      {/*key={value.name}*/}
      {/*color={value.color}*/}
      {/*{...value.selectableRadioProps}*/}
      {/*/>*/}
      {/*))}*/}
      {/*</HorizontalStack>*/}
      {/*);*/}
      {/*}*/}

      {/*if (option.name === "Size") {*/}
      {/*return (*/}
      {/*<Select$*/}
      {/*key={option.name}*/}
      {/*button={<Button>{productVariant.selectedOptions.Size}</Button>}*/}
      {/*config={{*/}
      {/*xs: {*/}
      {/*mode: "slide-from-bottom",*/}
      {/*height: "auto"*/}
      {/*},*/}
      {/*md: {*/}
      {/*anchored: true*/}
      {/*}*/}
      {/*}}*/}
      {/*{...option.select2Props}*/}
      {/*>*/}
      {/*{({ options }) =>*/}
      {/*options.map(option => (*/}
      {/*<ItemRow key={option.value} label={option.value} />*/}
      {/*))*/}
      {/*}*/}
      {/*</Select$>*/}
      {/*);*/}
      {/*}*/}

      {/*return (*/}
      {/*<Box key={option.name}>*/}
      {/*<label {...option.labelProps} sx={{ display: "block" }}>*/}
      {/*{option.name}*/}
      {/*</label>*/}
      {/*<SelectNative {...option.selectProps} />*/}
      {/*</Box>*/}
      {/*);*/}
      {/*})}*/}
    </Box>
  );
};

export default {
  title: "OptionPicker"
};
