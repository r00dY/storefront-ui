import React from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";
import Device from "storefront-ui/Device";

import { Input, StatefulInput } from "../theme/Input";

import Router from "next/router";

import Link from "next/link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import MenuDesktop from "../theme/MenuDesktop";
import Footer from "../theme/Footer";

const Home = () => {
  const theme = useTheme();

  return (
    <div>
      <Device desktop>
        <MenuDesktop
          data={[
            {
              label: "Men",
              href: "/category"
            },
            {
              label: "Women",
              href: "/category"
            },
            {
              label: "Kids",
              href: "/category"
            },
            {
              label: "Customize",
              href: "/category"
            },
            {
              label: "Gifts",
              href: "/category"
            }
          ]}
        />
      </Device>
      <Container
        css={css`
          min-height: 100vh;
        `}
      >
        <div
          css={css`
            text-align: center;
            padding: 140px 0 80px;
            ${theme.fonts.h2.css}
          `}
        >
          SuperStore
        </div>
        <Grid>
          <GridItem params={{ xs: 24, md: [6, 9] }}>
            <StatefulInput
              placeholder={"What you're looking for?"}
              onFocus={() => {
                Router.push("/search");
              }}
            />

            <div
              css={css`a {${theme.fonts.h6.css} color: ${
                theme.colors.primary
              };} div {margin-top: 20px;} text-align: center;`}
            >
              <div>
                <Link href={"/product"}>
                  <a>Go to product</a>
                </Link>
              </div>
              <div>
                <Link href={"/collection"}>
                  <a>Go to collection</a>
                </Link>
              </div>
            </div>
          </GridItem>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

Home.tabbar = 0;

export default Home;
