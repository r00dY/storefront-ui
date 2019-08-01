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
import SectionTitle from "../../pages";
import { Banner, BannerInner } from "../Banner";
import { ProductCardTheme1 } from "../ProductCard";

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
                  height={70}
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
            <div>
              {data.categories.map((category, i) => {
                if (i > -1) {
                  return;
                }
                return (
                  <div
                    css={css`
                      background: white;
                      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
                    `}
                  >
                    <Container>
                      <div
                        css={css`
                          padding: ${theme.spacings.s100}px 0;
                        `}
                      >
                        {/*<div css={css`${theme.fonts.h5.css}`}>*/}
                        {/*{category.name}*/}
                        {/*</div>*/}
                        <div
                          css={css`
                            display: flex;
                          `}
                        >
                          <div
                            css={css`
                              display: flex;
                              flex-direction: column;
                              max-height: 500px;
                              flex-wrap: wrap;
                              align-content: flex-start;
                              justify-content: flex-start;
                              width: 75%;
                            `}
                          >
                            {category.subcats.map((subcat, j) => (
                              <div
                                css={css`
                                  width: 33.33%;
                                  a {
                                    color: inherit;
                                    text-decoration: none;
                                  }
                                `}
                              >
                                <div
                                  css={css`${
                                    theme.fonts.h6.css
                                  } margin-bottom: ${
                                    theme.spacings.s40
                                  }px; color: ${
                                    theme.colors.primary.css
                                  }; a:hover {color:${
                                    theme.colors.primary600.css
                                  }; }`}
                                >
                                  <a href="#">{subcat.name}</a>
                                </div>
                                <div
                                  css={css`
                                    padding-bottom: ${theme.spacings.s80}px;
                                  `}
                                >
                                  {subcat.links &&
                                    subcat.links.map((link, k) => (
                                      <div
                                        css={css`${
                                          theme.fonts.body2.css
                                        } line-height: 2; a:hover {color: ${
                                          theme.colors.mono500.css
                                        };`}
                                      >
                                        <a href="">{link}</a>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div
                            css={css`
                              width: 25%;
                              padding-left: ${theme.spacings.s40}px;
                            `}
                          >
                            {i === 0 && (
                              <ProductCardTheme1 product={data.products[0]} />
                            )}
                            {i === 1 && (
                              <Banner
                                image={data.products[1].images[0]}
                                element={
                                  <BannerInner text={"The Tonal Trend"} />
                                }
                                elementFlexAlign={"flex-end"}
                                elementFullWidth
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                );
              })}
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
