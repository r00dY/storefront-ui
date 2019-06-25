import React, { useState } from "react";
import { TabBar } from "../../../../demo/theme/TabBar";
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
  const [tab, setTab] = useState(options[11]);

  return (
    <div>
      <div
        css={css`
          border: 1px solid lightgrey;
        `}
      >
        <TabBar data={options} active={tab} onChange={setTab} />
      </div>
    </div>
  );
};
