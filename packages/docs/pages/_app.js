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
    <Box as={"header"} px={[3, null, 5]} py={3}>
      <strong>commerce-ui</strong>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        px: [3, null, 5],
        pt: [2, null, null, 5]
      }}
    >
      <Box
        sx={{
          flex: "0 0 auto",
          display: ["none", null, null, "flex"]
        }}
      >
        <Box as={"ul"} sx={{ listStyle: "none", margin: 0, padding: 0 }}>
          <Box as={"li"}>First chapter</Box>
          <Box as={"li"}>Second chapter</Box>
          <Box as={"li"}>Third chapter</Box>
          <Box as={"li"}>Fourth chapter</Box>
        </Box>
      </Box>
      <Box
        sx={{
          mx: [0, null, null, "auto"],
          maxWidth: "750px",
          pl: [0, null, null, 5],
          flexGrow: 1
        }}
      >
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
