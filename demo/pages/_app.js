import React from "react";
import App, { Container } from "next/app";

import theme from "../theme/config";
import Root from "storefront-ui/Root";

import MainTabBar from "../theme/MainTabBar";
import NavBarMobile from "../theme/NavBarMobile";
import Router from "next/router";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const tabs = [
  {
    label: "home"
  },
  {
    label: "menu"
  },
  {
    label: "favs"
  },
  {
    label: "basket"
  }
];

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, noRoot: ctx.query.noRoot !== undefined };
  }

  render() {
    const { Component, pageProps } = this.props;

    const content = (
      <Container>
        <Component {...pageProps} />
      </Container>
    );

    const showTabbar = Component.tabbar !== undefined && !this.props.noRoot;

    return (
      <Root theme={theme}>
        {showTabbar && (
          <div>
            <div
              css={css`
                margin-bottom: 50px;
              `}
            >
              {content}
            </div>

            <div
              css={css`
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
              `}
            >
              <MainTabBar
                data={tabs}
                active={Component.tabbar}
                onChange={index => {
                  if (index === 0) {
                    Router.push("/");
                  } else if (index === 1) {
                    Router.push("/menu");
                  } else if (index === 2) {
                    Router.push("/wishlist");
                  } else if (index === 3) {
                    Router.push("/cart");
                  }
                }}
                scrollable={false}
                align={"fit"}
              />
            </div>
          </div>
        )}

        {!showTabbar && content}
      </Root>
    );
  }
}
