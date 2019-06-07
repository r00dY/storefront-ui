import React, { useState } from "react";

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

const MenuDesktop$ = props => {
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

MenuDesktop$.defaultProps = {
  overrides: {},
  renderMenuContent: false,
  mode: "static",
  offsets: {}
};

export { MenuDesktop$ };
