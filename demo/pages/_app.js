import React from "react";
import App, { Container } from "next/app";

import theme from "../theme/config";
import Root from "storefront-ui/Root";

import MainTabBar from "../theme/MainTabBar";
import NavBarMobile from "../theme/NavBarMobile";
import routerPush from "../helpers/routerPush";

import Device from "storefront-ui/Device";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import MenuDesktop from "../theme/MenuDesktop";
import Footer from "../theme/Footer";

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
    const showFooterOnMobile = Component.showFooterOnMobile === true;

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
                {showFooterOnMobile && <Footer />}
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
                      routerPush("/");
                    } else if (index === 1) {
                      routerPush("/menu");
                    } else if (index === 2) {
                      routerPush("/wishlist");
                    } else if (index === 3) {
                      routerPush("/cart");
                    } else if (index === 4) {
                      routerPush("/profile");
                    }
                  }}
                  scrollable={false}
                  align={"fit"}
                />
              </div>
            </div>
          )}

          {!showTabbar && (
            <>
              {content}
              {showFooterOnMobile && <Footer />}
            </>
          )}
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

                <Footer />
              </div>
            </>
          )}
        </Device>
      </Root>
    );
  }
}
