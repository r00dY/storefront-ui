// Theme
import {
  generateMonoPalette,
  generateColorPalette
} from "@commerce-ui/core/generateColorPalette";

import { lin } from "@commerce-ui/core";

const breakpoints = ["420px", "768px", "1024px", "1600px"];
breakpoints.xs = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const space = [];

space.s0 = 0;
space.s1 = 1;
space.s2 = 2;
space.s3 = 4;
space.s4 = 6;
space.s5 = 8;
space.s6 = 12;
space.s7 = 16;
space.s8 = 24;
space.s9 = 32;
space.s10 = 48;
space.s11 = 64;
space.s12 = 96;
space.s13 = 128;
space.s14 = 160;

space.containerMargin = [
  "5vw",
  null,
  null,
  null,
  "7.5vw",
  "calc(50vw - 800px)"
];

space.gridGap = [10, 20, 30, 30, 30];

space.containerMarginSecondary = "30vw";

space.notificationSystemOffset = 16;
space.notificationSystemSeparator = 16;
space.notificationSystemWidth = 300;

const theme = {
  colors: {
    black: "#2E4557",
    white: "#fff",

    main: "#2E4557",
    active: "#B05781",

    ...generateColorPalette("error", "#C94E2C"),
    ...generateColorPalette("success", "#6CAD85"),
    ...generateColorPalette("primary", "#004175"),
    ...generateColorPalette("neutral", "#EEECE5"),
    ...generateMonoPalette()
  },
  typography: {
    body: {
      fontSize: 16,
      fontFamily: "sans-serif",
      lineHeight: 1.2
    },
    body2: {
      fontSize: 14,
      fontFamily: "sans-serif",
      lineHeight: 1.2
    },
    label: {
      fontSize: 13,
      fontFamily: "sans-serif",
      lineHeight: 1,
      fontWeight: 600,
      textTransform: "uppercase"
    },
    heading: {
      fontSize: 24,
      fontFamily: "sans-serif"
    }
  },
  space,
  breakpoints,
  imageAspectRatios: {
    portrait: 0.7,
    landscape: 1.3,
    panoramic: 2,
    superpanoramic: 3
  }
};

export default theme;
