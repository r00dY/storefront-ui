import React, { useState, useRef, useEffect } from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";
import Link from "@commerce-ui/core/Link";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

const LinkCustom = React.forwardRef((props, ref) => (
  <Link
    {...props}
    sx={({ isHovered }) => ({
      p: 6,
      bg: isHovered ? "yellow" : "antiquewhite",
      color: "black"
    })}
  />
));

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
              <Link href={"#"} sx={{ color: "red" }} ref={exampleRef}>
                Lorem ipsum dolor sit amet
              </Link>
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
            component: (
              <Link href={"#"}>
                {({ hovered }) => (
                  <Box
                    sx={{
                      bg: hovered ? "red" : "coral",
                      color: "white",
                      p: 16
                    }}
                  >
                    Content
                  </Box>
                )}
              </Link>
            )
          }
        ]}
      />
    </Box>
  );
};

export default {
  title: "approved.Link"
};
