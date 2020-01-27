/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import { Button$ } from "@commerce-ui/core/Button2";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import { Select$ } from "@commerce-ui/core/Select2";

import ButtonSelect from "./Button/ButtonSelect";

import Select from "../Select";

import SelectNative from "./SelectNative";

import ColorSquare from "./Selectables/ColorSquare";
import ColorBigTile from "./Selectables/ColorBigTile";
import ColorRow from "./Selectables/ColorRow";
import ItemRow from "./Selectables/ItemRow";
import Pill from "./Selectables/Pill";

import Box from "@commerce-ui/core/Box";

import product from "../data";

export const standard = () => {
  const { options, productVariant } = useOptionPicker({ product });

  return (
    <div sx={{ maxWidth: "476px" }}>
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
            {option.name === "Color" && (
              <span sx={{ color: "navy" }}>
                {productVariant.selectedOptions[option.name]}
              </span>
            )}
          </Box>
        ];

        if (option.name === "Color") {
          items.push(
            <div
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
            </div>
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
                width: "50vw"
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
            <div
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                gridGap: "10px"
              }}
            >
              {option.values.map(value => (
                <Pill key={value.name} {...value.selectableRadioProps} />
              ))}
            </div>
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
