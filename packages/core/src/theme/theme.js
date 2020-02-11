// Theme
import {
  generateMonoPalette,
  generateColorPalette
} from "@commerce-ui/core/generateColorPalette";

import { rslin } from "@commerce-ui/core";

const breakpoints = ["320px", "768px", "1024px", "1600px"];
breakpoints.xs = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

let space = [0, 4, 8, 16, 32, 64];
space.big = 50;
space.responsive = rslin(20, 50);

const theme = {
  colors: {
    black: "#2E4557",
    white: "#fff",

    ...generateColorPalette("error", "#C94E2C"),
    ...generateColorPalette("success", "#6CAD85"),
    ...generateColorPalette("primary", "#004175"),
    ...generateMonoPalette()
  },
  fonts: {
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
      fontSize: rslin(24, 32),
      fontFamily: "sans-serif"
    }
  },
  space,
  breakpoints,
  containers: {
    default: ["10vw", null, null, "12vw", "calc(calc(100vw - 1500px) / 2)"],
    secondary: ["30vw", null, null, "20vw"]
  },
  gridGaps: {
    default: ["10px", null, "15px", "20px", "25px"]
  }
};

export default theme;
