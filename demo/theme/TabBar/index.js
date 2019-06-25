import { Button } from "../Button";
import { TabBar$ } from "storefront-ui/TabBar";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const TabBar = props => (
  <TabBar$
    overrides={{
      Tab: ({ tabData, active, activate, ref }) => (
        <Button kind={"minimal"} onClick={activate} $ref={ref}>
          {tabData}
        </Button>
      ),
      Separator: () => (
        <div
          css={css`
            height: 100%;
            display: flex;
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
    gutter={10}
    {...props}
  />
);
