import React, { useContext } from "react";

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

const withTheme = (arg, componentName) => {
  let originals = Object.assign({}, arg);

  if (typeof arg === "function" || arg instanceof React.Component) {
    originals = {
      default: arg
    };
  }

  return props => {
    const theme = useTheme();

    let appearance = props.appearance || "default";

    let DefaultComponent = originals.default;

    if (typeof originals.default === "string") {
      // If default is ALIAS (like button default = button primary)
      if (appearance === "default") {
        appearance = originals.default;
      }
      DefaultComponent = originals[originals.default];
    }

    const OriginalComponent = originals[appearance]
      ? originals[appearance]
      : DefaultComponent;

    if (theme[componentName]) {
      let overrides = theme[componentName][appearance];

      if (overrides) {
        if (typeof overrides === "function") {
          overrides = overrides(props);
        }

        return <OriginalComponent {...props} {...overrides} />;
      }
    }

    return <OriginalComponent {...props} />;
  };
};

export { ThemeContext, ThemeProvider, useTheme, withTheme };
