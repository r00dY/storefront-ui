import React, { useState } from "react";

import { Button } from "../../../../demo/components/Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { StatefulPopover } from "../../../../demo/components/Popover";
import { StatefulPopover$ } from "storefront-ui/Popover";

export default () => {
  const content = (
    <div
      css={css`
        padding: 16px;
      `}
    >
      Hello world!!!
    </div>
  );

  return (
    <div>
      <p>Standard popover</p>
      <StatefulPopover content={content} accessibilityType={"tooltip"}>
        <Button>Open</Button>
      </StatefulPopover>

      <p>Custom position</p>

      <StatefulPopover
        content={content}
        accessibilityType={"tooltip"}
        placement={StatefulPopover.PLACEMENT.bottomLeft}
      >
        <Button>Open</Button>
      </StatefulPopover>

      <p>Close callback</p>

      <StatefulPopover
        content={({ close }) => (
          <div
            css={css`
              padding: 16px;
            `}
          >
            Click below to close
            <br />
            <br />
            <Button onClick={close}>Close me</Button>
          </div>
        )}
        accessibilityType={"tooltip"}
        placement={StatefulPopover.PLACEMENT.bottomLeft}
      >
        <Button>Open</Button>
      </StatefulPopover>

      <p>Overrides</p>

      <StatefulPopover$
        content={content}
        accessibilityType={"tooltip"}
        placement={StatefulPopover.PLACEMENT.bottomLeft}
        overrides={{
          Body: {
            style: `
                            border-radius: 0;
                            border: 1px solid black;
                            box-shadow: none;
                        `
          }
        }}
      >
        <Button>Open</Button>
      </StatefulPopover$>
      <br />
      <br />
    </div>
  );
};
