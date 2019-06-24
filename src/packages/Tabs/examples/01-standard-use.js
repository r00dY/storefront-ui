import React, { useState } from "react";
import { Tabs$ } from "../index";
import { Button } from "../../../../demo/theme/Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const options = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve"
];

export default () => {
  const [tab, setTab] = useState(options[0]);

  return (
    <div>
      <div
        css={css`
          border: 1px solid lightgrey;
        `}
      >
        <Tabs$
          data={options}
          overrides={{
            Tab: ({ tabData, active, activate, ref }) => (
              <Button forwardedRef={ref} kind={"minimal"} onClick={activate}>
                {tabData}
              </Button>
            )
          }}
          active={tab}
          onChange={setTab}
        />
      </div>
    </div>
  );
};
