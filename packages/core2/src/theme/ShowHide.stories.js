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
  const accordion = useAccordion();

  const [open, setOpen] = useState(false);
  const accordionControlled = useAccordion({
    isOpen: open,
    onClick: e => {
      setOpen(!open);
    }
  });

  return (
    <Box sx={{ maxWidth: "800px" }}>
      <StoryWrapper
        stories={[
          {
            name: "Standard",
            component: (
              <Accordion sx={{ width: "500px" }}>
                <Button>Buttonix</Button>
                <ShowHide>
                  <Box
                    sx={{ height: "500px", bg: "coral", color: "white", p: 16 }}
                  >
                    Lorem świpsum
                  </Box>
                </ShowHide>
              </Accordion>
            )
          },
          {
            name: "Standard, isOpen at first",
            component: (
              <Accordion sx={{ width: "500px" }} isOpenAtInit={true}>
                <Button>Buttonix</Button>
                <ShowHide>
                  <Box
                    sx={{ height: "500px", bg: "coral", color: "white", p: 16 }}
                  >
                    Lorem świpsum
                  </Box>
                </ShowHide>
              </Accordion>
            )
          },
          {
            name: "Uncontrolled",
            component: (
              <Box>
                <Accordion sx={{ width: "500px" }} controller={accordion}>
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
                </Accordion>
                <Button
                  onClick={() => {
                    accordion.toggle();
                  }}
                >
                  Toggle
                </Button>
              </Box>
            )
          },
          {
            name: "Controlled",
            component: (
              <Box>
                <Accordion
                  sx={{ width: "500px" }}
                  controller={accordionControlled}
                >
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
                </Accordion>
                <Button
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  Toggle
                </Button>
              </Box>
            )
          }
        ]}
      />
    </Box>
  );
};

export default {
  title: "ShowHide and Accordions"
};
