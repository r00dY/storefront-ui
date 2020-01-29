/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import { Button$ } from "@commerce-ui/core/Button2";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import { Select$ } from "@commerce-ui/core/Select2";

import ButtonSelect from "./Button/ButtonSelect";
import Button from "./Button/Button";

import IconAddToCart from "../svg/add_shopping_cart.svg";

import Select from "../Select";

import SelectNative from "./SelectNative/SelectNative";

import ColorSquare from "./Selectables/ColorSquare";
import ColorBigTile from "./Selectables/ColorBigTile";
import ColorRow from "./Selectables/ColorRow";
import ItemRow from "./Selectables/ItemRow";
import Pill from "./Selectables/Pill";

import Box from "@commerce-ui/core/Box";

import { useCounter } from "@commerce-ui/core/Counter";
import Counter from "./Counter";

import product from "../data";
import ColorRowWithPrice from "./Selectables/ColorRowWithPrice";

export const standard = () => {
  const { options, productVariant } = useOptionPicker({ product });
  const counter = useCounter();

  return (
    <Box sx={{ maxWidth: "320px" }}>
      <Box>Variant price: {productVariant.price}$</Box>

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
            </label>{" "}
            {option.name === "Color" && (
              <span sx={{ color: "navy" }}>
                {productVariant.selectedOptions[option.name]}
              </span>
            )}
          </Box>
        ];

        if (option.name === "Color") {
          items.push(
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, 50px)",
                gridGap: "10px"
              }}
            >
              {option.values.map(value => (
                <ColorSquare
                  key={value.name}
                  color={value.color}
                  {...value.selectableRadioProps}
                />
              ))}
            </Box>
          );

          items.push(<br />);

          items.push(
            <Select
              key={option.name}
              {...option.select2Props}
              button={
                <ButtonSelect>
                  {productVariant.selectedOptions.Color}
                </ButtonSelect>
              }
            >
              {({ options }) =>
                options.map(option => (
                  <ColorRow
                    color={option.color}
                    key={option.value}
                    label={option.value}
                    {...option.itemProps}
                  />
                ))
              }
            </Select>
          );

          items.push(<br />);
          items.push(<br />);

          items.push(
            <Select
              key={option.name}
              {...option.select2Props}
              button={
                <ButtonSelect>
                  {productVariant.selectedOptions.Color}
                </ButtonSelect>
              }
            >
              {({ options }) =>
                options.map(value => (
                  <ColorRowWithPrice
                    color={value.color}
                    key={value.value}
                    label={value.value}
                    productVariant={value.productVariant}
                    {...option.itemProps}
                  />
                ))
              }
            </Select>
          );

          items.push(<br />);
          items.push(<br />);

          items.push(
            <Select
              key={option.name}
              {...option.select2Props}
              button={
                <ButtonSelect>
                  {productVariant.selectedOptions.Color}
                </ButtonSelect>
              }
              width={"264px"}
              sx={{
                $root: {
                  display: "grid",
                  position: "relative",
                  padding: 3,
                  gridTemplateColumns: "repeat(auto-fill, 50px)",
                  gridGap: "10px"
                }
              }}
            >
              {({ options }) =>
                options.map(option => (
                  <ColorSquare
                    color={option.color}
                    key={option.value}
                    label={option.value}
                  />
                ))
              }
            </Select>
          );

          items.push(<br />);
          items.push(<br />);

          items.push(
            <Select
              key={option.name}
              {...option.select2Props}
              button={
                <ButtonSelect>
                  {productVariant.selectedOptions.Color}
                </ButtonSelect>
              }
              config={{
                anchored: false,
                mode: "slide-from-right",
                width: rs({
                  xs: "90vw",
                  lg: "40vw"
                })
              }}
              sx={{
                $root: {
                  display: "grid",
                  position: "relative",
                  padding: 3,
                  gridTemplateColumns: "1fr 1fr",
                  gridGap: "10px"
                }
              }}
            >
              {({ options }) =>
                options.map(option => (
                  <ColorBigTile
                    color={option.color}
                    key={option.value}
                    label={option.value}
                  />
                ))
              }
            </Select>
          );
        } else if (option.name === "Size") {
          items.push(
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                gridGap: "10px"
              }}
            >
              {option.values.map(value => (
                <Pill key={value.name} {...value.selectableRadioProps} />
              ))}
            </Box>
          );

          items.push(<br />);

          items.push(
            <Select
              key={option.name}
              {...option.select2Props}
              button={
                <ButtonSelect>
                  {productVariant.selectedOptions.Size}
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

          items.push(<br />);
          items.push(<br />);

          items.push(
            <Select
              key={option.name}
              {...option.select2Props}
              button={
                <ButtonSelect>
                  {productVariant.selectedOptions.Size}
                </ButtonSelect>
              }
              sx={{
                $root: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                  gridGap: "10px",
                  p: 2
                }
              }}
            >
              {({ options }) =>
                options.map(option => (
                  <Pill key={option.value} label={option.value} />
                ))
              }
            </Select>
          );
        } else {
          items.push(
            <Box key={option.name}>
              <SelectNative {...option.selectProps} />
            </Box>
          );
        }

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
          startEnhancer={<IconAddToCart />}
          sx={{ width: "100%", flexGrow: 1 }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default {
  title: "Dajar.ProductPage"
};
