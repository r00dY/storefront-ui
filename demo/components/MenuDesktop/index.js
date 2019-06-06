import React, { useState, useRef, useEffect } from "react";

import Container from "storefront-ui/Container";
import LayoutLeftRightCenter from "../LayoutLeftRightCenter";
import { Button } from "../../theme/Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

/**
 * There are couple of common use cases to consider here:
 * 1. (single menu) Menu static and no stickyness -> simplest option
 * 2. (single menu) Menu fixed always. It might/might not hide/show after some treshold (headroom)
 * 3. TODO: (single menu) Menu scrollable to some point and then getting fixed. It should have extra prop "scrollableContent". Menu has position: absolute when scrolling and position: fixed when not (for the sake of not taking up space in the page).
 * 4. (double menu) System with 2 menus. One is static and second one is showing after some treshold. Only one should have renderMenuContent=true for SEO reasons. Actually it's mix of 1. and 2. (with 2. showing only when onTop=false).
 *
 * TODO: hide / show sharedProps (scrollingUp / scrollingDown). Remember about: overflow effect, resize + bars on mobile.
 */

function getActiveOffset(offsets, scrollY) {
  let offsetsCopy = { ...offsets };

  if (!offsetsCopy[0]) {
    offsetsCopy[0] = "top";
  }

  let keys = Object.keys(offsetsCopy);
  keys.sort();

  let result;
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] <= scrollY) {
      result = offsetsCopy[keys[i]];
    }
  }

  return result;
}

const MenuDesktopRaw = props => {
  const {
    overrides: { MenuBar: MenuBar, MenuButton: MenuButton },
    data,
    renderMenuContent,
    mode,
    offsets
  } = props;

  const [menuHover, setMenuHover] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const [offset, setOffset] = useState(undefined);

  const updateOffset = () => {
    setOffset(getActiveOffset(offsets, window.scrollY));
  };

  const scrollListenerRef = useRef(null);

  useEffect(
    () => {
      if (mode === "static") {
        return;
      }

      scrollListenerRef.current = window.addEventListener(
        "scroll",
        updateOffset
      );
      updateOffset();

      return function cleanup() {
        window.removeEventListener("scroll", updateOffset);
      };
    },
    [offsets, mode]
  );

  let buttons = [];

  data.forEach((menu, i) => {
    const buttonSharedProps = {
      menu,
      isActive: activeMenu === menu,
      setActive: () => setActiveMenu(menu),
      menuHover,
      offset
    };

    if (typeof MenuButton === "function") {
      buttons.push(
        <MenuButton key={i} {...buttonSharedProps}>
          {menu.label}
        </MenuButton>
      );
    } else {
      buttons.push(
        React.cloneElement(
          MenuButton,
          {
            key: i,
            onMouseEnter: buttonSharedProps.setActive,
            isSelected: buttonSharedProps.isActive
          },
          menu.label
        )
      );
    }
  });

  const sharedProps = {
    setActiveMenu,
    activeMenu,
    data,
    buttons,
    menuHover,
    offset
  };

  let containerStyles;
  if (mode === "static") {
    containerStyles = "";
  } else if (mode === "fixed") {
    containerStyles = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
    `;
  }

  return (
    <div
      css={css`
        ${containerStyles}
      `}
      onMouseEnter={() => setMenuHover(true)}
      onMouseLeave={() => {
        setMenuHover(false);
        setActiveMenu(false);
      }}
    >
      <div
        css={css`
          position: relative;
          overflow: hidden;
        `}
      >
        <div
          css={css`
          transition: transform .15s ease-out;
          // transform: ${
            isOnTop && !activeMenu ? "translateY(-100%)" : "none"
          };
        `}
        >
          <MenuBar {...sharedProps} />
        </div>
      </div>

      {renderMenuContent && (
        <>
          {data.map((menu, i) => (
            <div
              css={css`
                position: absolute;
                width: 100%;
                display: ${menu === activeMenu ? "block" : "none"};
              `}
              key={i}
            >
              {typeof menu.content === "function"
                ? menu.content(sharedProps)
                : menu.content}
            </div>
          ))}
        </>
      )}

      {!renderMenuContent && (
        <div
          css={css`
            position: absolute;
            width: 100%;
            display: ${activeMenu ? "block" : "none"};
          `}
        >
          {activeMenu &&
            (typeof activeMenu.content === "function"
              ? activeMenu.content(sharedProps)
              : activeMenu.content)}
        </div>
      )}
    </div>
  );
};

MenuDesktopRaw.defaultProps = {
  overrides: {},
  renderMenuContent: false,
  mode: "static",
  offsets: {}
};

const MenuDesktop = props => (
  <MenuDesktopRaw
    overrides={{
      MenuButton: ({ menu, isActive, setActive }) => (
        <Button kind={"minimal"} isSelected={isActive} onMouseEnter={setActive}>
          {menu.label}
        </Button>
      ),
      MenuBar: ({ buttons, offset }) => (
        <div
          css={css`
            position: relative;
            overflow: hidden;
          `}
        >
          <div
            css={css`
              background-color: lightgrey;
              transition: transform 0.15s ease-out;
              transform: ${offset === "treshold"
                ? "none"
                : "translateY(-100%)"};
            `}
          >
            <Container>
              <LayoutLeftRightCenter
                left={"LOGO"}
                right={"buttons"}
                center={buttons}
              />
            </Container>
          </div>
        </div>
      )
    }}
    renderMenuContent={true}
    mode={"fixed"}
    offsets={{
      800: "treshold"
    }}
    {...props}
  />
);

/**
 Shared props:
 - menu opened / closed
 - scrolling down
 - scrolling up
 - on top (above trigger point)
 - below top (below trigger point)
 */

export default MenuDesktop;
