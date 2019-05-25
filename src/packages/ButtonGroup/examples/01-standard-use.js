import React, { useState } from "react";
import { ButtonGroup$ } from "storefront-ui/ButtonGroup";
import { Button$ } from "storefront-ui/Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rslin } from "responsive-helpers";

export default () => {
  return (
    <div>
      <ButtonGroup$>
        <Button$>First</Button$>
        <Button$ appearance={"secondary"}>Second</Button$>
        <Button$ appearance={"minimal"}>Third</Button$>
      </ButtonGroup$>

      <br />
      <br />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
        `}
      >
        <ButtonGroup$
          gutter={{
            xs: 20,
            lg: 50
          }}
        >
          <Button$>First</Button$>
          <Button$>Second</Button$>
          <Button$>Third</Button$>
        </ButtonGroup$>
      </div>
    </div>
  );
};
