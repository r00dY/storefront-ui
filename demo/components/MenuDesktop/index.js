import React, { useState, useRef, useEffect } from "react";

import Container from "storefront-ui/Container";
import LayoutLeftRightCenter from "../LayoutLeftRightCenter";
import { Button } from "../../theme/Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

/**
 * There are couple of common use cases to consider here:
 * 1. (single menu) Menu static and no stickyness -> simplest option
 * 2. (single menu) Menu fixed always. It might optionally hide/show on scroll down/up.
 * 3. TODO: (single menu) Menu scrollable to some point and then getting fixed. It should have extra prop "scrollableContent". Menu has position: absolute when scrolling and position: fixed when sticky (for the sake of not taking up space in the page).
 * 4. (double menu) System with 2 menus. One is static and second one is showing after some treshold. Only one should have renderMenuContent=true for SEO reasons. Actually it's mix of 1. and 2. (with 2. showing only when onTop=false).
 *
 */

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

function useScrollDirection(options) {
  options = options || {};
  const { timeDebounce } = options;

  const [direction, setDirection] = useState(undefined);
  const [blocked, setBlocked] = useState(false);

  // wrapper to have access to up-to-date values in updateScroll closure
  const wrapper = useRef({});
  wrapper.current.blocked = blocked;
  wrapper.current.direction = direction;

  const previousScrollY = useRef(null);
  const timeout = useRef(null);

  useEffect(
    () => {
      const updateScroll = () => {
        const scrollY = getNormalizedScrollY();
        if (scrollY === null) {
          return;
        }

        if (previousScrollY.current !== null) {
          let newDirection;

          if (scrollY > previousScrollY.current) {
            newDirection = true;
          } else {
            newDirection = false;
          }

          if (
            newDirection !== wrapper.current.direction &&
            !wrapper.current.blocked
          ) {
            setDirection(newDirection);

            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
              setBlocked(false);
            }, timeDebounce);

            setBlocked(true);
          }
        }

        previousScrollY.current = scrollY;
      };

      window.addEventListener("scroll", updateScroll);
      updateScroll();

      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
        clearTimeout(timeout.current);
      };
    },
    [timeDebounce]
  );

  return direction;
}

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

function useScrollSegmentDetector(segments) {
  const [segment, setSegment] = useState(undefined);

  useEffect(
    () => {
      const updateScroll = () => {
        setSegment(getActiveOffset(segments, window.scrollY));
      };

      window.addEventListener("scroll", updateScroll);
      updateScroll();

      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    },
    [segments]
  );

  return segment;
}

const MenuDesktopRaw = props => {
  const {
    overrides: { MenuBar: MenuBar, MenuButton: MenuButton },
    data,
    renderMenuContent,
    mode
  } = props;

  const [menuHover, setMenuHover] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  let buttons = [];

  data.forEach((menu, i) => {
    const buttonSharedProps = {
      menu,
      isActive: activeMenu === menu,
      setActive: () => setActiveMenu(menu),
      menuHover
    };

    buttons.push(MenuButton({ index: i, ...buttonSharedProps }));
  });

  const sharedProps = {
    setActiveMenu,
    activeMenu,
    data,
    buttons,
    menuHover
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
      {MenuBar(sharedProps)}

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

const MenuDesktop = props => {
  const direction = useScrollDirection();
  const segment = useScrollSegmentDetector({ 1: "not-top", 1000: "treshold" });

  return (
    <MenuDesktopRaw
      overrides={{
        MenuButton: ({ index, menu, isActive, setActive }) => (
          <Button
            key={index}
            kind={"minimal"}
            isSelected={isActive}
            onMouseEnter={setActive}
          >
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

                transform: ${segment === "treshold" && direction === true
                  ? "translateY(-100%)"
                  : "none"};

                border-bottom: ${segment === "treshold" || segment === "not-top"
                  ? "1px solid black"
                  : "none"};
              `}
            >
              <Container>
                <LayoutLeftRightCenter
                  left={"Logo"}
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
      {...props}
    />
  );
};

export default MenuDesktop;
