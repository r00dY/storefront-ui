import React from "react";

import Container from "@commerce-ui/core/Container";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";
import ScrollableStack, {
  useScrollableStack
} from "@commerce-ui/core/ScrollableStack";

const container = ["5vw", null, null, "10vw"];

const horizontalStackStory = (name, props, wrap, smallQuantity = false) => {
  const body = (
    <ScrollableStack
      sx={{
        position: "relative",
        border: "1px dotted black",
        ...props
      }}
    >
      <Box sx={{ height: "200px", bg: "coral", p: 10 }} tabIndex={0}>
        Coral
      </Box>
      <Box sx={{ height: "200px", bg: "blue", p: 10 }} tabIndex={0}>
        Blue
      </Box>

      {!smallQuantity && (
        <Box sx={{ height: "200px", bg: "red", p: 10 }} tabIndex={0}>
          Red
        </Box>
      )}
      {!smallQuantity && (
        <Box sx={{ height: "200px", bg: "grey", p: 10 }} tabIndex={0}>
          Grey
        </Box>
      )}
      {!smallQuantity && (
        <Box sx={{ height: "200px", bg: "yellow", p: 10 }} tabIndex={0}>
          Yellow
        </Box>
      )}
      {!smallQuantity && (
        <Box sx={{ height: "200px", bg: "magenta", p: 10 }} tabIndex={0}>
          Magenta
        </Box>
      )}
    </ScrollableStack>
  );

  return {
    name,
    component: wrap ? <Container variant={container}> {body}</Container> : body
  };
};

const horizontalStackStories = (name, props, wrap = true) => {
  return [
    horizontalStackStory(
      `${name} - many items`,
      { ...props, $test: "dupa" },
      wrap,
      false
    ),
    horizontalStackStory(
      `${name} - 2 items only, align=center`,
      { ...props, $align: "center" },
      wrap,
      true
    ),
    horizontalStackStory(
      `${name} - 2 items only, align=right`,
      { ...props, $align: ["center", null, null, "right"] },
      wrap,
      true
    )
  ];
};

export const basic = () => {
  const scrollableStack = useScrollableStack();

  return (
    <StoryWrapper
      stories={[
        ...horizontalStackStories("Natural item width", {
          $gap: 20
        }),
        ...horizontalStackStories("$itemSize", {
          $gap: 20,
          $itemSize: [200, null, null, 330]
        }),

        ...horizontalStackStories("$itemsVisible", {
          $gap: 20,
          $itemsVisible: [2, null, null, 3]
        }),
        ...horizontalStackStories(
          "$itemsVisible + $container",
          {
            $gap: [20, null, null, 40],
            $itemsVisible: [2, null, null, 3],
            $container: container
          },
          false
        ),
        {
          name: "externally controlled",
          component: (
            <Box>
              <ScrollableStack
                sx={{
                  $itemSize: 400,
                  $gap: 10
                }}
                controller={scrollableStack.controller}
              >
                <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>
                <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
                <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
                <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
                <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
              </ScrollableStack>
              <br />

              <button
                onClick={() => {
                  scrollableStack.scrollTo(0);
                }}
              >
                Scroll to 0
              </button>
            </Box>
          )
        }
      ]}
    />
  );
};

export default {
  title: "HorizontalItemsContainer"
};
