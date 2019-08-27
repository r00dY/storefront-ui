import React, { useState } from "react";

import { Modal } from "../Modal";

import { MenuDesktop$ } from "storefront-ui/MenuDesktop";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import LayoutRow from "storefront-ui/LayoutRow";
import useScrollDirection from "storefront-ui/useScrollDirection";
import useScrollSegment from "storefront-ui/useScrollSegment";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";
import Link from "next/link";

import { Button } from "../Button";
import { ButtonRaw } from "../ButtonRaw";

import MiniBasketContent from "../MiniBasketContent";

import IconSearch from "../../svg/search.svg";
import IconCart from "../../svg/cart.svg";
import IconAccount from "../../svg/account.svg";
import Banner from "../../components/Banner";
import { Ledger } from "../Ledger";
import ProfileLogInContent from "../ProfileLogInContent";
import ThemeLink from "../ThemeLink";

import routerPush from "../../helpers/routerPush";
import data from "../../data";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const MenuDesktopContent = props => {
  const { category } = props;
  const theme = useTheme();

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
                  `}
                >
                  <div
                    css={css`
                      padding-right: 1em;
                      margin-bottom: ${theme.spacings.s40}px;
                      ${theme.fonts.body1.css}
                    `}
                  >
                    <Link href={"/collection"}>
                      <ThemeLink href={"/collection"}>{subcat.name}</ThemeLink>
                    </Link>
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
                          <Link href={"/category"}>
                            <ThemeLink href={"/category"} kind={"secondary"}>
                              {link}
                            </ThemeLink>
                          </Link>
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
              <Banner
                image={
                  [
                    data.images.boxes.half_box_01,
                    data.images.boxes.half_box_04,
                    data.images.boxes.half_box_03,
                    data.images.boxes.half_box_08
                  ][props.index]
                }
                href={"/collection"}
                label={"The Tonal Trend"}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const MenuDesktop = props => {
  const [opened, setOpened] = useState(false);
  const [profileOpened, setProfileOpened] = useState(false);

  const theme = useTheme();
  const segment = useScrollSegment({ 1: "not-top", 1000: "hideable" });

  const IconButton = props => (
    <ButtonRaw
      css={css`
        position: relative;

        color: ${theme.colors.mono800.css};
        span {
          ${theme.fonts.caption.css}
        }
        svg {
          width: 24px;
          fill: currentColor;
        }

        &:hover {
          opacity: 0.66;
        }
      `}
      {...props}
    >
      <div
        css={css`
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          background: white;
          opacity: 0;
          border-radius: 50%;
        `}
      />

      <div
        css={css`
          position: relative;
        `}
      >
        {props.children}
      </div>
    </ButtonRaw>
  );

  return (
    <MenuDesktop$
      overrides={{
        MenuButton: ({ index, menu, isActive, setActive, buttonProps }) => (
          <ButtonRaw
            key={index}
            onClick={() => {
              routerPush("/collection");
            }}
            {...buttonProps}
            css={css`
              position: relative;
              box-sizing: content-box;
              height: 70px;
              padding: 0 24px;
              ${theme.fonts.body1.css}

              &:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: black;
                opacity: ${isActive ? "1" : "0"};
              }
            `}
          >
            {menu.label}
          </ButtonRaw>
        ),
        MenuBar: ({ buttons, activeMenu }) => (
          <div
            css={css`
              position: relative;
            `}
          >
            <div
              css={css`
                background-color: white;

                border-bottom: ${segment === "hideable" ||
                segment === "not-top" ||
                activeMenu
                  ? `1px solid ${theme.colors.mono200.css};`
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
                        <Link href={"/"}>
                          <a>Basic Store</a>
                        </Link>
                      </div>
                    </LayoutRow>
                  }
                  right={
                    <div
                      css={css`
                        > button {
                          position: relative;
                          margin-left: 16px;
                        }
                      `}
                    >
                      <IconButton
                        onClick={() => {
                          setProfileOpened(true);
                        }}
                      >
                        <IconAccount />
                      </IconButton>

                      <IconButton>
                        <IconSearch />
                      </IconButton>

                      <IconButton
                        onClick={() => {
                          setOpened(true);
                        }}
                      >
                        <IconCart />
                        <span>{data.checkout.lineItems.length}</span>
                      </IconButton>
                    </div>
                  }
                  center={buttons}
                />
              </Container>
            </div>

            <Modal
              isOpen={opened}
              onRequestClose={() => setOpened(false)}
              config={{
                mode: "right",
                width: {
                  xs: "90vw",
                  md: "50vw",
                  lg: "33vw"
                }
              }}
              header={"Your Bag"}
              footer={() => (
                <div
                  css={css`
                    padding: ${theme.spacings.s30}px;
                  `}
                >
                  <div
                    css={css`
                      padding: ${theme.spacings.s30}px;
                    `}
                  >
                    <Ledger
                      rows={[
                        {
                          label: "Subtotal",
                          value: "€399"
                        },
                        {
                          label: "Tax",
                          value: "€0"
                        },
                        {
                          label: "Total",
                          isTotal: true,
                          value: "€399"
                        }
                      ]}
                    />
                  </div>
                  <div
                    css={css`
                      display: flex;
                      width: 100%;
                      & > div {
                        flex-basis: 50%;
                        padding: ${theme.spacings.s30}px;
                      }
                    `}
                  >
                    <div>
                      <Button
                        kind={"secondary"}
                        fitContainer
                        onClick={() => {
                          setOpened(false);
                          routerPush("/cart");
                        }}
                      >
                        View Bag ({data.products.length})
                      </Button>
                    </div>
                    <div>
                      <Button
                        fitContainer
                        onClick={() => {
                          setOpened(false);
                          routerPush("/form1");
                        }}
                      >
                        Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            >
              <MiniBasketContent lineItems={data.checkout.lineItems} />
            </Modal>

            <Modal
              isOpen={profileOpened}
              onRequestClose={() => setProfileOpened(false)}
              config={{
                mode: "center",
                width: {
                  xs: "90%",
                  lg: "400px"
                }
              }}
              header={""}
            >
              <div
                css={css`
                  padding: ${theme.spacings.s80}px;
                `}
              >
                <ProfileLogInContent />
              </div>
            </Modal>
          </div>
        )
      }}
      renderMenuContent={true}
      mode={"fixed"}
      debounce={50}
      {...props}
    />
  );
};

export default MenuDesktop;
