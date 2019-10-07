import { createTheme } from "@commerce-ui/core/Theme";
import Layout from "@commerce-ui/core/Layout";
import Font from "@commerce-ui/core/Font";
import Color from "@commerce-ui/core/Color";

import { rslin, rs } from "responsive-helpers";

const layout = new Layout({
  container: {
    xs: "90vw",
    1921: 1680
  },
  gutter: 16,
  colNumber: 24
});

const COLOR_PRIMARY = new Color("#1aa77d");

const theme = createTheme({
  layout: layout,
  borders: {
    useRoundedCorners: false
  },
  fonts: {
    body1: new Font(`
    font-family: sans-serif;
    ${rslin(16, 16).css("font-size")}
    font-weight: 400;
  `),
    body2: new Font(`
    font-family: sans-serif;
    ${rslin(14, 14).css("font-size")}
    font-weight: 400;
  `),
    h6: new Font(`
    font-family: sans-serif;
    ${rslin(20, 20).css("font-size")}
    font-weight: 600;
  `),
    h5: new Font(`
    font-family: sans-serif;
    ${rslin(20, 24).css("font-size")}
    font-weight: 500;
  `),
    h4: new Font(`
    font-family: sans-serif;
    ${rslin(22, 34).css("font-size")}
    font-weight: 600;
  `),
    h3: new Font(`
    font-family: sans-serif;
    ${rslin(24, 48).css("font-size")}
    font-weight: 600;
  `),
    h2: new Font(`
    font-family: sans-serif;
    ${rslin(28, 60).css("font-size")}
    font-weight: 600;
  `),
    h1: new Font(`
    font-family: sans-serif;
    font-size: 96px;
    font-weight: 600;
  `),
    caption1: new Font(`
    font-family: sans-serif;
    ${rslin(12, 12).css("font-size")}
    font-weight: 400;
  `),
    caption2: new Font(`
    font-family: sans-serif;
    ${rslin(10, 10).css("font-size")}
    font-weight: 400;
  `)
  },
  notifications: {
    topLeft: {
      x: layout.margin,
      y: 70 + 16,
      spacer: 16,
      width: 350
    },
    topRight: {
      x: layout.margin,
      y: 70 + 16,
      spacer: 16,
      width: 350
    }
  },
  forms: {
    inputBorderRadius: "4px",
    inputBoxShadowFocused: "none",
    inputBoxShadowErrorFocused: "none"
  },
  colors: {
    primary: COLOR_PRIMARY
  }
});

export default theme;
