import React from "react";
import App, { Container } from "next/app";

import Root from "@commerce-ui/core/Root";
import { theme } from "../demo/theme";

import { DeviceProvider } from "@commerce-ui/core/Device";

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    let userAgent;
    if (typeof window === "object") {
      userAgent = window.navigator.userAgent;
    } else {
      userAgent = appContext.ctx.req.headers["user-agent"];
    }

    return { ...appProps, userAgent };
  }

  render() {
    const { Component, pageProps, userAgent } = this.props;

    return (
      <DeviceProvider userAgent={userAgent}>
        <Root theme={theme}>
          <Component {...pageProps} />
        </Root>
      </DeviceProvider>
    );
  }
}
