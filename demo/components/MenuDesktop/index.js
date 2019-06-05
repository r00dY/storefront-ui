import React, { useState } from "react";

import Container from "storefront-ui/Container";
import LayoutLeftRightCenter from "../LayoutLeftRightCenter";
import { Button } from "../../theme/Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const MenuDesktopRaw = props => {
  const [menuHover, setMenuHover] = useState(false);
  const [menuActive, setMenuActive] = useState(null);

  const {
    overrides: { MenuBar: MenuBar, MenuButton: MenuButton },
    data,
    renderMenuContent
  } = props;

  let buttons = [];

  data.forEach(menuItem => {
    const buttonSharedProps = {
      menuItem,
      isActive: menuActive === menuItem,
      setActive: () => setMenuActive(menuItem)
    };

    if (typeof MenuButton === "function") {
      buttons.push(
        <MenuButton {...buttonSharedProps}>{menuItem.label}</MenuButton>
      );
    } else {
      buttons.push(
        React.cloneElement(
          MenuButton,
          {
            onMouseEnter: buttonSharedProps.setActive,
            isSelected: buttonSharedProps.isActive
          },
          menuItem.label
        )
      );
    }
  });

  const sharedProps = {
    onMouseEnter: menuItem => {
      setMenuActive(menuItem);
    },
    menuActive,
    data,
    buttons
  };

  return (
    <div
      css={css`
        position: relative;
        z-index: 1000;
      `}
      onMouseEnter={() => setMenuHover(true)}
      onMouseLeave={() => {
        setMenuHover(false);
        setMenuActive(false);
      }}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <MenuBar {...sharedProps} />
      </div>

      {renderMenuContent && (
        <>
          {data.map(menuItem => (
            <div
              css={css`
                position: absolute;
                width: 100%;
                display: ${menuItem === menuActive ? "block" : "none"};
              `}
            >
              {typeof menuItem.content === "function"
                ? menuItem.content(sharedProps)
                : menuItem.content}
            </div>
          ))}
        </>
      )}

      {!renderMenuContent && (
        <div
          css={css`
            position: absolute;
            width: 100%;
            display: ${menuActive ? "block" : "none"};
          `}
        >
          {menuActive &&
            (typeof menuActive.content === "function"
              ? menuActive.content(sharedProps)
              : menuActive.content)}
        </div>
      )}
    </div>
  );
};

MenuDesktopRaw.defaultProps = {
  overrides: {},
  renderMenuContent: false
};

const MenuDesktop = props => (
  <MenuDesktopRaw
    overrides={{
      MenuButton: ({ menuItem, isActive, setActive }) => (
        <Button kind={"minimal"} isSelected={isActive} onMouseEnter={setActive}>
          {menuItem.label}
        </Button>
      ),
      MenuBar: ({ buttons }) => (
        <div
          css={css`
            background-color: lightgrey;
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
      )
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
