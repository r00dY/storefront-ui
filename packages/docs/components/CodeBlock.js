import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

import prismTheme from "prism-react-renderer/themes/duotoneLight";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { mdx } from "@mdx-js/react";

import Test from "./Test";

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, "");

  if (live) {
    return (
      <div>
        <LiveProvider
          code={children.trim()}
          transformCode={code => "/** @jsx mdx */" + code}
          scope={{ mdx, Test }}
          theme={prismTheme}
        >
          <div
            style={{ border: `1px solid ${prismTheme.plain.backgroundColor}` }}
          >
            <div style={{ margin: "1em" }}>
              <LivePreview />
            </div>
            <div
              style={{
                marginLeft: "1em",
                marginRight: "1em",
                color: "#DF4F5C"
              }}
            >
              <LiveError />
            </div>
            <div
              style={{
                padding: "1em",
                backgroundColor: prismTheme.plain.backgroundColor
              }}
            >
              <LiveEditor />
            </div>
          </div>
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
