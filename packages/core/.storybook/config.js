import { configure, addDecorator } from "@storybook/react";
import Root from "@commerce-ui/core/Root2";
import theme from "./theme";

const withTheme = story => <Root theme={theme}>{story()}</Root>;

addDecorator(withTheme);

window.__BROWSER__ = true;

configure(require.context("../src/theme", true, /\.stories\.js$/), module);
