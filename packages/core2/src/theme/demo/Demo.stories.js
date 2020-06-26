import React from "react";

import Box from "@commerce-ui/core/Box";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import Container from "@commerce-ui/core/Container";

import {
  products,
  productsPartial,
  options as productOptions
} from "@commerce-ui/core/OptionPicker/data";

import SelectInline from "@commerce-ui/core/SelectInline";
import Grid from "@commerce-ui/core/Grid";

import Pill from "../Selectables/Pill";
import Color from "../Selectables/Color";

import SelectNative from "../SelectNative";

import Select from "@commerce-ui/core/Select2";

import Input from "./formControls/input/Input";

import ButtonSelect from "./ButtonSelect";

export const variantPicker = () => {
  const { product, options } = useOptionPicker({
    products,
    options: productOptions,
    initialProduct: products[10]
  });

  return (
    <Box sx={{ mt: "s12" }}>
      <Container>
        <Box sx={{ py: "s10" }}>{product.id}</Box>

        <Box sx={{ mb: "s7" }}>
          <Box sx={{ mb: "s5" }}>{options[0].name}</Box>
          <Grid minItemWidth={300}>
            <SelectInline selectable={<Pill />} {...options[0].selectProps} />
          </Grid>
        </Box>

        <Box sx={{ mb: "s7" }}>
          <Box sx={{ mb: "s5" }}>{options[1].name}</Box>
          <Grid minItemWidth={50} gap={"s4"}>
            <SelectInline
              selectable={({ option }) => <Color color={option.hex} />}
              {...options[1].selectProps}
            />
          </Grid>
        </Box>

        <Box sx={{ mb: "s7" }}>
          <Box sx={{ mb: "s5" }}>{options[2].name}</Box>
          <Grid minItemWidth={300}>
            <SelectInline selectable={<Pill />} {...options[2].selectProps} />
          </Grid>
        </Box>

        <Box sx={{ mb: "s7" }}>
          <Box sx={{ mb: "s5" }}>{options[2].name}</Box>
          <SelectNative {...options[2].selectProps} />
        </Box>

        <Box sx={{ mb: "s7" }}>
          <Box sx={{ mb: "s5" }}>{options[2].name}</Box>
          <Select
            {...options[2].selectProps}
            width={["100vw", null, 400]}
            anchoredTo={["window", null, "button"]}
            placement={["bottom", null, "bottomLeft"]}
            root={{
              boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
              bg: "white"
            }}
            button={({ value }) => (
              <ButtonSelect isPlaceholder={value === null}>
                {value === null ? "Select type" : value.name}
              </ButtonSelect>
            )}
            selectable={<Pill />}
            separator={<Box sx={{ height: 20 }} />}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default {
  title: "demo"
};
