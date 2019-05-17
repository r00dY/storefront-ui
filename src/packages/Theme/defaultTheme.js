import Color from "../Color";
import Font from "../Font";

import createTheme from "../base/themes/creator";

const spacings = {
  s0: "2px",
  s10: "4px",
  s20: "6px",
  s30: "8px",
  s40: "10px",
  s50: "12px",
  s55: "14px",
  s60: "16px",
  s70: "20px",
  s80: "24px",
  s90: "32px",
  s100: "40px",
  s120: "48px",
  s140: "56px",
  s160: "64px",
  s240: "96px",
  s320: "128px",
  s480: "192px"
};

const primitives = {
  // material blue
  primary50: new Color("#E3F2FD"),
  primary100: new Color("#BBDEFB"),
  primary200: new Color("#90CAF9"),
  primary300: new Color("#64B5F6"),
  primary400: new Color("#42A5F5"),
  primary500: new Color("#2196F3"),
  primary600: new Color("#1E88E5"),
  primary700: new Color("#1976D2"),
  primary800: new Color("#1565C0"),
  primary900: new Color("#0D47A1"),
  primary: new Color("#2196F3"),

  // material red
  negative50: new Color("#FFEBEE"),
  negative100: new Color("#FFCDD2"),
  negative200: new Color("#EF9A9A"),
  negative300: new Color("#E57373"),
  negative400: new Color("#EF5350"),
  negative500: new Color("#F44336"),
  negative600: new Color("#E53935"),
  negative700: new Color("#D32F2F"),
  negative800: new Color("#C62828"),
  negative900: new Color("#B71C1C"),
  negative: new Color("#F44336"),

  // material green
  positive50: new Color("#E8F5E9"),
  positive100: new Color("#C8E6C9"),
  positive200: new Color("#A5D6A7"),
  positive300: new Color("#81C784"),
  positive400: new Color("#66BB6A"),
  positive500: new Color("#4CAF50"),
  positive600: new Color("#43A047"),
  positive700: new Color("#388E3C"),
  positive800: new Color("#2E7D32"),
  positive900: new Color("#1B5E20"),
  positive: new Color("#4CAF50"),

  // material grey
  mono50: new Color("#fafafa"),
  mono100: new Color("#f5f5f5"),
  mono200: new Color("#eeeeee"),
  mono300: new Color("#e0e0e0"),
  mono400: new Color("#bdbdbd"),
  mono500: new Color("#9e9e9e"),
  mono600: new Color("#757575"),
  mono700: new Color("#616161"),
  mono800: new Color("#424242"),
  mono900: new Color("#212121"),
  mono1000: new Color("000000"),
  mono: new Color("#9e9e9e"),

  rating200: "#FFE1A5",
  rating400: "#FFC043",

  white: new Color("#ffffff"),
  black: new Color("#000000")
};

const fonts = {
  body1: new Font(`
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
  `),
  body2: new Font(`
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
  `),
  h6: new Font(`
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
  `),
  h5: new Font(`
    font-family: sans-serif;
    font-size: 24px;
    font-weight: 600;
  `),
  h4: new Font(`
    font-family: sans-serif;
    font-size: 34px;
    font-weight: 600;
  `),
  h3: new Font(`
    font-family: sans-serif;
    font-size: 48px;
    font-weight: 600;
  `),
  h2: new Font(`
    font-family: sans-serif;
    font-size: 60px;
    font-weight: 600;
  `),
  h1: new Font(`
    font-family: sans-serif;
    font-size: 96px;
    font-weight: 600;
  `),
  caption: new Font(`
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 400;
  `)
};

const defaultTheme = createTheme(primitives, {});

defaultTheme.fonts = fonts;
defaultTheme.spacings = spacings;

export default defaultTheme;
