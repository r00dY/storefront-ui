import React, { useState, useEffect } from "react";

import Box from "@commerce-ui/core/Box";
import Button from "@commerce-ui/core/Button";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import Container from "@commerce-ui/core/Container";

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
        px: ["s2", null, null, "s7"]
      }}
      gap={["s2", null, null, "s7"]}
      iconSize={24}
      {...props}
    />
  );
}

function Button2({ inverted = false, ...props }) {
  return (
    <ButtonText
      sx={{
        color: inverted ? "white" : "main",
        height: 64,
        minWidth: 300,
        bg: inverted ? "main" : "white",
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

      <Button2 leftIcon={<IconCart />} inverted>
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
  title: "demo.buttons"
};
