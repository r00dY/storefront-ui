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
    label: "user"
  }
];

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const content = (
      <Container>
        <Component {...pageProps} />
      </Container>
    );

    return (
      <Root theme={theme}>
        {Component.tabbar !== undefined && (
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
                  }
                }}
                scrollable={false}
                align={"fit"}
              />
            </div>
          </div>
        )}

        {Component.navbar !== undefined && (
          <div>
            <div
              css={css`
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
              `}
            >
              <NavBarMobile />
            </div>

            <div
              css={css`
                margin-top: 50px;
              `}
            >
              {content}
            </div>
          </div>
        )}

        {Component.navbar === undefined &&
          Component.tabbar === undefined &&
          content}
      </Root>
    );
  }
}
