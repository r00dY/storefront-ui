import React from "react";
import App, { Container } from "next/app";

import Root from "@commerce-ui/core/Root";
import { theme } from "../demo/theme";

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
