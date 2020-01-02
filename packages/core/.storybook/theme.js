// Theme
const breakpoints = ["320px", "768px", "1024px", "1600px"];
breakpoints.xs = breakpoints[0];
breakpoints.md = breakpoints[0];
breakpoints.lg = breakpoints[0];
breakpoints.xl = breakpoints[0];

const theme = {
  colors: {
    black: "#000e1a",
    white: "#fff",
    primary: "blue",
    mono500: "lightgrey",
    blue: "#007ce0",
    navy: "#004175"
  },
  typography: {
    body: {
      fontSize: 20,
      fontFamily: "sans-serif",
      letterSpacing: ".1em",
      lineHeight: 1.5
    },
    heading: {
      fontSize: 28,
      fontFamily: "serif"
    }
  },
  space: [0, 4, 8, 16, 32, 64],
  breakpoints
};

export default theme;
