import { configure, addDecorator } from "@storybook/react";
import Root from "@commerce-ui/core/Root";
import theme from "../src/theme/theme";
import React from "react";

const withTheme = Story => (
  <Root theme={theme}>
    <Story />
  </Root>
);

addDecorator(withTheme);

window.__BROWSER__ = true;
window.__DEV__ = true;

configure(require.context("../src/theme", true, /\.stories\.js$/), module);
