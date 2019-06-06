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

// takes overflow of Safari iOS into account
const getNormalizedScrollY = () => {
  const scrollY = window.scrollY;

  if (
    scrollY >= document.documentElement.scrollHeight - window.innerHeight ||
    scrollY < 0
  ) {
    return null;
  }

  return scrollY;
};

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

  const [hideable, setHideable] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const previousScrollY = useRef(null);
  const timeout = useRef(null);

  // wrapper to have access to up-to-date values in updateScroll closure
  const wrapper = useRef({});
  wrapper.current.blocked = blocked;
  wrapper.current.hideable = hideable;

  const updateScroll = () => {
    const scrollY = getNormalizedScrollY();
    if (scrollY === null) {
      return;
    }

    setOffset(getActiveOffset(offsets, scrollY));

    if (previousScrollY.current !== null) {
      let newHideable;

      if (scrollY > previousScrollY.current) {
        newHideable = true;
      } else {
        newHideable = false;
      }

      if (
        newHideable !== wrapper.current.hideable &&
        !wrapper.current.blocked
      ) {
        setHideable(newHideable);

        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
          setBlocked(false);
        }, 300);

        setBlocked(true);
      }
    }

    previousScrollY.current = scrollY;
  };

  useEffect(
    () => {
      if (mode === "static") {
        return;
      }

      window.addEventListener("scroll", updateScroll);
      updateScroll();

      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
        clearTimeout(timeout.current);
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
      offset,
      hideable
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
    offset,
    hideable
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
  offsets: {},
  tolerance: 0
};

const MenuDesktop = props => (
  <MenuDesktopRaw
    overrides={{
      MenuButton: ({ menu, isActive, setActive }) => (
        <Button kind={"minimal"} isSelected={isActive} onMouseEnter={setActive}>
          {menu.label}
        </Button>
      ),
      MenuBar: ({ buttons, offset, hideable }) => (
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

              transform: ${offset === "treshold" && hideable
                ? "translateY(-100%)"
                : "none"};

              border-bottom: ${offset === "treshold" || offset === "not-top"
                ? "1px solid black;"
                : "none"};
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
      1: "not-top",
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
