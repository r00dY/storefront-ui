import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "storefront-ui/Container";
import { ButtonRaw } from "../ButtonRaw";

import IconArrowBack from "../../svg/arrow_back_ios.svg";
import IconHeart from "../../svg/heart.svg";
import IconSearch from "../../svg/search.svg";
import IconCart from "../../svg/cart.svg";
import { useTheme } from "storefront-ui/Theme";

import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import LayoutRow from "storefront-ui/LayoutRow";

import routerPush from "../../helpers/routerPush";
import Router from "next/router";

import { Button } from "../Button";

const NavBarMobile = props => {
  const theme = useTheme();
  //
  // let icon =<ButtonRaw
  //     css={css`
  //                 svg {
  //                   line-height: 1;
  //                   display: block;
  //                 }
  //                 display: block;
  //               `}
  //     onClick={() => {
  //       routerPush("/search");
  //     }}
  // >
  //   <IconSearch />
  // </ButtonRaw>;
  //
  // if (props.cart) {
  //   icon = <ButtonRaw
  //       css={css`
  //                 svg {
  //                   line-height: 1;
  //                   display: block;
  //                 }
  //                 display: block;
  //               `}
  //       onClick={() => {
  //         routerPush("/cart?noRoot", "/cart");
  //       }}
  //   >
  //     <IconCart />
  //   </ButtonRaw>
  // }
  //
  // if (props.button) {
  //   icon = <Button size={"compact"}>{props.button}</Button>;
  // }
  //
  // if (props.noIcons) {
  //   icon = undefined;
  // }

  return (
    <div
      css={css`
        ${props.transparent
          ? ""
          : `
        background: white;
        border-bottom: ${
          props.noBorder ? "none" : `1px solid ${theme.colors.mono200.css}`
        };
        `}
      `}
    >
      <Container>
        <LayoutLeftCenterRight
          height={50}
          left={
            <LayoutRow gutter={8}>
              <ButtonRaw
                css={css`
                  svg {
                    display: block;
                  }
                  display: block;
                  margin-left: -4px;
                `}
                onClick={() => {
                  Router.back();
                }}
              >
                <IconArrowBack />
              </ButtonRaw>
            </LayoutRow>
          }
          center={
            <div
              css={css`
                ${theme.fonts.body1.css}
                line-height: 1;
              `}
            >
              {props.title}
            </div>
          }
          right={<LayoutRow gutter={12}>{props.right}</LayoutRow>}
        />
      </Container>
    </div>
  );
};

export default NavBarMobile;
