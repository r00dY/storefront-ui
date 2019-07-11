import React from "react";

import { Ledger$, LedgerRow$ } from "storefront-ui/Ledger";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Ledger = props => <Ledger$ {...props} />;

const LedgerRow = props => <LedgerRow$ {...props} />;

export { Ledger, LedgerRow };
