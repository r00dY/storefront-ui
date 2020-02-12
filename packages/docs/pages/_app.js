import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/CodeBlock";
import App from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { Box } from "theme-ui";
import Prism from "@theme-ui/prism";

const font = {
  fontFamily: "sans-serif"
};

const mdComponents = {
  h1: props => <h1 style={{ ...font }} {...props} />,
  h2: props => <h2 style={{ ...font }} {...props} />,
  h3: props => <h3 style={{ ...font }} {...props} />,
  h4: props => <h4 style={{ ...font }} {...props} />,
  h5: props => <h5 style={{ ...font }} {...props} />,
  h6: props => <h6 style={{ ...font }} {...props} />,
  p: props => <p style={{ ...font }} {...props} />,
  pre: props => <div style={{ ...font }} {...props} />,
  li: props => <li style={{ ...font }} {...props} />,
  code: CodeBlock,
  inlineCode: props => (
    <code
      style={{ backgroundColor: "#efefef", padding: "2px 4px" }}
      {...props}
    />
  )
};

const components = {
  pre: ({ children }) => <>{children}</>,
  code: CodeBlock
  // h1: props => <h1 {...props} style={{fontSize: "100px"}} />
};

// {/*<MDXProvider components={mdComponents}>*/}
// {/*<Component {...pageProps} />*/}
// {/*</MDXProvider>*/}

const App_ = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme} components={components}>
    <Box p={5}>
      <Component {...pageProps} />
    </Box>
  </ThemeProvider>
);

App_.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default App_;
