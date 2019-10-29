import React from "react";
import Page from "../packages/core/docs-utils/Page";
import { md, Example, CodeBlock } from "../packages/core/docs-utils/docs";

const content = md`
# Ledger

Ledger is part of storefront checkout

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Ledger/examples/01-ledger.js")
        .default
    }
    component={require("../packages/core/src/packages/Ledger/examples/01-ledger.js").default}
  />
)}


`;

export default () => <Page>{content}</Page>;
