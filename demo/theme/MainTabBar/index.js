import { TabBar$ } from "storefront-ui/TabBar";

import React, { useEffect } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default props => {
  useEffect(() => {
    console.log("mount MainTabBar");
  }, []);

  return (
    <TabBar$
      overrides={{
        Root: {
          style: `
                background: #fafafa;
            `
        },
        Tab: ({ tabData, focus }) => (
          <div
            css={css`
              height: 50px;
              &:hover {
                background: lightgrey;
              }
              display: flex;
              align-items: center;
              justify-content: center;

              ${focus ? "background: lightgrey;" : ""}
            `}
          >
            {tabData.label}
          </div>
        ),
        Line: {
          style: `height: 3px;`
        }
      }}
      gutter={5}
      {...props}
    />
  );
};
