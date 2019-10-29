import React from "react";
import App, { Container } from "next/app";

import Root from "../src/packages/Root";
import { theme } from "../theme";

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Root theme={theme}>
        <Component {...pageProps} />
      </Root>
    );
  }
}
