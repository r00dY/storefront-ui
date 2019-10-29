import Color from "../Color";
import Font from "../Font";

const defaultSpacings = {
  s1: 10,
  s2: 20,
  s3: 30,
  s4: 40,
  s5: 50,
  s6: 70,
  s7: 100,
  s8: 150,
  s9: 220
};

const defaultColors = {
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
  error50: new Color("#FFEBEE"),
  error100: new Color("#FFCDD2"),
  error200: new Color("#EF9A9A"),
  error300: new Color("#E57373"),
  error400: new Color("#EF5350"),
  error500: new Color("#F44336"),
  error600: new Color("#E53935"),
  error700: new Color("#D32F2F"),
  error800: new Color("#C62828"),
  error900: new Color("#B71C1C"),
  error: new Color("#F44336"),

  // material green
  success50: new Color("#E8F5E9"),
  success100: new Color("#C8E6C9"),
  success200: new Color("#A5D6A7"),
  success300: new Color("#81C784"),
  success400: new Color("#66BB6A"),
  success500: new Color("#4CAF50"),
  success600: new Color("#43A047"),
  success700: new Color("#388E3C"),
  success800: new Color("#2E7D32"),
  success900: new Color("#1B5E20"),
  success: new Color("#4CAF50"),

  // material grey
  grey50: new Color("#fafafa"),
  grey100: new Color("#f5f5f5"),
  grey200: new Color("#eeeeee"),
  grey300: new Color("#e0e0e0"),
  grey400: new Color("#bdbdbd"),
  grey500: new Color("#9e9e9e"),
  grey600: new Color("#757575"),
  grey700: new Color("#616161"),
  grey800: new Color("#424242"),
  grey900: new Color("#212121"),
  grey: new Color("#9e9e9e"),

  white: new Color("#ffffff"),
  black: new Color("#000000")
};

const defaultFonts = {
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

export default {
  fonts: defaultFonts,
  colors: defaultColors,
  spacings: defaultSpacings
};
