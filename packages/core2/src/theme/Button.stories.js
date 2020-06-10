import React, { useEffect, useState } from "react";

import Box from "@commerce-ui/core/Box";
import Button from "@commerce-ui/core/Button";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

const ButtonCustom = props => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOn(!on);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Button
      {...props}
      sx={({ hovered, selected, loading }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 6,
        bg: hovered ? "yellow" : "antiquewhite",
        border: selected ? "1px solid black" : "none",
        color: "black"
      })}
    >
      {({ loading }) => (
        <>
          {props.children} {on && loading && "(loading...)"}
        </>
      )}
    </Button>
  );
};

export const basic = () => (
  <Box sx={{ maxWidth: "800px" }}>
    <StoryWrapper
      stories={[
        {
          name: "Standard",
          component: (
            <Button
              sx={{ color: "red", font: "body2" }}
              onClick={() => alert("clicked!")}
            >
              Lorem ipsum dolor sit amet
            </Button>
          )
        },
        {
          name: "Standard as href",
          component: (
            <Button
              href={"#"}
              sx={{ color: "red" }}
              onClick={() => alert("clicked!")}
            >
              Lorem ipsum dolor sit amet
            </Button>
          )
        },
        {
          name: "Component",
          component: (
            <ButtonCustom onClick={() => alert("clicked!")}>
              Lorem ipsum dolor sit amet
            </ButtonCustom>
          )
        },
        {
          name: "Selected",
          component: (
            <ButtonCustom onClick={() => alert("clicked!")} selected>
              Lorem ipsum dolor sit amet
            </ButtonCustom>
          )
        },
        {
          name: "Loading",
          component: (
            <ButtonCustom onClick={() => alert("clicked!")} isLoading>
              Lorem ipsum dolor sit amet
            </ButtonCustom>
          )
        },
        {
          name: "fitW + fitH",
          component: (
            <Box sx={{ width: 300, height: 300 }} fitW fitH>
              <ButtonCustom onClick={() => alert("clicked!")}>
                Lorem ipsum dolor sit amet
              </ButtonCustom>
            </Box>
          )
        },
        {
          name: "Compound component inside (with callbacks)",
          component: (
            <Button onClick={() => alert("clicked!")}>
              {({ hovered }) => (
                <Box
                  sx={{ bg: hovered ? "red" : "coral", color: "white", p: 16 }}
                >
                  Content
                </Box>
              )}
            </Button>
          )
        }
      ]}
    />
  </Box>
);

export default {
  title: "approved.Button"
};
