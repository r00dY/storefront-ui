import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/CodeBlock";
import App from "next/app";
// import {ThemeProvider} from 'theme-ui';
// import theme from "../theme";

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

const App_ = ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
  </MDXProvider>
);

App_.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default App_;
