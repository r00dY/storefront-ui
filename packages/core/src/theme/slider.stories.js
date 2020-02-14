import React from "react";

import Container from "@commerce-ui/core/Container";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";

const container = ["5vw", null, null, "10vw"];

const horizontalStackStory = (name, props, wrap, smallQuantity = false) => {
  const body = (
    <HorizontalStack
      sx={{
        position: "relative",
        border: "1px dotted black",
        ...props
      }}
    >
      <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>
      <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>

      {!smallQuantity && (
        <Box sx={{ height: "200px", bg: "red", p: 10 }}>Red</Box>
      )}
      {!smallQuantity && (
        <Box sx={{ height: "200px", bg: "grey", p: 10 }}>Grey</Box>
      )}
      {!smallQuantity && (
        <Box sx={{ height: "200px", bg: "yellow", p: 10 }}>Yellow</Box>
      )}
      {!smallQuantity && (
        <Box sx={{ height: "200px", bg: "magenta", p: 10 }}>Magenta</Box>
      )}
    </HorizontalStack>
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
      { ...props, $align: "right" },
      wrap,
      true
    )
  ];
};

export const basic = () => (
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
      )

      // ...horizontalStackStories("Natural item width", { $gap: 20 }),
      // ...horizontalStackStories("Natural item width", { $gap: 20 }),
      // {
      //   name: "Horizontal stack - natural item width",
      //   component: (
      //     <Container variant={container}>
      //       <HorizontalStack
      //         sx={{
      //           position: "relative",
      //           border: "1px dotted black",
      //           $gap: "20px"
      //         }}
      //       >
      //         <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>
      //         <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
      //         <Box sx={{ height: "200px", bg: "red", p: 10 }}>Red</Box>
      //         <Box sx={{ height: "200px", bg: "grey", p: 10 }}>Grey</Box>
      //         <Box sx={{ height: "200px", bg: "yellow", p: 10 }}>Yellow</Box>
      //         <Box sx={{ height: "200px", bg: "magenta", p: 10 }}>Magenta</Box>
      //       </HorizontalStack>
      //     </Container>
      //   )
      // },
      // {
      //   name: "Horizontal stack - item width set directly",
      //   component: (
      //     <Container variant={container}>
      //       <HorizontalStack
      //         sx={{
      //           position: "relative",
      //           border: "1px dotted black",
      //           $gap: 20,
      //           $itemSize: 300
      //         }}
      //       >
      //         <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>
      //         <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
      //         <Box sx={{ height: "200px", bg: "red", p: 10 }}>Red</Box>
      //         <Box sx={{ height: "200px", bg: "grey", p: 10 }}>Grey</Box>
      //         <Box sx={{ height: "200px", bg: "yellow", p: 10 }}>Yellow</Box>
      //         <Box sx={{ height: "200px", bg: "magenta", p: 10 }}>Magenta</Box>
      //       </HorizontalStack>
      //     </Container>
      //   )
      // },
      // {
      //   name: "Horizontal stack - item width set by grid",
      //   component: (
      //     <Container variant={container}>
      //       <HorizontalStack
      //         sx={{
      //           position: "relative",
      //           border: "1px dotted black",
      //           $gap: 20,
      //           $itemsVisible: 3
      //         }}
      //       >
      //         <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>
      //         <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
      //         <Box sx={{ height: "200px", bg: "red", p: 10 }}>Red</Box>
      //         <Box sx={{ height: "200px", bg: "grey", p: 10 }}>Grey</Box>
      //         <Box sx={{ height: "200px", bg: "yellow", p: 10 }}>Yellow</Box>
      //         <Box sx={{ height: "200px", bg: "magenta", p: 10 }}>Magenta</Box>
      //       </HorizontalStack>
      //     </Container>
      //   )
      // },
      // {
      //   name: "Horizontal stack - item width set by grid, heavy responsiveness",
      //   component: (
      //     <HorizontalStack
      //       sx={{
      //         border: "1px dotted black",
      //         $gap: [20, null, null, 40],
      //         $itemsVisible: [2, null, null, 3],
      //         $container: container
      //       }}
      //     >
      //       <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>
      //       <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
      //       <Box sx={{ height: "200px", bg: "red", p: 10 }}>Red</Box>
      //       <Box sx={{ height: "200px", bg: "grey", p: 10 }}>Grey</Box>
      //       <Box sx={{ height: "200px", bg: "yellow", p: 10 }}>Yellow</Box>
      //       <Box sx={{ height: "200px", bg: "magenta", p: 10 }}>Magenta</Box>
      //     </HorizontalStack>
      //   )
      // }

      // {
      //   name: "Natural width",
      //   component: (
      //     <Container>
      //       <Box
      //         sx={{
      //           position: "relative",
      //           border: "1px dotted black"
      //         }}
      //       >
      //         <Box
      //           sx={{
      //             position: "relative",
      //             display: "flex",
      //             flexDirection: "row",
      //             overflowX: "auto"
      //           }}
      //         >
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "200px",
      //               bg: "coral",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "300px",
      //               bg: "blue",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "400px",
      //               bg: "red",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "200px",
      //               bg: "grey",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "300px",
      //               bg: "yellow",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "400px",
      //               bg: "magenta",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //         </Box>
      //       </Box>
      //     </Container>
      //   )
      // },
      // {
      //   name: "Grid width",
      //   component: (
      //     <Container>
      //       <Box
      //         sx={{
      //           position: "relative",
      //           border: "1px dotted black"
      //         }}
      //       >
      //         <Box
      //           sx={{
      //             position: "relative",
      //             display: "flex",
      //             flexDirection: "row",
      //             overflowX: "auto",
      //             marginLeft: "auto",
      //             marginRight: "auto"
      //           }}
      //         >
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "calc(33.3333% - 20px)",
      //               bg: "coral",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //           <Box sx={{ width: "30px", flexGrow: 0, flexShrink: 0 }} />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "calc(33.3333% - 20px)",
      //               bg: "blue",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //           <Box sx={{ width: "30px", flexGrow: 0, flexShrink: 0 }} />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "calc(33.3333% - 20px)",
      //               bg: "red",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //           <Box sx={{ width: "30px", flexGrow: 0, flexShrink: 0 }} />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "calc(33.3333% - 20px)",
      //               bg: "grey",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //           <Box sx={{ width: "30px", flexGrow: 0, flexShrink: 0 }} />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "calc(33.3333% - 20px)",
      //               bg: "yellow",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //           <Box sx={{ width: "30px", flexGrow: 0, flexShrink: 0 }} />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "calc(33.3333% - 20px)",
      //               bg: "magenta",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //         </Box>
      //       </Box>
      //     </Container>
      //   )
      // },
      // {
      //   name: "When items length than container length",
      //   component: (
      //     <Container>
      //       <Box
      //         sx={{
      //           position: "relative",
      //           border: "1px dotted black",
      //           display: "flex" // This does centering!!!
      //         }}
      //       >
      //         <Box
      //           sx={{
      //             position: "relative",
      //             display: "flex",
      //             flexDirection: "row",
      //             overflowX: "auto",
      //             marginLeft: "auto",
      //             marginRight: "auto"
      //           }}
      //         >
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "100px",
      //               bg: "coral",
      //               flexGrow: 0,
      //               flexShrink: 0,
      //               marginRight: "30px"
      //             }}
      //           />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "100px",
      //               bg: "blue",
      //               flexGrow: 0,
      //               flexShrink: 0,
      //               marginRight: "30px"
      //             }}
      //           />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "100px",
      //               bg: "red",
      //               flexGrow: 0,
      //               flexShrink: 0,
      //               marginRight: "30px"
      //             }}
      //           />
      //           <Box
      //             sx={{
      //               height: "200px",
      //               width: "100px",
      //               bg: "grey",
      //               flexGrow: 0,
      //               flexShrink: 0
      //             }}
      //           />
      //         </Box>
      //       </Box>
      //     </Container>
      //   )
      // }
    ]}
  />
);

export default {
  title: "HorizontalItemsContainer"
};
