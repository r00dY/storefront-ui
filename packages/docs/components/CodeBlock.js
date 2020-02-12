import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

import prismTheme from "prism-react-renderer/themes/duotoneLight";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { mdx } from "@mdx-js/react";

import Test from "./Test";

import Prism from "@theme-ui/prism";

import { Box } from "theme-ui";

export default props => {
  const { children, className, live, render } = props;

  const language = className.replace(/language-/, "");

  // if (live) {
  //   return (
  //     <Box>
  //       <LiveProvider
  //         code={children.trim()}
  //         transformCode={code => "/** @jsx mdx */" + code}
  //         scope={{ mdx, Test }}
  //         theme={prismTheme}
  //       >
  //         <Box
  //             sx={{
  //                 border: `1px solid ${prismTheme.plain.backgroundColor}`
  //             }}
  //         >
  //           <Box m={"1em"}>
  //             <LivePreview />
  //           </Box>
  //           <Box
  //               mx={"1.25em"}
  //               color={"#DF4F5C"}
  //           >
  //             <LiveError />
  //           </Box>
  //           <Box
  //               p={"0.5em"}
  //               bg={prismTheme.plain.backgroundColor}
  //           >
  //             <LiveEditor />
  //           </Box>
  //         </Box>
  //       </LiveProvider>
  //     </Box>
  //   );
  // }
  //
  // if (render) {
  //   return (
  //     <div style={{ marginTop: "40px" }}>
  //       <LiveProvider code={children}>
  //         <LivePreview />
  //       </LiveProvider>
  //     </div>
  //   );
  // }

  // TODO: temporary - not live

  if (live) {
    return (
      <Box>
        <LiveProvider
          code={children.trim()}
          transformCode={code => "/** @jsx mdx */" + code}
          scope={{ mdx, Test }}
          theme={prismTheme}
        >
          <Box
            sx={{
              border: `1px solid ${prismTheme.plain.backgroundColor}`
            }}
          >
            <Box m={"1em"}>
              <LivePreview />
            </Box>
            <Box mx={"1.25em"} color={"#DF4F5C"}>
              <LiveError />
            </Box>
            <Box p={"0.5em"} bg={prismTheme.plain.backgroundColor}>
              <LiveEditor />
            </Box>
          </Box>
        </LiveProvider>
      </Box>
    );
  }

  return <Prism {...props} />;

  // return (
  //   <Highlight
  //     {...defaultProps}
  //     code={children.trim()}
  //     language={language}
  //     theme={prismTheme}
  //   >
  //     {({ className, style, tokens, getLineProps, getTokenProps }) => (
  //       <pre className={className} style={{ ...style, padding: "20px" }}>
  //         {tokens.map((line, i) => (
  //           <div key={i} {...getLineProps({ line, key: i })}>
  //             {line.map((token, key) => (
  //               <span key={key} {...getTokenProps({ token, key })} />
  //             ))}
  //           </div>
  //         ))}
  //       </pre>
  //     )}
  //   </Highlight>
  // );
};
