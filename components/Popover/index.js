import React from "react";
import { Poporver$, StatefulPopover$ } from "storefront-ui/Popover";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Popover = <Poporver$ />;

const overrides = {
  Body: {
    style: ({ $theme }) =>
      `width: 200px; max-height: 250px; display: flex; flex-direction: column;`
  }
};
const StatefulPopover = <StatefulPopover$ overrides={overrides} />;

export { Popover, StatefulPopover };
