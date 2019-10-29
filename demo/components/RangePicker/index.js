import React from "react";
import { RangePicker$ } from "@commerce-ui/core/RangePicker";

import { Input } from "../Input";
import { Button } from "../Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const RangePicker = props => (
  <RangePicker$
    overrides={{
      InputFrom: ({ inputProps }) => (
        <Input {...inputProps} placeholder={"from"} unit={props.unit} />
      ),
      InputTo: ({ inputProps }) => (
        <Input {...inputProps} placeholder={"to"} unit={props.unit} />
      ),
      ClearButton: ({ clear }) => (
        <Button
          onClick={clear}
          kind={"minimal"}
          size="compact"
          css={css`
            margin-left: 12px;
          `}
        >
          clear
        </Button>
      )
    }}
    {...props}
  />
);

RangePicker.defaultProps = {
  value: {}
};
