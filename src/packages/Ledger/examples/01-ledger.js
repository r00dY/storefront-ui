import React from "react";
import { Ledger } from "../../../../demo/components/Ledger";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  return (
    <Ledger
      rows={[
        {
          label: "Subtotal",
          value: "€12.99"
        },
        {
          label: "Tax",
          value: "€0.00",
          note:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          label: "Grand Total",
          value: "€12.99",
          isTotal: true
        }
      ]}
    />
  );
};
