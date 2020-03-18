/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import { Button$ } from "@commerce-ui/core/Button";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import Box from "@commerce-ui/core/Box";

import {
  products,
  productsPartial,
  options as productOptions
} from "@commerce-ui/core/OptionPicker/data";

import Select from "../Select";
import SelectNative from "../SelectNative";
import ItemRow from "../Selectables/ItemRow";
import SelectInline from "@commerce-ui/core/SelectInline";
import Grid from "@commerce-ui/core/Grid";

export const allOptionsAvailable = () => {
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

      <SelectNative {...options[1].selectProps} />
      <br />

      <Grid minItemWidth={300}>
        <SelectInline {...options[2].selectProps}>
          <ItemRow />
        </SelectInline>
      </Grid>
    </Box>
  );
};

export const partialOptionsHidden = () => {
  const { product, options } = useOptionPicker({
    products: productsPartial,
    options: productOptions,
    initialProduct: products[0]
  });

  return (
    <Box>
      <Box>Product id: {product.id}</Box>
      <br />

      <Select {...options[0].selectProps} />
      <br />

      <SelectNative {...options[1].selectProps} />
      <br />

      <Grid minItemWidth={300}>
        <SelectInline {...options[2].selectProps}>
          <ItemRow />
        </SelectInline>
      </Grid>
    </Box>
  );
};

export const partialOptionsDisabled = () => {
  const { product, options } = useOptionPicker({
    products: productsPartial,
    options: productOptions.map(o => ({
      ...o,
      missingProductStrategy: "disabled"
    })),
    initialProduct: products[0]
  });

  return (
    <Box>
      <Box>Product id: {product.id}</Box>
      <br />

      <Select {...options[0].selectProps} />
      <br />

      <SelectNative {...options[1].selectProps} />
      <br />

      <Grid minItemWidth={300}>
        <SelectInline {...options[2].selectProps}>
          <ItemRow />
        </SelectInline>
      </Grid>
    </Box>
  );
};

export const partialOptionsAlternative = () => {
  const { product, options } = useOptionPicker({
    products: productsPartial,
    options: productOptions.map(o => ({
      ...o,
      missingProductStrategy: "alternative"
    })),
    initialProduct: products[0]
  });

  return (
    <Box>
      <Box>Product id: {product.id}</Box>
      <br />

      <Select {...options[0].selectProps} />
      <br />

      <SelectNative {...options[1].selectProps} />
      <br />

      <Grid minItemWidth={300}>
        <SelectInline {...options[2].selectProps}>
          <ItemRow />
        </SelectInline>
      </Grid>
    </Box>
  );
};

export const partialOptionsMixedStrategies = () => {
  const { product, options } = useOptionPicker({
    products: productsPartial,
    options: [
      {
        ...productOptions[0],
        missingProductStrategy: "hidden"
      },
      {
        ...productOptions[1],
        missingProductStrategy: "alternative"
      },
      {
        ...productOptions[2],
        missingProductStrategy: "disabled"
      }
    ],
    initialProduct: products[0]
  });

  return (
    <Box>
      <Box>Product id: {product.id}</Box>
      <br />

      <Select {...options[0].selectProps} />
      <br />

      <SelectNative {...options[1].selectProps} />
      <br />

      <Grid minItemWidth={300}>
        <SelectInline {...options[2].selectProps}>
          <ItemRow />
        </SelectInline>
      </Grid>
    </Box>
  );
};

export default {
  title: "OptionPicker"
};
