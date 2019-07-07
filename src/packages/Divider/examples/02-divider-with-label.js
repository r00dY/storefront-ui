import React, { useState } from "react";
import { Divider } from "../../../../demo/theme/Divider";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  return (
    <div
      css={css`
        width: 400px;
      `}
    >
      <Divider label={"or"} />
    </div>
  );
};
