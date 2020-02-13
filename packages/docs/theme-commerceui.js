import { lin } from "@commerce-ui/core2";
import {
  generateColorPalette,
  generateMonoPalette
} from "@commerce-ui/core2/generateColorPalette";


const breakpoints = ["420px", "720px", "960px", "1200px", "1600px"];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];


export default {
  colors: {
    primary: "#33e",

    ...generateColorPalette("positive", "#19B105"),
    ...generateColorPalette("negative", "#DF4F5C"),
    ...generateMonoPalette()
  },
  space: [0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 30, 36, 48, 60],
  breakpoints,
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
      fontSize: lin(24, 32),
      fontFamily: "sans-serif"
    }
  }
};
