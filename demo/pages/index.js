import React from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";

import { Input, StatefulInput } from "../theme/Input";

import Router from "next/router";

import Link from "next/link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Home = () => {
  const theme = useTheme();

  return (
    <div>
      <Container>
        <div
          css={css`
            text-align: center;
            margin-top: 28px;
            margin-bottom: 28px;
            ${theme.fonts.h4}
          `}
        >
          SUPER STORE
        </div>

        <StatefulInput
          placeholder={"What you're looking for?"}
          onFocus={() => {
            Router.push("/search");
          }}
        />

        <ul>
          <li>
            <Link href={"/product"}>
              <a>Go to product</a>
            </Link>
          </li>
          <li>
            <Link href={"/collection"}>
              <a>Go to collection</a>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

Home.tabbar = 0;

export default Home;
