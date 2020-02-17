import React, { useState } from "react";
import { Divider } from "../../../../../../demo/components/Divider";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  return (
    <div
      css={css`
        width: 600px;
      `}
    >
      <Divider label={"divider label"} />
    </div>
  );
};
