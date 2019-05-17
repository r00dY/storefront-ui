import React, { useContext } from "react";

import defaultTheme from "./defaultTheme";

const ThemeContext = React.createContext({});
const ThemeProvider = props => (
  <ThemeContext.Provider value={defaultTheme}>
    {props.children}
  </ThemeContext.Provider>
);

const useTheme = function() {
  const theme = useContext(ThemeContext);
  return theme;
};

export { ThemeContext, ThemeProvider, useTheme };
