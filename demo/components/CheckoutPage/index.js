import { rslin } from "responsive-helpers";
import React, { useState } from "react";
import Container from "storefront-ui/Container";
import { Grid, GridItem } from "storefront-ui/Grid";
import { useTheme } from "storefront-ui/Theme";
import { AccordionRaw } from "storefront-ui/Accordion";
import Device from "storefront-ui/Device";
import { L } from "storefront-ui/Config";
import Page from "../Page";
import CheckoutSidebar from "../CheckoutSidebar";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ButtonRaw } from "../../theme/ButtonRaw";

import IconExpandMore from "./baseline-expand_more-24px.svg";
import IconExpandLess from "./baseline-expand_less-24px.svg";
import IconCart from "./outline-shopping_cart-24px.svg";

const CheckoutPage = props => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Container>
        <Grid>
          <GridItem
            css={css`
                      text-align: center; ${theme.fonts.h3.css}
                      ${rslin(theme.spacings.s120, theme.spacings.s140).css(
                        "padding-top"
                      )}
                      ${rslin(theme.spacings.s140, theme.spacings.s180).css(
                        "padding-bottom"
                      )}
                      `}
          >
            SuperStore Checkout
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
