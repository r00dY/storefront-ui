import React, { useState, useEffect } from "react";

import Box from "@commerce-ui/core/Box";
import Button from "@commerce-ui/core/Button";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import Container from "@commerce-ui/core/Container";

import SelectInline from "@commerce-ui/core/SelectInline";
import Grid from "@commerce-ui/core/Grid";

import Pill from "./selectables/Pill";
import ItemRow from "./selectables/ItemRow";
import Color from "../Selectables/Color";
import ProductSelectable from "./selectables/ProductSelectable";

import SelectNative from "../SelectNative";

import Select from "@commerce-ui/core/Select2";

import ButtonSelect from "./ButtonSelect";

import Image from "@commerce-ui/core/Image2";

import { products } from "./products";

import Price from "./Price";

export const variantPicker = () => {
  const { product, options } = useOptionPicker({
    products,
    options: [
      {
        id: "color",
        value: p => ({
          id: p.color,
          hex: p.hex,
          product: p
        })
        // missingProductStrategy: "alternative"
      },
      {
        id: "size",
        value: p => ({
          id: p.size,
          image: p.images[0],
          product: p
        })
      }
    ],
    // options: productOptions,
    initialProduct: products[0]
  });

  return (
    <Box sx={{ mt: "s12" }}>
      <Container>
        <Grid cols={[1, null, 2]}>
          <Box>
            <Grid gap={"s7"} cols={1}>
              {product.images.map((image, index) => (
                <Box
                  sx={{
                    display: index === 0 ? "block" : ["none", null, "block"]
                  }}
                >
                  <Image src={image} />
                </Box>
              ))}
            </Grid>
          </Box>

          <Box>
            <Box sx={{ py: "s10", font: "heading", height: 170 }}>
              {product.title}
              <Box sx={{ mt: "s5" }}>
                <Price product={product} />
              </Box>
            </Box>

            <Box sx={{ mb: "s7" }}>
              <Box sx={{ mb: "s5" }}>Color</Box>
              <Grid minItemWidth={50} gap={"s4"}>
                <SelectInline
                  selectable={({ option }) => <Color color={option.hex} />}
                  {...options[0].selectProps}
                />
              </Grid>
            </Box>

            <Box sx={{ mb: "s7" }}>
              <Box sx={{ mb: "s5" }}>Size</Box>
              <Grid minItemWidth={300}>
                <SelectInline
                  selectable={<Pill />}
                  {...options[1].selectProps}
                />
              </Grid>
            </Box>

            <Box sx={{ mb: "s7" }}>
              <Box sx={{ mb: "s5" }}>Size</Box>
              <SelectNative {...options[1].selectProps} />
            </Box>

            <Box sx={{ mb: "s7" }}>
              <Box sx={{ mb: "s5" }}>Size</Box>
              <Select
                {...options[1].selectProps}
                width={["100vw", null, 400]}
                anchoredTo={["window", null, "button"]}
                placement={["bottom", null, "bottomLeft"]}
                root={{
                  boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
                  bg: "white"
                }}
                button={({ value }) => (
                  <ButtonSelect isPlaceholder={value === null}>
                    {console.log(value)}
                    {value === null ? "Select type" : value.id}
                  </ButtonSelect>
                )}
                selectable={<ItemRow />}
              />
            </Box>

            <Box sx={{ mb: "s7" }}>
              <Box sx={{ mb: "s5" }}>Size</Box>
              <Select
                {...options[1].selectProps}
                width={["100vw", null, 500]}
                anchoredTo={["window", null, "button"]}
                placement={["bottom", null, "bottomLeft"]}
                root={{
                  boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
                  bg: "white"
                }}
                button={({ value }) => (
                  <ButtonSelect isPlaceholder={value === null}>
                    {value === null ? "Select type" : value.id}
                  </ButtonSelect>
                )}
              >
                {({ options }) => (
                  <Grid minItemWidth={200} sx={{ p: "s7" }}>
                    {options.map(option => (
                      <Pill {...option.selectableProps} />
                    ))}
                  </Grid>
                )}
              </Select>
            </Box>

            <Box sx={{ mb: "s7" }}>
              <Box sx={{ mb: "s5" }}>Size</Box>
              <Select
                {...options[1].selectProps}
                width={"50vw"}
                anchoredTo={"window"}
                root={{
                  boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
                  bg: "white"
                }}
                button={({ value }) => (
                  <ButtonSelect isPlaceholder={value === null}>
                    {value === null ? "Select type" : value.id}
                  </ButtonSelect>
                )}
                header={
                  <Box
                    sx={{
                      height: 50,
                      borderBottom: t => `1px solid ${t.colors.neutral}`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      font: "body2",
                      color: "main"
                    }}
                  >
                    Select type{" "}
                  </Box>
                }
              >
                {({ options }) => (
                  <Grid minItemWidth={300} sx={{ p: "s7" }}>
                    {options.map(option => (
                      <Pill {...option.selectableProps} />
                    ))}
                  </Grid>
                )}
              </Select>
            </Box>

            <Box sx={{ mb: "s7" }}>
              <Box sx={{ mb: "s5" }}>Size</Box>
              <Select
                {...options[1].selectProps}
                width={["90vw", null, "30vw"]}
                anchoredTo={"window"}
                placement={"right"}
                root={{
                  boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
                  bg: "white"
                }}
                button={({ value }) => (
                  <ButtonSelect isPlaceholder={value === null}>
                    {value === null ? "Select type" : value.id}
                  </ButtonSelect>
                )}
                header={
                  <Box
                    sx={{
                      height: 50,
                      borderBottom: t => `1px solid ${t.colors.neutral}`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      font: "body2",
                      color: "main"
                    }}
                  >
                    Select style
                  </Box>
                }
              >
                {({ options }) => (
                  <Grid minItemWidth={300} sx={{ p: "s7" }}>
                    {options.map(option => (
                      <Pill {...option.selectableProps} />
                    ))}
                  </Grid>
                )}
              </Select>
            </Box>

            <Box sx={{ mb: "s7" }}>
              <Box sx={{ mb: "s5" }}>Size</Box>
              <Grid minItemWidth={300}>
                <SelectInline
                  selectable={({ option }) => (
                    <ProductSelectable product={option.product} />
                  )}
                  {...options[1].selectProps}
                />
              </Grid>
            </Box>

            <Box sx={{ mb: "s7" }}>
              <Box sx={{ mb: "s5" }}>Size</Box>
              <Select
                {...options[1].selectProps}
                width={["90vw", null, "30vw"]}
                anchoredTo={"window"}
                placement={"right"}
                root={{
                  boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
                  bg: "white"
                }}
                button={({ value }) => (
                  <ButtonSelect isPlaceholder={value === null}>
                    {value === null ? "Select type" : value.id}
                  </ButtonSelect>
                )}
                header={
                  <Box
                    sx={{
                      height: 50,
                      borderBottom: t => `1px solid ${t.colors.neutral}`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      font: "body2",
                      color: "main"
                    }}
                  >
                    Select style
                  </Box>
                }
              >
                {({ options }) => (
                  <Grid minItemWidth={200} sx={{ p: "s7" }}>
                    {options.map(option => (
                      <ProductSelectable
                        product={option.product}
                        {...option.selectableProps}
                      />
                    ))}
                  </Grid>
                )}
              </Select>
            </Box>

            <Box sx={{ mb: "s7" }}>
              <Box sx={{ mb: "s5" }}>Color</Box>
              <Grid minItemWidth={200}>
                <SelectInline
                  selectable={({ option }) => (
                    <ProductSelectable product={option.product} />
                  )}
                  {...options[0].selectProps}
                />
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default {
  title: "demo.variantPicker"
};
