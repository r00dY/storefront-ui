import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/CodeBlock";
import App from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { Box } from "theme-ui";
import Prism from "@theme-ui/prism";
import Fullscreen from "../components/Fullscreen";

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

const PAGE_PADDING = [3, null, 6];

const components = {
  pre: ({ children }) => <>{children}</>,
  code: CodeBlock,

  wrapper: ({ children, ...props }) => {
    return React.Children.toArray(children).map(x => {
      if (x.props.originalType === Fullscreen) {
        return x;
      }

      return (
        <Box
          sx={{
            position: "relative",
            maxWidth: "850px",
            px: PAGE_PADDING
          }}
          key={x.key}
        >
          {x}
        </Box>
      );
    });
  }
};

// {/*<MDXProvider components={mdComponents}>*/}
// {/*<Component {...pageProps} />*/}
// {/*</MDXProvider>*/}

const App_ = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme} components={components}>
    <Box as={"header"} px={PAGE_PADDING} py={3}>
      <strong>commerce-ui</strong>
    </Box>

    <Box
      sx={{
        mb: 6
      }}
    >
      <Box
        sx={{
          px: PAGE_PADDING,
          pt: 4,
          pb: 5
        }}
      >
        <Box as={"ul"} sx={{ listStyle: "none", margin: 0, padding: 0 }}>
          <Box as={"li"}>First chapter</Box>
          <Box as={"li"}>Second chapter</Box>
          <Box as={"li"}>Third chapter</Box>
          <Box as={"li"}>Fourth chapter</Box>
        </Box>
      </Box>
      <Box>
        <Component {...pageProps} />
      </Box>
    </Box>
  </ThemeProvider>
);

App_.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default App_;
