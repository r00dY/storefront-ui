import React, { useState } from "react";
import {
  ProgressSteps,
  ProgressStepsItem
} from "../../../../demo/theme/ProgressSteps";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useTheme } from "storefront-ui/Theme";

export default () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 600px;
      `}
    >
      <ProgressSteps>
        <ProgressStepsItem
          label={"Consumer information"}
          href={"#"}
          completed
          theme={theme}
        />
        <ProgressStepsItem
          label={"Shipping method"}
          href={"#"}
          current
          theme={theme}
        />
        <ProgressStepsItem label={"Payment method"} theme={theme} />
      </ProgressSteps>
    </div>
  );
};
