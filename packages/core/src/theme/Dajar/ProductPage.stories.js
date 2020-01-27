/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import { Button$ } from "@commerce-ui/core/Button2";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import { MenuButton } from "@commerce-ui/core/Menu";

import ButtonSelect from "./Button/ButtonSelect";

import Menu from "../Select";

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
            <MenuButton
              key={option.name}
              {...option.menuButtonProps}
              button={
                <ButtonSelect>
                  {productVariant.selectedOptions.Color}
                </ButtonSelect>
              }
              menu={
                <Menu title={option.name}>
                  {({ anchored, options }) =>
                    options.map(option => (
                      <ColorRow
                        color={option.color}
                        key={option.value}
                        label={option.value}
                        {...option.itemProps}
                      />
                    ))
                  }
                </Menu>
              }
            />
          );

          items.push(<br />);
          items.push(<br />);

          items.push(
            <MenuButton
              key={option.name}
              {...option.menuButtonProps}
              button={
                <ButtonSelect>
                  {productVariant.selectedOptions.Color}
                </ButtonSelect>
              }
              menu={
                <Menu title={option.name}>
                  {({ anchored, options }) => (
                    <div
                      sx={{
                        display: "grid",
                        position: "relative",
                        padding: 3,
                        gridTemplateColumns: "repeat(auto-fill, 50px)",
                        gridGap: "10px"
                      }}
                    >
                      {options.map(option => (
                        <ColorSquare
                          color={option.color}
                          key={option.value}
                          label={option.value}
                          {...option.itemProps}
                        />
                      ))}
                    </div>
                  )}
                </Menu>
              }
            />
          );

          items.push(<br />);
          items.push(<br />);

          items.push(
            <MenuButton
              key={option.name}
              {...option.menuButtonProps}
              button={
                <ButtonSelect>
                  {productVariant.selectedOptions.Color}
                </ButtonSelect>
              }
              menu={
                <Menu
                  title={option.name}
                  config={{
                    anchored: false,
                    mode: "slide-from-right",
                    width: "50vw"
                  }}
                >
                  {({ anchored, options }) => (
                    <div
                      sx={{
                        display: "grid",
                        position: "relative",
                        padding: 3,
                        gridTemplateColumns: "1fr 1fr",
                        gridGap: "10px"
                      }}
                    >
                      {options.map(option => (
                        <ColorBigTile
                          color={option.color}
                          key={option.value}
                          label={option.value}
                          {...option.itemProps}
                        />
                      ))}
                    </div>
                  )}
                </Menu>
              }
            />
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
            <MenuButton
              key={option.name}
              {...option.menuButtonProps}
              button={
                <ButtonSelect>
                  {productVariant.selectedOptions.Size}
                </ButtonSelect>
              }
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

      {/*<div sx={{*/}
      {/*border: "1px solid black;",*/}
      {/*width: "200px",*/}
      {/*height: "200px",*/}
      {/*":focus-visible": {*/}
      {/*border: "2px solid orange"*/}
      {/*}*/}

      {/*}} tabIndex={0}>*/}

      {/*</div>*/}
    </div>
  );
};

export default {
  title: "Dajar.ProductPage"
};
