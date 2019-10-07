import React from "react";
import App, { Container } from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";

import Root from "storefront-ui/Root";
import theme from "../demo/components/config";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Root theme={theme}>
        <Container>
          <StyletronProvider value={styletron}>
            <Component {...pageProps} />
          </StyletronProvider>
        </Container>
      </Root>
    );
  }
}
