import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Container from "@commerce-ui/core/Container";
import Grid from "@commerce-ui/core/Grid";
import Box from "@commerce-ui/core/Box";
import { useTheme } from "@commerce-ui/core/Theme";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

export const basic = () => {
  const theme = useTheme();

  return (
    <StoryWrapper
      stories={[
        {
          name: "Container default",
          component: (
            <Container>
              <Box sx={{ p: 2, bg: "mono300" }}>Lorem ipsum dolor sit amet</Box>
            </Container>
          )
        },
        {
          name: "Container secondary",
          component: (
            <Container margin={"containerMarginSecondary"}>
              <Box sx={{ p: 2, bg: "mono300" }}>Lorem ipsum dolor sit amet</Box>
            </Container>
          )
        },
        {
          name: "Container inline margin",
          component: (
            <Container margin={[10, 20, 30, 40, 50]}>
              <Box sx={{ p: 2, bg: "mono300" }}>Lorem ipsum dolor sit amet</Box>
            </Container>
          )
        },
        {
          name: "Container 0 on mobile, main on rest",
          component: (
            <Container margin={[0, null, "containerMargin"]}>
              <Box sx={{ p: 2, bg: "mono300" }}>Lorem ipsum dolor sit amet</Box>
            </Container>
          )
        },
        {
          name: "Container default, extra styles",
          component: (
            <Container sx={{ pt: 3, pb: 3, bg: "green" }}>
              <Box sx={{ p: 2, bg: "mono300" }}>Lorem ipsum dolor sit amet</Box>
            </Container>
          )
        },
        {
          name: "Grid default (12 cols, default grid gap)",
          component: (
            <Container>
              <Grid>
                {Array.from(Array(32).keys()).map(x => (
                  <Box
                    key={x}
                    sx={{
                      p: 2,
                      bg: "red",
                      color: "white"
                    }}
                  >
                    Test
                  </Box>
                ))}
              </Grid>
            </Container>
          )
        },
        {
          // TODO: doesn't work!!!
          name: "Grid default (responsive col number)",
          component: (
            <Container>
              <Grid cols={[2, 4, 6, 8, 12]}>
                {Array.from(Array(32).keys()).map(x => (
                  <Box
                    key={x}
                    sx={{
                      p: 2,
                      bg: "red",
                      color: "white"
                    }}
                  >
                    Test
                  </Box>
                ))}
              </Grid>
            </Container>
          )
        },
        {
          name: "Grid default, custom layout of cols",
          component: (
            <Container>
              <Grid rowGap={10} cols={[2, "1fr 2fr 3fr"]}>
                {Array.from(Array(32).keys()).map(x => (
                  <Box
                    key={x}
                    sx={{
                      p: 2,
                      bg: "red",
                      color: "white"
                    }}
                  >
                    Test
                  </Box>
                ))}
              </Grid>
            </Container>
          )
        },
        {
          name: "Grid default, custom gap",
          component: (
            <Container>
              <Grid gap={[0, null, "1px"]} rowGap={"1px"}>
                {Array.from(Array(32).keys()).map(x => (
                  <Box
                    key={x}
                    sx={{
                      p: 2,
                      bg: "red",
                      color: "white"
                    }}
                  >
                    Test
                  </Box>
                ))}
              </Grid>
            </Container>
          )
        },
        {
          name: "Grid default, minItemWidth",
          component: (
            <Container>
              <Box sx={{ maxWidth: "50vw", border: "1px dotted black" }}>
                <Grid minItemWidth={[100, null, 200]}>
                  {Array.from(Array(32).keys()).map(x => (
                    <Box
                      key={x}
                      sx={{
                        p: 2,
                        bg: "red",
                        color: "white"
                      }}
                    >
                      Test
                    </Box>
                  ))}
                </Grid>
              </Box>
            </Container>
          )
        },
        {
          name: "Grid weird use case", // TODO: fix, but can't reproduce
          component: (
            <Container>
              <Grid cols={[3, 3, 5, 5, 5]}>
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
                <Box sx={{ bg: "red", height: "100px" }} />
              </Grid>
            </Container>
          )
        }
      ]}
    />
  );
};

export default {
  title: "Layout"
};
