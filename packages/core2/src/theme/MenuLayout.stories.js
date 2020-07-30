import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import Box from "@commerce-ui/core/Box";
import { useTheme } from "@commerce-ui/core/Theme";
import MenuLayout from "@commerce-ui/core/MenuLayout";
import Button from "./Button/Button";
import Link from "@commerce-ui/core/Link";

import Button$ from "@commerce-ui/core/Button";

import Container from "@commerce-ui/core/Container";
import Grid from "@commerce-ui/core/Grid";

import { useNotificationSystem } from "@commerce-ui/core/NotificationSystem";
import Dialog from "@commerce-ui/core/Dialog";

import runOnRouteChange from "@commerce-ui/core/runOnRouteChange";

import useScrollDirection from "@commerce-ui/core/useScrollDirection";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const VeryLongContent = props => (
  <Box sx={{ p: [16, null, 32], maxWidth: 700 }}>
    {props.children}
    {[...Array(10)].map((e, i) => (
      <Box as={"p"} sx={{ mt: 20 }} key={i}>
        {LOREM}
      </Box>
    ))}
  </Box>
);

const MenuBar = ({ children, color }) => (
  <Box
    sx={{
      position: "relative",
      bg: color,
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {children}
  </Box>
);

const MenuButton = props => (
  <Button$ {...props} sx={{ height: 40, px: 10 }}>
    {({ selected, isHovered }) => (
      <Box
        sx={{ textDecoration: selected || isHovered ? "underline" : "none" }}
      >
        {props.children}
      </Box>
    )}
  </Button$>
);

const MenuContent = ({
  items,
  isVisible,
  width = "auto",
  rightBox = false,
  bg = "transparent",
  animated = true
}) => (
  <Box
    sx={{
      py: width === "auto" ? 32 : 64,
      px: width === "auto" ? 32 : 128,
      opacity: isVisible ? 1 : 0,
      transition: !animated ? "none" : isVisible ? "all .5s .15s" : "all .05s",
      minWidth: 400,
      bg,
      width
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <Grid rowGap={16} cols={1}>
        {items.map((item, index) => (
          <Box key={index}>{item}</Box>
        ))}
        <Button
          onClick={() => {
            runOnRouteChange();
          }}
        >
          Mock route change
        </Button>
      </Grid>

      {rightBox && (
        <Box sx={{ width: 300, height: 200, bg: rightBox, mr: 100 }} />
      )}
    </Box>
  </Box>
);

const ITEMS1 = ["Lorem", "Ipsum dolor", "Sit", "Amet latino"];
const ITEMS2 = [
  "Dog",
  "Cat",
  "Dolphin",
  "Fish",
  "Racoon",
  "Long named animal",
  "Chicken",
  "Whale",
  "Tiger"
];

export const basic = () => {
  const [menu1Open, setMenu1Open] = useState(true);
  const [menu2Open, setMenu2Open] = useState(true);
  const [menu3Open, setMenu3Open] = useState(true);
  const [menu4Open, setMenu4Open] = useState(true);

  const notificationSystem = useNotificationSystem();

  const scrollDirection = useScrollDirection();

  useEffect(
    () => {
      if (scrollDirection) {
        setMenu3Open(true);
      } else {
        setMenu3Open(false);
      }
    },
    [scrollDirection]
  );

  const contentWithButtons = (
    <VeryLongContent>
      <button onClick={() => setMenu1Open(!menu1Open)}>Menu 1 toggle</button>
      &nbsp;
      <button onClick={() => setMenu2Open(!menu2Open)}>Menu 2 toggle</button>
      &nbsp;
      <button onClick={() => setMenu3Open(!menu3Open)}>Menu 3 toggle</button>
      &nbsp;
      <button onClick={() => setMenu4Open(!menu4Open)}>Menu 4 toggle</button>
      &nbsp;
      <button
        onClick={() => {
          setMenu2Open(!menu2Open);
          setMenu3Open(!menu3Open);
        }}
      >
        Toggle 2 & 3
      </button>
      &nbsp;
      <button
        onClick={() => {
          notificationSystem.show({
            content: (
              <Box sx={{ bg: "white", border: "1px solid black" }}>Dupa</Box>
            ),
            placement: "topRight"
          });
        }}
      >
        Show notification top left
      </button>
      &nbsp;
      <Dialog
        minWidth={["90vw", null, null, "300px"]}
        button={<Button>Open</Button>}
        anchoredTo={"window"}
        root={{
          border: "1px solid black",
          bg: "red"
        }}
      >
        <Button>One</Button>
        <br />
        <br />
        <Button>Two</Button>
        <br />
        <br />
        <Button>Three</Button>
        <br />
        <br />
        <Button>Four</Button>
        <br />
        <br />
      </Dialog>
    </VeryLongContent>
  );

  const menu1 = MenuLayout.useDialogs({
    animationTimeout: 350,
    items: [
      {
        button: <MenuButton>Lorem</MenuButton>,
        content: ({ isVisible }) => (
          <MenuContent items={ITEMS1} isVisible={isVisible} />
        ),
        hideOnLinkClick: true
      },
      {
        button: <MenuButton>Ipsum</MenuButton>,
        content: ({ isVisible }) => (
          <MenuContent items={ITEMS2} isVisible={isVisible} />
        ),
        offsetY: 20
      },
      {
        button: <MenuButton>Dolor</MenuButton>,
        content: ({ isVisible }) => (
          <MenuContent
            items={[...ITEMS1, ...ITEMS1]}
            isVisible={isVisible}
            width={"100vw"}
            rightBox={"black"}
          />
        ),
        anchoredTo: "window"
      },
      {
        button: <MenuButton>Amet</MenuButton>,
        content: ({ isVisible }) => (
          <MenuContent
            items={[...ITEMS2, ...ITEMS2]}
            isVisible={isVisible}
            width={"100vw"}
            rightBox={"antiquewhite"}
          />
        ),
        anchoredTo: "window"
      }
    ],
    backgroundStyles: ({ isVisible }) => ({
      backgroundColor: "white",
      boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
      height: isVisible ? "100%" : 0
    })
  });

  const menu2 = MenuLayout.useDialogs({
    animationTimeout: 350,
    items: [
      {
        button: <MenuButton>Lorem</MenuButton>,
        content: ({ isVisible }) => (
          <MenuContent items={ITEMS1} isVisible={isVisible} />
        )
      },
      {
        button: <MenuButton>Ipsum</MenuButton>,
        content: ({ isVisible }) => (
          <MenuContent items={ITEMS2} isVisible={isVisible} />
        ),
        offsetY: 20
      }
    ],
    openOnHover: false,
    backgroundStyles: ({ isVisible }) => ({
      backgroundColor: "white",
      boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
      opacity: isVisible ? 1 : 0
    })
  });

  return (
    <MenuLayout
      offset={100}
      contentAbove={
        <Box
          sx={{
            bg: "black",
            color: "white",
            p: 20,
            width: "100%",
            textAlign: "center"
          }}
        >
          Here comes a long message about newsletter signup, promotions or any
          other special news.
        </Box>
      }
    >
      <MenuLayout.MenuBar open={menu1Open} takesSpace={true}>
        <MenuBar color={"lightblue"}>{menu1.buttons}</MenuBar>
      </MenuLayout.MenuBar>

      <MenuLayout.MenuBar open={menu2Open} takesSpace={false}>
        <MenuBar color={"coral"}>{menu2.buttons}</MenuBar>
      </MenuLayout.MenuBar>

      <MenuLayout.MenuBar open={menu3Open} takesSpace={false}>
        <MenuBar color={"antiquewhite"}>
          <MenuLayout.Dialog
            button={<MenuButton>Open item</MenuButton>}
            offsetY={10}
            animationTimeout={350}
          >
            {({ isVisible }) => (
              <MenuContent
                items={ITEMS2}
                isVisible={isVisible}
                bg={"antiquewhite"}
              />
            )}
          </MenuLayout.Dialog>

          <MenuLayout.Dialog
            button={<MenuButton>Open item 2</MenuButton>}
            offsetY={10}
            animationTimeout={350}
          >
            {({ isVisible }) => (
              <MenuContent items={ITEMS1} isVisible={isVisible} bg={"coral"} />
            )}
          </MenuLayout.Dialog>

          <MenuLayout.Dialog
            button={
              <MenuButton>
                Open item (content not a function, not animated)
              </MenuButton>
            }
            offsetY={10}
          >
            <MenuContent
              items={ITEMS1}
              isVisible={true}
              bg={"antiquewhite"}
              animated={false}
            />
          </MenuLayout.Dialog>
        </MenuBar>
      </MenuLayout.MenuBar>

      {contentWithButtons}

      <MenuLayout.MenuBarSticky open={menu4Open}>
        {({ stuck }) => (
          <MenuBar color={stuck ? "powderblue" : "royalblue"}>
            Menu bar content lorem ipsum dolro sit amet
          </MenuBar>
        )}
      </MenuLayout.MenuBarSticky>

      {contentWithButtons}

      {contentWithButtons}
    </MenuLayout>
  );
};

export default {
  title: "MenuLayout"
};
