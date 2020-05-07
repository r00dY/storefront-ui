import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import Box from "@commerce-ui/core/Box";
import { useTheme } from "@commerce-ui/core/Theme";
import MenuLayout from "@commerce-ui/core/MenuLayout";
import Button from "./Button/Button";

import Button$ from "@commerce-ui/core/Button";

import Container from "@commerce-ui/core/Container";
import Grid from "@commerce-ui/core/Grid";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const VeryLongContent = props => (
  <Box sx={{ p: [16, null, 32], maxWidth: 700, bg: "#f1f1f1" }}>
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

const getContent = (text = "Dupa", padding = 40) => ({
  content: ({ isBeforeAnimation, isVisible, isFirst }) => (
    <Box
      sx={{
        p: padding,
        color: "black",
        transition: `opacity ..35s`, // ${isVisible ? '.1s' : ''}`,// ${isBeforeAnimation && !isVisible && !isFirst ? ".35s" : ""}`, // delay only if "from layer to layer" and when show
        opacity: isVisible ? 1 : 0
      }}
    >
      {text}
    </Box>
  ),

  background: ({ isBeforeAnimation, isVisible }) => ({
    opacity: isVisible ? 1 : 0 // first opacity the
  })
});

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
  rightBox = false
}) => (
  <Box
    sx={{
      py: width === "auto" ? 32 : 64,
      px: width === "auto" ? 32 : 128,
      opacity: isVisible ? 1 : 0,
      transition: isVisible ? "all .5s .15s" : "all .05s",
      minWidth: 400,
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
        {items.map(item => (
          <Box key={item}>{item}</Box>
        ))}
      </Grid>

      {rightBox && (
        <Box sx={{ width: 300, height: 200, bg: rightBox, mr: 100 }} />
      )}
    </Box>
  </Box>
);

export const basic = () => {
  const [menu1Open, setMenu1Open] = useState(true);
  const [menu2Open, setMenu2Open] = useState(true);
  const [menu3Open, setMenu3Open] = useState(true);
  const [menu4Open, setMenu4Open] = useState(true);

  const [layer1Open, setLayer1Open] = useState(false);

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
      <button onClick={() => setLayer1Open(!layer1Open)}>Toggle layer 1</button>
    </VeryLongContent>
  );

  const { buttons, layers, hide } = MenuLayout.useLayers([
    {
      button: <MenuButton>Lorem</MenuButton>,
      content: ({ isVisible }) => (
        <MenuContent
          items={["Lorem", "Ipsum dolor", "Sit", "Amet latino"]}
          isVisible={isVisible}
        />
      ),
      openOnHover: true
    },
    {
      button: <MenuButton>Ipsum</MenuButton>,
      content: ({ isVisible }) => (
        <MenuContent
          items={[
            "Dog",
            "Cat",
            "Dolphin",
            "Fish",
            "Racoon",
            "Long named animal",
            "Chicken",
            "Whale",
            "Tiger"
          ]}
          isVisible={isVisible}
        />
      ),
      offsetY: 20,
      openOnHover: true
    },
    {
      button: <MenuButton>Dolor</MenuButton>,
      content: ({ isVisible }) => (
        <MenuContent
          items={[
            "Lorem",
            "Ipsum dolor",
            "Sit",
            "Amet latino",
            "Lorem",
            "Ipsum dolor",
            "Sit",
            "Amet latino"
          ]}
          isVisible={isVisible}
          width={"100vw"}
          rightBox={"black"}
        />
      ),
      anchoredTo: "window",
      openOnHover: true
    },
    {
      button: <MenuButton>Amet</MenuButton>,
      content: ({ isVisible }) => (
        <MenuContent
          items={[
            "Dog",
            "Cat",
            "Dolphin",
            "Fish",
            "Racoon",
            "Long named animal",
            "Chicken",
            "Whale",
            "Tiger",
            "Dog",
            "Cat",
            "Dolphin",
            "Fish",
            "Racoon",
            "Long named animal",
            "Chicken",
            "Whale",
            "Tiger"
          ]}
          isVisible={isVisible}
          width={"100vw"}
          rightBox={"antiquewhite"}
        />
      ),
      anchoredTo: "window",
      openOnHover: true
    }
  ]);

  return (
    <MenuLayout
      offset={0}
      contentAbove={
        <Box sx={{ bg: "black", color: "white", p: 20, width: "100%" }}>
          Here comes a long message about newsletter signup, promotions or any
          other special news.
          {/*{buttons} &nbsp;{" "}*/}
          {/*<Button*/}
          {/*onClick={() => {*/}
          {/*hide();*/}
          {/*}}*/}
          {/*>*/}
          {/*Hide*/}
          {/*</Button>*/}
          {/*{layers}*/}
        </Box>
      }
    >
      <MenuLayout.MenuBar open={menu1Open} takesSpace={true}>
        <MenuBar color={"lightblue"}>
          {buttons}
          {layers}

          {/*<Box as={"p"} ref={textRef}>*/}
          {/*Menu bar content lorem ipsum dolro sit amet*/}
          {/*</Box>*/}
          {/*<MenuLayout.Layer*/}
          {/*posX={"left"}*/}
          {/*offsetY={10}*/}
          {/*offsetX={0}*/}
          {/*button={<Button>Open menu</Button>}*/}
          {/*>*/}
          {/*<Box*/}
          {/*sx={{*/}
          {/*position: "relative",*/}
          {/*overflow: "hidden"*/}
          {/*}}*/}
          {/*>*/}
          {/*<Box*/}
          {/*sx={{*/}
          {/*p: 40,*/}
          {/*bg: "white"*/}
          {/*}}*/}
          {/*>*/}
          {/*Dupa*/}
          {/*</Box>*/}
          {/*</Box>*/}
          {/*</MenuLayout.Layer>*/}
          {/*&nbsp;&nbsp;*/}
          {/*<MenuLayout.Layer*/}
          {/*posX={"left"}*/}
          {/*offsetY={10}*/}
          {/*offsetX={0}*/}
          {/*button={<Button>Open menu</Button>}*/}
          {/*>*/}
          {/*<Box*/}
          {/*sx={{*/}
          {/*// opacity: before ? 0 : 1,*/}
          {/*position: "relative",*/}
          {/*overflow: "hidden"*/}
          {/*}}*/}
          {/*>*/}
          {/*<Box*/}
          {/*sx={{*/}
          {/*p: 100,*/}
          {/*bg: "white"*/}
          {/*}}*/}
          {/*>*/}
          {/*Dupa 2*/}
          {/*</Box>*/}
          {/*</Box>*/}
          {/*</MenuLayout.Layer>*/}
          {/*&nbsp;&nbsp;*/}
          {/*<MenuLayout.Layer*/}
          {/*posX={"left"}*/}
          {/*offsetY={0}*/}
          {/*offsetX={0}*/}
          {/*button={<Button>Open menu window</Button>}*/}
          {/*anchoredTo={"window"}*/}
          {/*width={"100%"}*/}
          {/*>*/}
          {/*<Box*/}
          {/*sx={{*/}
          {/*// opacity: before ? 0 : 1,*/}
          {/*position: "relative",*/}
          {/*overflow: "hidden"*/}
          {/*}}*/}
          {/*>*/}
          {/*<Box*/}
          {/*sx={{*/}
          {/*p: 100,*/}
          {/*bg: "white"*/}
          {/*}}*/}
          {/*>*/}
          {/*Dupa 2*/}
          {/*</Box>*/}
          {/*</Box>*/}
          {/*</MenuLayout.Layer>*/}
          {/*&nbsp;&nbsp;*/}
          {/*<MenuLayout.Layer*/}
          {/*posX={"left"}*/}
          {/*offsetY={10}*/}
          {/*offsetX={0}*/}
          {/*openOnHover={false}*/}
          {/*button={<Button>Open menu click</Button>}*/}
          {/*>*/}
          {/*<Box*/}
          {/*sx={{*/}
          {/*p: 40,*/}
          {/*bg: "white"*/}
          {/*}}*/}
          {/*>*/}
          {/*Dupa*/}
          {/*</Box>*/}
          {/*</MenuLayout.Layer>*/}
        </MenuBar>
      </MenuLayout.MenuBar>

      <MenuLayout.MenuBar open={menu2Open} takesSpace={false}>
        <MenuBar color={"coral"}>
          Menu bar content lorem ipsum dolro sit amet
        </MenuBar>
      </MenuLayout.MenuBar>

      <MenuLayout.MenuBar open={menu3Open} takesSpace={false}>
        <MenuBar color={"antiquewhite"}>
          Menu bar content lorem ipsum dolro sit amet
        </MenuBar>
      </MenuLayout.MenuBar>

      {contentWithButtons}

      <br />

      <button
        onClick={() => {
          setIndex(0);
        }}
      >
        open 1
      </button>
      <button
        onClick={() => {
          setIndex(1);
        }}
      >
        open 2
      </button>
      <button
        onClick={() => {
          setIndex(2);
        }}
      >
        open 3
      </button>
      <button
        onClick={() => {
          setIndex(3);
        }}
      >
        open 4
      </button>
      <button
        onClick={() => {
          setIndex(null);
        }}
      >
        hide
      </button>

      <MenuLayout.MenuBarSticky open={menu4Open}>
        <MenuBar color={"royalblue"}>
          Menu bar content lorem ipsum dolro sit amet
        </MenuBar>
      </MenuLayout.MenuBarSticky>

      {contentWithButtons}

      <Box sx={{ position: "relative", transform: "translateY(-100%)" }}>
        <MenuBar color={"red"}>
          Menu bar content lorem ipsum dolro sit amet
        </MenuBar>
      </Box>
      <br />
      <br />

      {contentWithButtons}
    </MenuLayout>
  );
};

export default {
  title: "MenuLayout"
};
