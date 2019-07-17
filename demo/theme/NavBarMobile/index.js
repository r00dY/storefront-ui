import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "storefront-ui/Container";
import { ButtonRaw } from "../ButtonRaw";

import IconArrowBack from "../../svg/arrow_back.svg";
import IconHeart from "../../svg/heart.svg";
import IconSearch from "../../svg/search.svg";
import { useTheme } from "storefront-ui/Theme";

import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import LayoutRow from "storefront-ui/LayoutRow";

import Router from "next/router";

const NavBarMobile = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background: #fafafa;
        border-bottom: 1px solid lightgrey;
      `}
    >
      <Container>
        <LayoutLeftCenterRight
          height={50}
          left={
            <LayoutRow gutter={16}>
              <ButtonRaw
                css={css`
                  svg {
                    line-height: 1;
                  }
                `}
                onClick={() => {
                  Router.back();
                }}
              >
                <IconArrowBack />
              </ButtonRaw>

              <div
                css={css`
                  ${theme.fonts.h6}
                  line-height: 1;
                `}
              >
                Spring dresses
              </div>
            </LayoutRow>
          }
          right={
            <LayoutRow gutter={12}>
              <ButtonRaw
                css={css`
                  svg {
                    line-height: 1;
                  }
                `}
              >
                <IconHeart />
              </ButtonRaw>

              <ButtonRaw
                css={css`
                  svg {
                    line-height: 1;
                  }
                `}
                onClick={() => {
                  Router.push("/search");
                }}
              >
                <IconSearch />
              </ButtonRaw>
            </LayoutRow>
          }
        />
      </Container>
    </div>
  );
};

export default NavBarMobile;
