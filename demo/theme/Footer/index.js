import React from "react";

import { MenuDesktop$ } from "storefront-ui/MenuDesktop";
import { useTheme } from "storefront-ui/Theme";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { rslin } from "responsive-helpers";
import { R } from "storefront-ui/Config";

import { ButtonRaw } from "../ButtonRaw";
import Link from "next/link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const _columns = [
  [
    { label: "About", href: "/shipping" },
    { label: "Customer Service", href: "/shipping" },
    { label: "Delivery Information", href: "/shipping" },
    { label: "Returns & Refunds", href: "/shipping" },
    { label: "Product Care", href: "/shipping" }
  ],
  [
    { label: "Store Locator", href: "/shipping" },
    { label: "Careers", href: "/shipping" },
    { label: "Press", href: "/shipping" },
    { label: "Contact Us", href: "/shipping" }
  ]
];

import IconInstagram from "./instagram.svg";
import IconPinterest from "./pinterest.svg";
import IconTwitter from "./twitter.svg";
import ThemeLink from "../ThemeLink";

const Footer = props => {
  const theme = useTheme();

  return (
    <div>
      <div
        css={css`
          border-top: 1px solid ${theme.colors.mono200.css};

          ${rslin(theme.spacings.s100, theme.spacings.s120).css("padding-top")}
          ${rslin(theme.spacings.s120, theme.spacings.s160).css("margin-top")}
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
                        `}
                      >
                        <Link href={link.href}>
                          <ThemeLink href={link.href} kind={"secondary"}>
                            {link.label}
                          </ThemeLink>
                        </Link>
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
              ].map((link, index3) => (
                <>
                  <div
                    key={index3}
                    css={css`
                       {
                        margin: 0 ${theme.spacings.s60}px;
                      }
                    `}
                  >
                    {index3 > 0 && "|"}
                  </div>
                  <Link href={"/privacy"}>
                    <ThemeLink href={"/privacy"} kind={"hoverUnderline"}>
                      {link}
                    </ThemeLink>
                  </Link>
                </>
              ))}

              {/* Prefetching of links - so far lame version */}
              <Link href={"/product"} prefetch={true}>
                <a />
              </Link>
              <Link href={"/collection"} prefetch={true}>
                <a />
              </Link>
              <Link href={"/search"} prefetch={true}>
                <a />
              </Link>
              <Link href={"/menu"} prefetch={true}>
                <a />
              </Link>
              <Link href={"/wishlist"} prefetch={true}>
                <a />
              </Link>
              <Link href={"/cart"} prefetch={true}>
                <a />
              </Link>
              <Link href={"/profile"} prefetch={true}>
                <a />
              </Link>
              <Link href={"/form1"} prefetch={true}>
                <a />
              </Link>
              <Link href={"/form2"} prefetch={true}>
                <a />
              </Link>
              <Link href={"/form3"} prefetch={true}>
                <a />
              </Link>
              <Link href={"/summary"} prefetch={true}>
                <a />
              </Link>
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
