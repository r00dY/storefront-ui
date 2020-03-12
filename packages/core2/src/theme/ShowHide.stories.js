import React, { useState } from "react";

import Box from "@commerce-ui/core/Box";

import Button from "@commerce-ui/core/Button";
import ShowHide from "@commerce-ui/core/ShowHide";

import Accordion, { useAccordion } from "@commerce-ui/core/Accordion";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

const ShowHideWithButton = ({ isOpenAtStart = false, ...props }) => {
  const [isOpen, setOpen] = useState(isOpenAtStart);

  return (
    <Box>
      <Button onClick={() => setOpen(!isOpen)}>Switch</Button>
      <ShowHide {...props} isOpen={isOpen} animated={true} />
    </Box>
  );
};

export const basic = () => (
  <Box sx={{ maxWidth: "800px" }}>
    <StoryWrapper
      stories={[
        {
          name: "Standard",
          component: (
            <ShowHideWithButton sx={{ width: "500px" }}>
              <Box sx={{ height: "500px", bg: "coral", color: "white", p: 16 }}>
                Lorem świpsum
              </Box>
            </ShowHideWithButton>
          )
        },
        {
          name: "Standard, isOpen at first",
          component: (
            <ShowHideWithButton sx={{ width: "500px" }} isOpenAtStart={true}>
              <Box sx={{ height: "500px", bg: "coral", color: "white", p: 16 }}>
                Lorem świpsum
              </Box>
            </ShowHideWithButton>
          )
        }
      ]}
    />
  </Box>
);

export const accordion = () => {
  // const accordion = useAccordion({
  //     sections: [
  //         {}
  //     ]
  // });

  return (
    <Box sx={{ maxWidth: "800px" }}>
      <StoryWrapper
        stories={[
          {
            name: "Standard",
            component: (
              <Accordion sx={{ width: "500px" }}>
                <Accordion.Section key={1}>
                  <Button>Buttonix</Button>
                  <ShowHide>
                    <Box
                      sx={{
                        height: "500px",
                        bg: "coral",
                        color: "white",
                        p: 16
                      }}
                    >
                      Lorem świpsum
                    </Box>
                  </ShowHide>
                </Accordion.Section>
                <Accordion.Section key={2}>
                  <Button>Buttonix</Button>
                  <ShowHide>
                    <Box
                      sx={{
                        height: "500px",
                        bg: "coral",
                        color: "white",
                        p: 16
                      }}
                    >
                      Lorem świpsum
                    </Box>
                  </ShowHide>
                </Accordion.Section>
                <Accordion.Section key={3}>
                  <Button>Buttonix</Button>
                  <ShowHide>
                    <Box
                      sx={{
                        height: "500px",
                        bg: "coral",
                        color: "white",
                        p: 16
                      }}
                    >
                      Lorem świpsum
                    </Box>
                  </ShowHide>
                </Accordion.Section>
              </Accordion>
            )
          },
          {
            name:
              "Standard, isOpen at first, separator and styles for Accordion.Section",
            component: (
              <Accordion sx={{ width: "500px" }}>
                <Accordion.Section
                  isOpenAtInit={true}
                  sx={{ p: 16, bg: "antiquewhite" }}
                >
                  <Button sx={{ width: "100%" }}>Buttonix</Button>
                  <ShowHide>
                    <Box
                      sx={{
                        height: "500px",
                        bg: "coral",
                        color: "white",
                        p: 16
                      }}
                    >
                      Lorem świpsum
                    </Box>
                  </ShowHide>
                </Accordion.Section>
                <Box sx={{ height: "1px", bg: "black" }} />
                <Accordion.Section sx={{ p: 16, bg: "antiquewhite" }}>
                  <Button sx={{ width: "100%" }}>Buttonix</Button>
                  <ShowHide>
                    <Box
                      sx={{
                        height: "500px",
                        bg: "coral",
                        color: "white",
                        p: 16
                      }}
                    >
                      Lorem świpsum
                    </Box>
                  </ShowHide>
                </Accordion.Section>
                <Box sx={{ height: "1px", bg: "black" }} />
                <Accordion.Section sx={{ p: 16, bg: "antiquewhite" }}>
                  <Button sx={{ width: "100%" }}>Buttonix</Button>
                  <ShowHide>
                    <Box
                      sx={{
                        height: "500px",
                        bg: "coral",
                        color: "white",
                        p: 16
                      }}
                    >
                      Lorem świpsum
                    </Box>
                  </ShowHide>
                </Accordion.Section>
              </Accordion>
            )
          }
          // {
          //   name: "Controlled by hook",
          //   component: (
          //     <Box>
          //       <Accordion sx={{ width: "500px" }} controller={accordion}>
          //         <Button>Buttonix</Button>
          //         <ShowHide>
          //           <Box
          //             sx={{
          //               height: "500px",
          //               bg: "coral",
          //               color: "white",
          //               p: 16
          //             }}
          //           >
          //             Lorem świpsum
          //           </Box>
          //         </ShowHide>
          //       </Accordion>
          //       <Button
          //         onClick={() => {
          //           accordion.sections[0].toggle();
          //         }}
          //       >
          //         Toggle
          //       </Button>
          //     </Box>
          //   )
          // },
        ]}
      />
    </Box>
  );
};

export default {
  title: "ShowHide and Accordions"
};
