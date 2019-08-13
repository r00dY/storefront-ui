import React from "react";
import App, { Container } from "next/app";

import theme from "../theme/config";
import Root from "storefront-ui/Root";

import MainTabBar from "../theme/MainTabBar";
import NavBarMobile from "../theme/NavBarMobile";
import Router from "next/router";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import withApolloClient from "../lib/with-apollo-client";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import MenuDesktop, { MenuDesktopContent } from "../theme/MenuDesktop";

import Footer from "../theme/Footer";
import data from "../data";
import { parseCookies, setCookie } from "../helpers/cookie";
import fetchCheckout from "../actions/fetchCheckout";
import createEmptyCheckout from "../actions/createEmptyCheckout";

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

class MyApp extends App {
  static async getInitialProps({ Component, ctx }, apollo) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const checkoutId = await MyApp.createCheckout(apollo, ctx);

    return { pageProps, noRoot: ctx.query.noRoot !== undefined, checkoutId };
  }

  static async createCheckout(client, ctx) {
    if (client.cache.data.data.Checkout) {
      return client.cache.data.data.Checkout.id;
    }

    if (!client.cache.data.data.Checkout && parseCookies(ctx).checkoutId) {
      const { data } = await fetchCheckout(
        client,
        parseCookies(ctx).checkoutId
      );
      return data.node.id;
    }

    const { data } = await createEmptyCheckout(client);
    setCookie(ctx, "checkoutId", data.checkoutCreate.checkout.id);
    return data.checkoutCreate.checkout.id;
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    const content = (
      <Container>
        <Component {...pageProps} />
      </Container>
    );

    const showTabbar = Component.tabbar !== undefined && !this.props.noRoot;
    const hideDesktopMenu = Component.hideDesktopMenu === true;
    const showFooterOnMobile = Component.showFooterOnMobile === true;

    return (
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
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
                        href: "/category",
                        content: (
                          <MenuDesktopContent
                            category={data.categories[0]}
                            index={0}
                          />
                        )
                      },
                      {
                        label: "Beauty",
                        href: "/category",
                        content: (
                          <MenuDesktopContent
                            category={data.categories[1]}
                            index={1}
                          />
                        )
                      },
                      {
                        label: "Food",
                        href: "/category",
                        content: (
                          <MenuDesktopContent
                            category={data.categories[2]}
                            index={2}
                          />
                        )
                      },
                      {
                        label: "Health",
                        href: "/category",
                        content: (
                          <MenuDesktopContent
                            category={data.categories[3]}
                            index={3}
                          />
                        )
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
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
