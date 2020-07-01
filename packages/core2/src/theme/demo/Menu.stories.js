import React, { useState, useEffect } from "react";

import Box from "@commerce-ui/core/Box";
import Button from "@commerce-ui/core/Button";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import Container from "@commerce-ui/core/Container";
import Grid from "@commerce-ui/core/Grid";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";

import ButtonText from "@commerce-ui/core/ButtonText2";
import IconTick from "./icons/IconTick";
import IconCart from "./icons/IconCart";
import IconArrowDown from "./icons/IconArrowDown";

import MenuLayout from "@commerce-ui/core/MenuLayout";

import useScrollSegment from "@commerce-ui/core/useScrollSegment";
import useScrollDirection from "@commerce-ui/core/useScrollDirection";

import { useNotificationSystem } from "@commerce-ui/core/NotificationSystem";
import Dialog from "@commerce-ui/core/Dialog";

function Announcemenet(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bg: "main",
        color: "white",
        font: "body2",
        height: 40
      }}
    >
      {props.children}
    </Box>
  );
}

function ProductCard(props) {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          bg: "neutral400",
          pb: "130%"
        }}
      />
      <Box sx={{ mt: "s5", font: "body" }}>Product name $50</Box>
      <Box sx={{ mt: "s2", font: "body", color: "neutral800" }}>
        Short product description
      </Box>
    </Box>
  );
}

function MenuButton(props) {
  return (
    <ButtonText
      sx={{
        font: "body",
        color: "main"
      }}
      gap={"s3"}
      iconSize={20}
      {...props}
    />
  );
}

function SelectButton(props) {
  return <MenuButton rightIcon={<IconArrowDown />} {...props} />;
}

function FiltersBar({ isStuck }) {
  const notificationSystem = useNotificationSystem();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 50,
          bg: "white",
          borderBottom: t =>
            isStuck ? `1px solid ${t.colors.neutral}` : "none"
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Dialog
            width={["90vw", null, null, "50vw"]}
            anchoredTo={"window"}
            button={<SelectButton>Color</SelectButton>}
          >
            <Notification />
          </Dialog>

          <Box sx={{ width: 16 }} />
          <SelectButton>Size</SelectButton>
          <Box sx={{ width: 16 }} />
          <SelectButton>Category</SelectButton>
          <Box sx={{ width: 16 }} />
          <SelectButton>Price</SelectButton>
        </Box>

        <SelectButton
          onClick={() => {
            notificationSystem.show({
              content: ({ close }) => <Notification onClose={close} />,
              placement: "topRight",
              timeout: 5000
            });
          }}
        >
          Sort
        </SelectButton>
      </Box>
    </Container>
  );
}

function SmallMenu({ width = "auto", wrapWithContainer = false, ...props }) {
  const content = (
    <Box
      sx={{
        p: "s9",
        backgroundColor: "white",
        boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)"
      }}
    >
      <Grid cols={1} rowGap={"s5"}>
        <Box sx={{ font: "body" }}>First item</Box>
        <Box sx={{ font: "body" }}>Second item</Box>
        <Box sx={{ font: "body" }}>Third item</Box>
        <Box sx={{ font: "body" }}>Lorem ipsum dolor sit amet</Box>
      </Grid>
    </Box>
  );

  const rootStyles = {
    width,
    position: "relative"
  };

  if (wrapWithContainer) {
    return <Container sx={rootStyles}>{content}</Container>;
  }

  return <Box sx={rootStyles}>{content}</Box>;
}

function Notification({ width, height, onClose }) {
  return (
    <Box
      sx={{
        p: "s7",
        backgroundColor: "white",
        boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
        font: "body",
        width,
        height
      }}
    >
      Notification | <MenuButton onClick={onClose}>Close</MenuButton>
    </Box>
  );
}

function MenuBar(props) {
  return (
    <Box
      sx={{
        borderBottomColor: "neutral",
        borderBottomWidth: 1,
        borderBottomStyle: "solid"
      }}
    >
      {" "}
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 70,
            bg: "white",
            position: "relative"
          }}
        >
          <Box sx={{ width: 160, height: 16, border: "1px dotted black" }} />

          <Box
            sx={{
              position: "absolute",
              left: 0,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <MenuLayout.Dialog
              button={<MenuButton>Link 1</MenuButton>}
              offsetY={10}
            >
              <SmallMenu />
            </MenuLayout.Dialog>
            <Box sx={{ width: 16 }} />
            <MenuLayout.Dialog
              button={<MenuButton>Link 2</MenuButton>}
              offsetY={10}
            >
              <SmallMenu />
            </MenuLayout.Dialog>
            <Box sx={{ width: 16 }} />
            <MenuLayout.Dialog
              button={<MenuButton>Link 3</MenuButton>}
              anchoredTo={"window"}
            >
              <SmallMenu width={"100vw"} />
            </MenuLayout.Dialog>
            <Box sx={{ width: 16 }} />
            <MenuLayout.Dialog
              button={<MenuButton>Link 4</MenuButton>}
              anchoredTo={"window"}
            >
              <SmallMenu width={"100vw"} wrapWithContainer={true} />
            </MenuLayout.Dialog>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function TitleSection(props) {
  return (
    <Container sx={{ my: "s12" }}>
      <Box as={"h1"} sx={{ font: "heading", textAlign: "center" }}>
        {props.children}
      </Box>
    </Container>
  );
}

function ProductsGrid(props) {
  return (
    <Container sx={{ pb: "s12" }}>
      <Grid cols={3} rowGap={"s10"}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Container>
  );
}

export const mango = () => {
  const direction = useScrollDirection();
  const isNotAtTop = useScrollSegment({
    from: 700
  });

  const menuOpen = !isNotAtTop || (isNotAtTop && !direction);

  return (
    <MenuLayout
      contentAbove={<Announcemenet>Some example announcement</Announcemenet>}
      offset={70}
    >
      <MenuLayout.MenuBar takesSpace={false} open={menuOpen}>
        <MenuBar />
      </MenuLayout.MenuBar>

      <TitleSection>PLP Name</TitleSection>

      <MenuLayout.MenuBarSticky>
        {({ stuck }) => <FiltersBar isStuck={stuck} />}
      </MenuLayout.MenuBarSticky>

      <ProductsGrid />
    </MenuLayout>
  );
};

export default {
  title: "demo.menu"
};
