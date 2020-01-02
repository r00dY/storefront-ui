import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

const withTheme = story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);

addDecorator(withTheme);

configure(require.context("../src/theme", true, /\.stories\.js$/), module);
