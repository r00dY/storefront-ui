import React from "react";
import { RangePicker$ } from "storefront-ui/RangePicker";

import { Input } from "../Input";
import { Button } from "../Button";

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
        <Button onClick={clear} kind={"minimal"}>
          clear
        </Button>
      )
    }}
    {...props}
  />
);
