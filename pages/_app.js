import React from "react";
import App, { Container } from "next/app";

import Root from "@commerce-ui/core/Root";
import theme from "../demo/components/config";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Root theme={theme}>
        <Component {...pageProps} />
      </Root>
    );
  }
}
