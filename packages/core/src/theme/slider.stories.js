import React from "react";

import Container from "@commerce-ui/core/Container";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";

export const basic = () => (
  <StoryWrapper
    stories={[
      {
        name: "Horizontal stack - natural item width",
        component: (
          <Container>
            <HorizontalStack
              sx={{
                position: "relative",
                border: "1px dotted black",
                $gap: "20px"
              }}
            >
              <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>
              <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
              <Box sx={{ height: "200px", bg: "red", p: 10 }}>Red</Box>
              <Box sx={{ height: "200px", bg: "grey", p: 10 }}>Grey</Box>
              <Box sx={{ height: "200px", bg: "yellow", p: 10 }}>Yellow</Box>
              <Box sx={{ height: "200px", bg: "magenta", p: 10 }}>Magenta</Box>
            </HorizontalStack>
          </Container>
        )
      },
      // {
      //     name: "Horizontal stack - natural item width ($align = center)",
      //     component: (
      //         <Container>
      //             <HorizontalStack sx={{
      //                 position: "relative",
      //                 border: "1px dotted black",
      //                 $gap: 20,
      //                 $align: "center",
      //                 $itemWidth: 300
      //             }}>
      //                 <Box sx={{height: "200px",  bg: "coral", p: 10}}>Coral</Box>
      //                 <Box sx={{height: "200px",  bg: "blue", p: 10}}>Blue</Box>
      //                 <Box sx={{height: "200px",  bg: "red", p: 10}}>Red</Box>
      //                 <Box sx={{height: "200px",  bg: "grey", p: 10}}>Grey</Box>
      //                 <Box sx={{height: "200px",  bg: "yellow", p: 10}}>Yellow</Box>
      //                 <Box sx={{height: "200px",  bg: "magenta", p: 10}}>Magenta</Box>
      //             </HorizontalStack>
      //         </Container>
      //     )
      // },
      // {
      //     name: "Horizontal stack - natural item width ($align = right)",
      //     component: (
      //         <Container>
      //             <HorizontalStack sx={{
      //                 position: "relative",
      //                 border: "1px dotted black",
      //                 $gap: "20px",
      //                 $align: "right"
      //             }}>
      //                 <Box sx={{height: "200px",  bg: "coral", p: 10}}>Coral</Box>
      //                 <Box sx={{height: "200px",  bg: "blue", p: 10}}>Blue</Box>
      //                 <Box sx={{height: "200px",  bg: "red", p: 10}}>Red</Box>
      //                 <Box sx={{height: "200px",  bg: "grey", p: 10}}>Grey</Box>
      //                 <Box sx={{height: "200px",  bg: "yellow", p: 10}}>Yellow</Box>
      //                 <Box sx={{height: "200px",  bg: "magenta", p: 10}}>Magenta</Box>
      //             </HorizontalStack>
      //         </Container>
      //     )
      // },
      {
        name: "Horizontal stack - item width set directly",
        component: (
          <Container>
            <HorizontalStack
              sx={{
                position: "relative",
                border: "1px dotted black",
                $gap: 20,
                $itemSize: 300
              }}
            >
              <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>
              <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
              <Box sx={{ height: "200px", bg: "red", p: 10 }}>Red</Box>
              <Box sx={{ height: "200px", bg: "grey", p: 10 }}>Grey</Box>
              <Box sx={{ height: "200px", bg: "yellow", p: 10 }}>Yellow</Box>
              <Box sx={{ height: "200px", bg: "magenta", p: 10 }}>Magenta</Box>
            </HorizontalStack>
          </Container>
        )
      },
      {
        name: "Horizontal stack - item width set by grid",
        component: (
          <Container>
            <HorizontalStack
              sx={{
                position: "relative",
                border: "1px dotted black",
                $gap: 20,
                $itemsVisible: 3
              }}
            >
              <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>
              <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
              <Box sx={{ height: "200px", bg: "red", p: 10 }}>Red</Box>
              <Box sx={{ height: "200px", bg: "grey", p: 10 }}>Grey</Box>
              <Box sx={{ height: "200px", bg: "yellow", p: 10 }}>Yellow</Box>
              <Box sx={{ height: "200px", bg: "magenta", p: 10 }}>Magenta</Box>
            </HorizontalStack>
          </Container>
        )
      },
      {
        name: "Horizontal stack - item width set by grid",
        component: (
          <HorizontalStack
            sx={{
              position: "relative",
              border: "1px dotted black",
              $gap: 20,
              $itemsVisible: 3,
              $container: 145
            }}
          >
            <Box sx={{ height: "200px", bg: "coral", p: 10 }}>Coral</Box>
            <Box sx={{ height: "200px", bg: "blue", p: 10 }}>Blue</Box>
            <Box sx={{ height: "200px", bg: "red", p: 10 }}>Red</Box>
            <Box sx={{ height: "200px", bg: "grey", p: 10 }}>Grey</Box>
            <Box sx={{ height: "200px", bg: "yellow", p: 10 }}>Yellow</Box>
            <Box sx={{ height: "200px", bg: "magenta", p: 10 }}>Magenta</Box>
          </HorizontalStack>
        )
      }

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
