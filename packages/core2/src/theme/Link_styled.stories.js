import React, { useState, useRef, useEffect } from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";
import Link from "@commerce-ui/core/Link";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

const MyLink = Link.styled({
  sx: {
    color: "red"
  }
});

const LinkCustom = Link.styled({
  sx: {
    p: 6,
    bg: (p, s) => (s.hovered ? "yellow" : "antiquewhite"),
    color: "black"
  }
});

const LinkCustom2 = Link.styled({
  children: (p, s) => (
    <Box
      sx={{
        bg: s.hovered ? "red" : "coral",
        color: "white",
        p: 16
      }}
    >
      {p.children}
    </Box>
  )
});

export const basic = () => {
  const exampleRef = useRef(null);

  useEffect(() => {
    console.log("### EXAMPLE REF ###", exampleRef);
  }, []);

  return (
    <Box sx={{ maxWidth: "800px" }}>
      <StoryWrapper
        stories={[
          {
            name: "Standard",
            component: (
              <MyLink href={"#"} ref={exampleRef}>
                Lorem ipsum dolor sit amet
              </MyLink>
            )
          },
          {
            name: "Component (callback ref)",
            component: (
              <LinkCustom
                href={"#"}
                ref={element => {
                  console.log("callback ref", element);
                }}
              >
                Lorem ipsum dolor sit amet
              </LinkCustom>
            )
          },
          {
            name: "Compound component inside (with callbacks)",
            component: <LinkCustom2 href={"#"}>Content</LinkCustom2>
          }
        ]}
      />
    </Box>
  );
};

export default {
  title: "approved.Link_styled"
};
