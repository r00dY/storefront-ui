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

import ButtonText from "@commerce-ui/core/ButtonText2";
import IconTick from "./icons/IconTick";
import IconCart from "./icons/IconCart";
import { keyframes } from "@emotion/core";

function Button1(props) {
  return (
    <ButtonText
      sx={{
        height: 48,
        minWidth: 200,
        bg: "antiquewhite",
        px: "s7"
      }}
      gap={"s5"}
      iconSize={24}
      {...props}
    />
  );
}

function Button2(props) {
  return (
    <ButtonText
      sx={{
        color: "main",
        height: 64,
        minWidth: 300,
        bg: "white",
        font: "heading",
        border: t => `2px solid ${t.colors.main}`,
        borderRadius: 6,
        px: "s9"
      }}
      gap={"s6"}
      iconSize={32}
      {...props}
    />
  );
}

const animation = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 0
  },
  "50%": {
    opacity: 0.3
  }
});

function UnicornLoader(props) {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter === 3 ? 0 : counter + 1);
    }, 300);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box sx={{ display: "flex" }}>
      {[...Array(counter)].map((e, i) => (
        <Box
          sx={{
            backgroundImage: 'url("/images/unicorn.png")',
            width: 24,
            height: 24,
            mr: 12
          }}
        />
      ))}
    </Box>
  );
}

function UnicornButton({ children, price, ...restProps }) {
  return (
    <Button
      sx={{
        height: 60,
        border: "2px solid black",
        borderRadius: 5,
        bg: "#EFE7FC",
        font: "body",
        px: "s8",
        minWidth: 300,
        position: "relative"
      }}
      gap={"s6"}
      iconSize={32}
      {...restProps}
    >
      {({ hovered, isLoading }) => (
        <>
          {isLoading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <UnicornLoader />
            </Box>
          )}
          {!isLoading && (
            <>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                  backgroundImage: 'url("/images/unicorn.png")',
                  backgroundRepeat: "repeat-y repeat-x",
                  opacity: 0,
                  animation: hovered
                    ? `${animation} 1s infinite linear`
                    : "none"
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {children}
                <Box
                  sx={{
                    height: 20,
                    bg: "black",
                    width: 2,
                    mx: 16
                  }}
                />

                <Box>{price}</Box>
              </Box>
            </>
          )}
        </>
      )}
    </Button>
  );
}

export const buttons = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <Container sx={{ pt: "s10" }}>
      <Box as={"p"} sx={{ mb: "s6" }}>
        Button
      </Box>

      <Button1 leftIcon={<IconCart />} rightIcon={<IconTick />}>
        Click me
      </Button1>

      <br />
      <br />

      <Button1 leftIcon={<IconCart />}>
        Button with a very very long label
      </Button1>

      <Box as={"p"} sx={{ mb: "s6", mt: "s9" }}>
        Button 2
      </Box>

      <Button2 leftIcon={<IconCart />} rightIcon={<IconTick />}>
        Click me
      </Button2>

      <br />
      <br />

      <Button2 leftIcon={<IconCart />}>
        Button with a very very long label
      </Button2>

      <Box as={"p"} sx={{ mb: "s6", mt: "s9" }}>
        Button with Unicorn
      </Box>

      <UnicornButton
        price={"$30.00"}
        onClick={() => setLoading(!isLoading)}
        isLoading={isLoading}
      >
        Add to cart
      </UnicornButton>
    </Container>
  );
};

export default {
  title: "demo"
};
