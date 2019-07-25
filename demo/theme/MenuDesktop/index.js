import React from "react";

import { MenuDesktop$ } from "storefront-ui/MenuDesktop";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import LayoutRow from "storefront-ui/LayoutRow";
import useScrollDirection from "storefront-ui/useScrollDirection";
import useScrollSegment from "storefront-ui/useScrollSegment";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";

import { Button } from "../Button";
import data from "../../data";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { StatefulPopover } from "../Popover";
import MiniBasketContent from "../MiniBasketContent";

import IconSearch from "./outline-search-24px.svg";
import IconCart from "./outline-shopping_cart-24px.svg";
import IconMenu from "./baseline-menu-24px.svg";
import IconAccount from "./baseline-account_circle-24px.svg";

const MenuDesktop = props => {
  const basketProducts = data.products;

  const theme = useTheme();
  const direction = useScrollDirection();
  const segment = useScrollSegment({ 1: "not-top", 1000: "hideable" });

  const MenuButton = props => (
    <Button
      {...props}
      kind={"minimal"}
      css={css`
        color: ${theme.colors.mono800.css};
        span {
          ${theme.fonts.caption.css}
        }
        svg {
          width: 24px;
          fill: currentColor;
        }
      `}
    >
      {props.children}
    </Button>
  );

  return (
    <MenuDesktop$
      overrides={{
        MenuButton: ({ index, menu, isActive, setActive, buttonProps }) => (
          <MenuButton
            key={index}
            kind={"minimal"}
            isSelected={isActive}
            {...buttonProps}
          >
            {menu.label}
          </MenuButton>
        ),
        MenuBar: ({ buttons }) => (
          <div
            css={css`
              position: relative;
            `}
          >
            <div
              css={css`
                background-color: white;
                transition: all 0.15s ease-out;

                transform: ${segment === "hideable" && direction === true
                  ? "translateY(-100%)"
                  : "none"};

                box-shadow: ${segment === "hideable" || segment === "not-top"
                  ? "0 4px 16px rgba(0,0,0,0.16)"
                  : "none"};
              `}
            >
              <Container>
                <LayoutLeftCenterRight
                  height={50}
                  left={
                    <LayoutRow>
                      <div
                        css={css`
                          ${theme.fonts.h6.css} a {
                            text-decoration: none;
                            color: ${theme.colors.mono900.css};
                          }
                        `}
                      >
                        <a href={"#"}>SuperStore</a>
                      </div>
                    </LayoutRow>
                  }
                  right={
                    <div>
                      <MenuButton>
                        <IconAccount />
                      </MenuButton>
                      <MenuButton>
                        <IconSearch />
                      </MenuButton>
                      <StatefulPopover
                        content={
                          <MiniBasketContent products={basketProducts} />
                        }
                        accessibilityType={"tooltip"}
                        placement={StatefulPopover.PLACEMENT.bottomRight}
                        overrides={{
                          Inner: {
                            style: `background: white;`
                          }
                        }}
                      >
                        <MenuButton>
                          <IconCart />
                          <span>{basketProducts.length}</span>
                        </MenuButton>
                      </StatefulPopover>
                    </div>
                  }
                  center={buttons}
                />
              </Container>
            </div>
          </div>
        )
      }}
      renderMenuContent={true}
      mode={"fixed"}
      debounce={200}
      {...props}
    />
  );
};

export default MenuDesktop;
