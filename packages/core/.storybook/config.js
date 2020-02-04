import { configure, addDecorator } from "@storybook/react";
import Root from "@commerce-ui/core/Root2";
import theme from "../src/theme/theme";

const withTheme = Story => (
  <Root theme={theme}>
    <Story />
  </Root>
);

addDecorator(withTheme);

window.__BROWSER__ = true;

configure(require.context("../src/theme", true, /\.stories\.js$/), module);
