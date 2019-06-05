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
    overrides: { MenuBar: MenuBar },
    data
  } = props;

  const sharedProps = {
    onMouseEnter: menuItem => {
      setMenuActive(menuItem);
    },
    onMouseLeave: menuItem => {},
    menuActive,
    data
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

      <div
        css={css`
          position: absolute;
          width: 100%;
          // transition: opacity .1s;
          visibility: ${menuActive ? "visible" : "hidden"};
          opacity: ${menuActive ? "1" : "0"};
        `}
      >
        {menuActive &&
          (typeof menuActive.content === "function"
            ? menuActive.content(sharedProps)
            : menuActive.content)}
      </div>
    </div>
  );
};

MenuDesktopRaw.defaultProps = {
  overrides: {}
};

const MenuDesktop = props => (
  <MenuDesktopRaw
    overrides={{
      MenuBar: ({ onMouseEnter, onMouseLeave, menuActive, data }) => (
        <div
          css={css`
            background-color: lightgrey;
          `}
        >
          <Container>
            <LayoutLeftRightCenter
              left={"LOGO"}
              right={"buttons"}
              center={
                <div
                  css={css`
                    position: relative;
                    height: 50px;
                    display: flex;
                    align-items: center;
                  `}
                >
                  {data.map(menuItem => (
                    <Button
                      kind={"minimal"}
                      onMouseEnter={() => onMouseEnter(menuItem)}
                    >
                      {menuItem.label}
                    </Button>
                  ))}
                </div>
              }
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
