import React from "react";

import Container from "@commerce-ui/core/Container";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";
import ScrollableStack, {
  useScrollableStack
} from "@commerce-ui/core/ScrollableStack";

import ButtonRaw from "@commerce-ui/core/ButtonRaw";

const container = ["5vw", null, null, "10vw"];

const boxes = [
  <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>,
  <Box
    sx={{
      height: "200px",
      bg: "lightblue",
      p: 10
    }}
  >
    Blue
  </Box>,
  <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Blue</Box>,
  <Box
    sx={{
      height: "200px",
      bg: "lightblue",
      p: 10
    }}
  >
    Blue
  </Box>,
  <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Blue</Box>
];

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
  const scrollableStack = useScrollableStack({ length: 5 });

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
            $innerMargin: container
          },
          false
        ),
        {
          name: "externally controlled",
          component: (
            <Box>
              <ScrollableStack
                sx={{
                  // $itemSize: 400,
                  $gap: 10,
                  $floatingElement: {
                    height: "3px",
                    bg: "black"
                  }
                }}
                controller={scrollableStack}
              >
                <Box
                  sx={{ width: "200px", height: "200px", bg: "coral", p: 10 }}
                >
                  Coral
                </Box>
                <Box
                  sx={{
                    width: "150px",
                    height: "200px",
                    bg: "lightblue",
                    p: 10
                  }}
                >
                  Blue
                </Box>
                <Box
                  sx={{ width: "400px", height: "200px", bg: "coral", p: 10 }}
                >
                  Blue
                </Box>
                <Box
                  sx={{
                    width: "100px",
                    height: "200px",
                    bg: "lightblue",
                    p: 10
                  }}
                >
                  Blue
                </Box>
                <Box
                  sx={{ width: "500px", height: "200px", bg: "coral", p: 10 }}
                >
                  Blue
                </Box>
              </ScrollableStack>
              <br />

              <button
                onClick={() => {
                  scrollableStack.scrollTo(0);
                }}
              >
                Scroll to 0
              </button>

              <button
                onClick={() => {
                  scrollableStack.setFloatingElementIndex(0);
                }}
              >
                Move floating to 0
              </button>

              <button
                onClick={() => {
                  scrollableStack.setFloatingElementIndex(1);
                }}
              >
                Move floating to 1
              </button>

              <button
                onClick={() => {
                  scrollableStack.setFloatingElementIndex(4);
                }}
              >
                Move floating to 4
              </button>
            </Box>
          )
        },
        {
          name: "arrows",
          component: (
            <Box>
              <ScrollableStack
                sx={{
                  $itemsVisible: 4,
                  $innerMargin: 100
                }}
                previousButton={<ButtonRaw>Previous</ButtonRaw>}
                nextButton={<ButtonRaw>Next</ButtonRaw>}
              >
                {boxes}
              </ScrollableStack>
            </Box>
          )
        },
        {
          name: "arrows with config",
          component: (
            <Box>
              <ScrollableStack
                sx={{
                  $itemsVisible: 4,
                  $innerMargin: 100,
                  $gap: 10
                }}
                previousButton={{
                  button: <ButtonRaw>Prev</ButtonRaw>,
                  offset: -10
                }}
                nextButton={{
                  button: <ButtonRaw>Next</ButtonRaw>,
                  offset: -10
                }}
              >
                {boxes}
              </ScrollableStack>
            </Box>
          )
        },
        {
          name: "arrows with config as function",
          component: (
            <Box>
              <ScrollableStack
                sx={{
                  $itemsVisible: 4,
                  $innerMargin: 100,
                  $gap: 10
                }}
                previousButton={({ isAtStart, isParentHovered }) => ({
                  button: (
                    <ButtonRaw
                      sx={{
                        display:
                          isAtStart || !isParentHovered ? "none" : "block"
                      }}
                    >
                      Prev
                    </ButtonRaw>
                  ),
                  offset: -10
                })}
                nextButton={({ isAtEnd, isParentHovered }) => ({
                  button: (
                    <ButtonRaw
                      sx={{
                        display: isAtEnd || !isParentHovered ? "none" : "block"
                      }}
                    >
                      Next
                    </ButtonRaw>
                  ),
                  offset: -10
                })}
              >
                {boxes}
              </ScrollableStack>
            </Box>
          )
        }
      ]}
    />
  );
};

export default {
  title: "ScrollableStack"
};
