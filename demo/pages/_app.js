import React from "react";
import App, { Container } from "next/app";

import { ThemeProvider } from "storefront-ui/Theme";
import theme from "../theme/config";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
