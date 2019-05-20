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

const withTheme = (OriginalComponent, componentName) => {
  return props => {
    const theme = useTheme();

    let appearance = props.appearance || "default";

    if (theme[componentName] && theme[componentName][appearance]) {
      let overrides = theme[componentName][appearance];

      if (typeof overrides === "function") {
        overrides = overrides(props);
      }

      return <OriginalComponent {...props} {...overrides} />;
    }

    return <OriginalComponent {...props} />;
  };
};

export { ThemeContext, ThemeProvider, useTheme, withTheme };
