import React, { useContext } from "react";

import createThemeBase from "../base/themes/creator";
import Color from "../Color";
import Layout from "../Layout";

const ThemeContext = React.createContext(null);

const ThemeProvider = props => {
  let oldTheme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider
      value={Object.assign({}, oldTheme || {}, props.theme)}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTheme = function() {
  const theme = useContext(ThemeContext);
  return theme;
};

// const withTheme = (arg, componentName) => {
//   let originals = Object.assign({}, arg);
//
//   if (typeof arg === "function" || arg instanceof React.Component) {
//     originals = {
//       default: arg
//     };
//   }
//
//   return props => {
//     const theme = useTheme();
//
//     let appearance = props.appearance || "default";
//
//     let DefaultComponent = originals.default;
//
//     if (typeof originals.default === "string") {
//       // If default is ALIAS (like button default = button primary)
//       if (appearance === "default") {
//         appearance = originals.default;
//       }
//       DefaultComponent = originals[originals.default];
//     }
//
//     const OriginalComponent = originals[appearance]
//       ? originals[appearance]
//       : DefaultComponent;
//
//     if (theme[componentName]) {
//       let overrides = theme[componentName][appearance];
//
//       if (overrides) {
//         if (typeof overrides === "function") {
//           overrides = overrides(props);
//         }
//
//         return <OriginalComponent {...props} {...overrides} />;
//       }
//     }
//
//     return <OriginalComponent {...props} />;
//   };
// };

const generateThemeColors = primitives => {
  primitives = { ...primitives };

  primitives.primary = primitives.primary || new Color("#2196F3");
  primitives.negative = primitives.negative || new Color("#F44336");
  primitives.positive = primitives.positive || new Color("#4CAF50");

  const colorSets = ["primary", "negative", "positive"];
  const levels = [50, 100, 200, 300, 400, 500, 600, 700];

  colorSets.forEach(colorSet => {
    levels.forEach(level => {
      const key = `${colorSet}${level}`;
      if (!primitives[key]) {
        primitives[key] = primitives[colorSet].changeBrightness(
          (400 - level) / 500
        );
      }
    });
  });

  const monoColors = {
    mono: new Color("#9e9e9e"),
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
    mono1000: new Color("000000")
  };

  Object.keys(monoColors).forEach(key => {
    if (!primitives[key]) {
      primitives[key] = monoColors[key];
    }
  });

  return {
    ...primitives,
    rating200: new Color("#FFE1A5"),
    rating400: new Color("#FFC043"),
    black: new Color("#000000"),
    white: new Color("#ffffff")
  };
};

const createTheme = config => {
  config = config || {};
  const primitives = generateThemeColors(config.colors || {});
  let theme = createThemeBase(primitives, config);

  theme.layout =
    config.layout ||
    new Layout({
      container: "90vw",
      colNumber: 24,
      gutter: 20
    });

  return theme;
};

export { ThemeContext, ThemeProvider, useTheme, createTheme };
