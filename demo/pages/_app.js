import React from "react";
import App, { Container } from "next/app";

import theme from "../theme/config";
import Root from "storefront-ui/Root";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Root theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Root>
    );
  }
}
