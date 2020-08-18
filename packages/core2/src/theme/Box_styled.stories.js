import React, { useRef, useEffect } from "react";

import Button from "@commerce-ui/core/Button";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import Box, { styledProvider } from "@commerce-ui/core/Box";
import theme from "./theme";

const styledBox = styledProvider(theme);

import { styledTest } from "@commerce-ui/core/InputContainer2";

const BoxStandard = styledBox({
  p: ["s5", null, null, "s11"],
  bg: "mono300"
});

const BoxAsSection = styledBox("section", {
  p: 2,
  bg: "mono300"
});

const TestComponent = styledTest(
  {
    label: {}
  },
  styledBox
);

const TestComponentStyled = styledTest(
  {
    label: {
      p: 30,
      color: "white",
      bg: "black"
    }
  },
  styledBox
);

const TestComponentStyledWithChildren = styledTest(
  {
    label: {
      p: 30,
      color: "white",
      bg: "black",
      __children__: (p, s) => "**** " + s.label + " *****"
    }
  },
  styledBox
);

export const basic = () => {
  const testRef = useRef(null);

  useEffect(() => {
    console.log("box ref", testRef);
  }, []);

  return (
    <Box sx={{ maxWidth: "800px" }}>
      <StoryWrapper
        stories={[
          {
            name: "Standard",
            component: (
              <BoxStandard ref={testRef}>
                Lorem ipsum dolor sit amet
              </BoxStandard>
            )
          },
          {
            name: "As section",
            component: (
              <BoxAsSection>
                Lorem ipsum dolor sit amet
                <Box className={"dupa"}>dupa</Box>
              </BoxAsSection>
            )
          },
          {
            name: "As span",
            component: (
              <Box sx={{ p: 2, bg: "mono300" }}>
                Lorem{" "}
                <Box as="span" sx={{ bg: "yellow" }}>
                  ipsum
                </Box>{" "}
                dolor sit amet
              </Box>
            )
          },
          {
            name: "As h2",
            component: (
              <Box as="h2" sx={{ p: 2, bg: "mono300" }}>
                Lorem ipsum dolor sit amet
              </Box>
            )
          },
          {
            name: "As p + sup",
            component: (
              <Box as="p" sx={{ p: 2, bg: "mono300" }}>
                Lorem ipsum dolor sit amet. Superscript<Box as={"sup"}>2</Box>
              </Box>
            )
          },
          {
            name: "As list",
            component: (
              <Box as="ul" sx={{ p: 2, bg: "mono300" }}>
                <Box as={"li"}>One</Box>
                <Box as={"li"}>Two</Box>
                <Box as={"li"}>Three</Box>
                <Box as={"li"}>Four</Box>
              </Box>
            )
          },
          {
            name: "As form",
            component: (
              <Box as="form" sx={{ p: 2, bg: "mono300" }}>
                <Box as={"p"}>Blah blah blah</Box>
              </Box>
            )
          },
          {
            name: "As fieldset",
            component: (
              <Box as="fieldset" sx={{ p: 2, bg: "mono300" }}>
                <Box as={"p"}>Blah blah blah</Box>
              </Box>
            )
          },
          {
            name: "As label",
            component: (
              <Box as="label" sx={{ p: 2, bg: "mono300" }}>
                Blah blah blah
              </Box>
            )
          },
          {
            name: "As legend",
            component: (
              <Box as="legend" sx={{ p: 2, bg: "mono300" }}>
                Blah blah blah
              </Box>
            )
          },
          {
            name: "ButtonBase",
            component: <Button sx={{ p: 2, bg: "mono300" }}>Click me!</Button>
          },
          {
            name: "Button href",
            component: (
              <Button
                sx={{ p: 2, bg: "mono300", width: "100px", height: "50px" }}
                href={"https://wikipedia.org"}
                target={"blank"}
              >
                Click me!
              </Button>
            )
          },
          {
            name: "fitW",
            component: (
              <Box fitW sx={{ width: "300px", height: "300px" }}>
                <Button
                  sx={{ p: 2, bg: "mono300", width: "100px", height: "50px" }}
                  href={"https://wikipedia.org"}
                  target={"blank"}
                >
                  Click me!
                </Button>
              </Box>
            )
          },
          {
            name: "fitW + fitH",
            component: (
              <Box fitW fitH sx={{ width: "300px", height: "300px" }}>
                <Button
                  sx={{ p: 2, bg: "mono300", width: "100px", height: "50px" }}
                  href={"https://wikipedia.org"}
                  target={"blank"}
                >
                  Click me!
                </Button>
              </Box>
            )
          },
          {
            name: "test1",
            component: (
              <Box>
                <TestComponent>Dupa</TestComponent>
                <br />
                <TestComponent isBlue={true}>Dupa</TestComponent>
                <br />
                <TestComponentStyled>Dupa</TestComponentStyled>
                <br />
                <TestComponentStyledWithChildren>
                  Dupa
                </TestComponentStyledWithChildren>
                <br />
              </Box>
            )
          }
        ]}
      />
    </Box>
  );
};

export default {
  title: "approved.styledBox"
};
