import { rslin } from "responsive-helpers";
import React, { useState } from "react";
import Container from "@commerce-ui/core/Container";
import { Grid, GridItem } from "@commerce-ui/core/Grid";
import { useTheme } from "@commerce-ui/core/Theme";
import { AccordionRaw } from "@commerce-ui/core/Accordion";
import Device from "@commerce-ui/core/Device";
import { L } from "@commerce-ui/core/Config";
import CheckoutSidebar from "../CheckoutSidebar";

import Link from "next/link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ButtonRaw } from "../ButtonRaw";

import IconExpandMore from "../../svg/expand_more.svg";
import IconExpandLess from "../../svg/expand_less.svg";
import IconCart from "../../svg/cart.svg";

const CheckoutPage = props => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      css={css`
        padding-bottom: 50px;
      `}
    >
      <Container>
        <Grid>
          <GridItem
            css={css`
                      text-align: center; ${theme.fonts.h4.css}
                      ${rslin(theme.spacings.s120, theme.spacings.s140).css(
                        "padding-top"
                      )}
                      ${rslin(theme.spacings.s140, theme.spacings.s180).css(
                        "padding-bottom"
                      )}
                      `}
          >
            <Link href={"/"}>
              <a
                css={css`
                  text-decoration: none;
                  color: black;
                  cursor: pointer;

                  &:active,
                  &:hover,
                  &:visited {
                    text-decoration: none;
                    color: black;
                  }
                `}
              >
                Basic Store Checkout
              </a>
            </Link>
          </GridItem>
        </Grid>
      </Container>

      <Device mobile>
        <AccordionRaw open={open}>
          <Container
            css={css`
              padding-bottom: ${theme.spacings.s100}px;
            `}
          >
            <CheckoutSidebar />
          </Container>
        </AccordionRaw>
        <ButtonRaw
          onClick={() => setOpen(!open)}
          css={css`
            background: ${theme.colors.mono200.css};
            display: flex;
            align-items: center;
            width: 100%;
            height: 54px;
            svg {
              fill: currentColor;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              width: 100%;
              align-items: center;
              ${L.margin.css("padding-right")} ${L.margin.css("padding-left")}
            `}
          >
            <div
              css={css` ${theme.fonts.body2.css} color: ${
                theme.colors.primary.css
              }; display: flex; align-items: center; justify-content: space-between;`}
            >
              <IconCart
                css={css`
                  width: 24px;
                  height: 24px;
                  margin-right: 0.5em;
                `}
              />
              {open ? (
                <>
                  <div>Hide order summary</div>
                  <IconExpandLess />
                </>
              ) : (
                <>
                  <div>Show order summary</div>
                  <IconExpandMore />
                </>
              )}
            </div>
            <div
              css={css`
                ${theme.fonts.h6.css}
              `}
            >
              €399
            </div>
          </div>
        </ButtonRaw>
      </Device>

      <Container>
        <Grid>
          <GridItem />
          <GridItem params={{ xs: 24, md: [14], lg: [12, 2], xl: [10, 4] }}>
            {props.children}
          </GridItem>
          <GridItem params={{ xs: 24, md: [9, 1], lg: [7, 1], xl: [6, 1] }}>
            <Device desktop>
              <CheckoutSidebar hideGiftCard={props.hideGiftCard} />
            </Device>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default CheckoutPage;
