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

    return (
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
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
          </Root>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
