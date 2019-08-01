import React from "react";
import App, { Container } from "next/app";

import theme from "../theme/config";
import Root from "storefront-ui/Root";

import MainTabBar from "../theme/MainTabBar";
import NavBarMobile from "../theme/NavBarMobile";
import Router from "next/router";

import Device from "storefront-ui/Device";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import MenuDesktop from "../theme/MenuDesktop";

const tabs = [
  {
    label: "Home",
    icon: "home"
  },
  {
    label: "Menu",
    icon: "menu"
  },
  {
    label: "Favs",
    icon: "favs"
  },
  {
    label: "Basket",
    icon: "basket"
  },
  {
    label: "Profile",
    icon: "profile"
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
    const hideDesktopMenu = Component.hideDesktopMenu === true;

    console.log("hide desktop menu", hideDesktopMenu);

    return (
      <Root theme={theme}>
        <Device mobile>
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
                    } else if (index === 4) {
                      Router.push("/profile");
                    }
                  }}
                  scrollable={false}
                  align={"fit"}
                />
              </div>
            </div>
          )}

          {!showTabbar && content}
        </Device>

        <Device desktop>
          {hideDesktopMenu && content}

          {!hideDesktopMenu && (
            <>
              <MenuDesktop
                data={[
                  {
                    label: "Home",
                    href: "/category"
                  },
                  {
                    label: "Beauty",
                    href: "/category"
                  },
                  {
                    label: "Food",
                    href: "/category"
                  },
                  {
                    label: "Health",
                    href: "/category"
                  }
                ]}
              />

              <div
                css={css`
                  padding-top: 70px;
                `}
              >
                {content}
              </div>
            </>
          )}
        </Device>
      </Root>
    );
  }
}
