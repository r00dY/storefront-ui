import React from "react";
import App, { Container } from "next/app";

import { GridDebugger } from "storefront-ui/Grid";

import theme from "../components/config";
import Root from "storefront-ui/Root";

import MainTabBar from "../components/MainTabBar";
import NavBarMobile from "../components/NavBarMobile";
import routerPush from "../helpers/routerPush";

import Device from "storefront-ui/Device";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import MenuDesktop, { MenuDesktopContent } from "../components/MenuDesktop";

import Footer from "../components/Footer";
import data from "../data";

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

const menuData = [
  {
    label: "Home",
    href: "/category",
    content: <MenuDesktopContent category={data.categories[0]} index={0} />
  },
  {
    label: "Beauty",
    href: "/category",
    content: <MenuDesktopContent category={data.categories[1]} index={1} />
  },
  {
    label: "Food",
    href: "/category",
    content: <MenuDesktopContent category={data.categories[2]} index={2} />
  },
  {
    label: "Health",
    href: "/category",
    content: <MenuDesktopContent category={data.categories[3]} index={3} />
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
    const desktopMenuTransparentAtTop =
      Component.desktopMenuTransparentAtTop === true;
    const showFooterOnMobile = Component.showFooterOnMobile === true;

    return (
      <Root theme={theme}>
        <GridDebugger />

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
              <MenuDesktop data={menuData} mode={"fixed"} />

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
