import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/CodeBlock";
import App from "next/app";
import Prism from "@theme-ui/prism";
import Fullscreen from "../components/Fullscreen";

import { ThemeProvider } from "theme-ui";
import { Box } from "theme-ui";
import theme from "../theme";

import Link from "next/link";

import packageJson from "../package.json";

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

const PAGE_PADDING = [6, null, "120px"];

const components = {
  pre: ({ children }) => <>{children}</>,
  code: CodeBlock,

  wrapper: ({ children, ...props }) => {
    return React.Children.toArray(children).map(x => {
      if (x.props.originalType === Fullscreen) {
        return x;
      }

      if (
        x.props.originalType === "pre" &&
        x.props.children.props.fullscreen === "true"
      ) {
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
    <Box as={"header"} px={PAGE_PADDING} py={8}>
      <strong>commerce-ui</strong> <code>{packageJson.version}</code>
    </Box>

    <Box
      sx={{
        mb: 12
      }}
    >
      <Box
        sx={{
          px: PAGE_PADDING,
          pt: 12,
          pb: 12
        }}
      >
        <Box as={"ul"} sx={{ listStyle: "none", margin: 0, padding: 0 }}>
          <Box as={"li"}>
            <Link href={"/styling"}>
              <a>Styling, Box, and sx property</a>
            </Link>
          </Box>
          <Box as={"li"}>
            <Link href={"/image"}>
              <a>Image</a>
            </Link>
          </Box>
          <Box as={"li"}>
            <Link href={"/button"}>
              <a>Button</a>
            </Link>
          </Box>
          <Box as={"li"}>
            <Link href={"/layout"}>
              <a>Layout, Container and Grid</a>
            </Link>
          </Box>
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
