import React from "react";

import { MenuDesktop$ } from "storefront-ui/MenuDesktop";
import { useTheme } from "storefront-ui/Theme";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { rslin } from "responsive-helpers";
import { R } from "storefront-ui/Config";

import { ButtonRaw } from "../ButtonRaw";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const _columns = [
  [
    { label: "About" },
    { label: "Customer Service" },
    { label: "Delivery Information" },
    { label: "Returns & Refunds" },
    { label: "Product Care" }
  ],
  [
    { label: "Store Locator" },
    { label: "Careers" },
    { label: "Press" },
    { label: "Contact Us" }
  ]
];

import IconInstagram from "./instagram.svg";
import IconPinterest from "./pinterest.svg";
import IconTwitter from "./twitter.svg";
import { Button } from "../Button";

const Footer = props => {
  const theme = useTheme();

  return (
    <div>
      <div
        css={css`
          border-top: 1px solid ${theme.colors.mono200.css};

          ${rslin(theme.spacings.s100, theme.spacings.s120).css("padding-top")}
          ${rslin(theme.spacings.s120, theme.spacings.s180).css("margin-top")}
        `}
      >
        <Container>
          <Grid>
            {_columns.map((column, index) => {
              let _cols = { xs: [12], sm: 8, lg: [6] };
              return (
                <GridItem
                  params={_cols}
                  key={index}
                  css={css`
                    ${R.to("md").css`
                      margin-bottom: 2em;
                    `}
                  `}
                >
                  {column.map((link, index2) => {
                    return (
                      <div
                        key={index2}
                        css={css`
                          ${theme.fonts.caption.css}
                          line-height: 2.4;
                          a {
                            color: ${theme.colors.mono700.css};
                            text-decoration: none;
                            transition: color 200ms;
                            &:hover {
                              color: ${theme.colors.mono500.css};
                            }
                          }
                        `}
                      >
                        <a href="">{link.label}</a>
                      </div>
                    );
                  })}
                </GridItem>
              );
            })}
            <GridItem params={{ xs: [24], sm: 8, lg: [12] }}>
              <div
                css={css`
                  display: flex;
                  ${R.to("sm").css("justify-content: center;")} ${R.from(
                    "sm"
                  ).css("justify-content: flex-end; ")} svg {
                    width: 20px;
                    fill: ${theme.colors.mono700.css};
                  }
                  & > button:not(:last-of-type) {
                    margin-right: ${theme.spacings.s100}px;
                  }
                `}
              >
                <ButtonRaw kind={"minimal"}>
                  <IconInstagram />
                </ButtonRaw>
                <ButtonRaw kind={"minimal"}>
                  <IconPinterest />
                </ButtonRaw>
                <ButtonRaw kind={"minimal"}>
                  <IconTwitter />
                </ButtonRaw>
              </div>
            </GridItem>
          </Grid>
        </Container>
        <div
          css={css`
            margin-top: 40px;
            // background: ${theme.colors.mono100.css};
            padding: 20px 0;
          `}
        >
          <Container>
            <div
              css={css`
                ${theme.fonts.caption.css} line-height: 2;
                color: ${theme.colors.mono500.css};
                display: flex;
                align-items: center;
                flex-wrap: wrap;
              `}
            >
              <span>© 2019 All Rights Reserved</span>
              {[
                "Privacy Policy",
                "Terms of Service",
                "CA Supply Chain Transparency",
                "Vendor Code of Conduct",
                "Sitemap Pages",
                "Sitemap Products"
              ].map((link, index) => (
                <>
                  <div
                    css={css`
                       {
                        margin: 0 ${theme.spacings.s60}px;
                      }
                    `}
                  >
                    {index > 0 && "|"}
                  </div>
                  <a
                    href={"#"}
                    kind={"minimal"}
                    css={css`
                      color: ${theme.colors.mono500.css};
                      text-decoration: none;
                    `}
                  >
                    {link}
                  </a>
                </>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

// Footer.propTypes = {
// };

export default Footer;
