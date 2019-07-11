import React from "react";
import { Ledger, LedgerRow } from "../../../../demo/theme/Ledger";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  return (
    <Ledger>
      <LedgerRow label={"Subtotal"} value={"€12.99"} />
      <LedgerRow label={"Tax"} value={"€0.00"} />
      <LedgerRow label={"Grand Total"} value={"€12.99"} isTotal />
    </Ledger>
  );
};
