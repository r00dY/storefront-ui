import { Button } from "../Button";
import { TabBar } from "../TabBar";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const TabBar = props => (
  <TabBar$
    overrides={{
      Tab: ({ tabData, focus }) => (
        <div
          css={css`
            padding: 8px 12px;
            &:hover {
              background: lightgrey;
            }
            display: flex;
            align-items: center;
            justify-content: center;

            ${focus ? "background: lightgrey;" : ""}
          `}
        >
          {tabData}
        </div>
      ),
      Separator: () => (
        <div
          css={css`
            position: relative;
            height: 100%;
            width: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          -
        </div>
      ),
      Line: {
        style: `height: 1px;`
      }
    }}
    gutter={5}
    {...props}
  />
);
