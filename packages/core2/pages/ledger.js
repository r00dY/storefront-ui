import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Ledger

Ledger is part of storefront checkout

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/Ledger/examples/01-ledger.js")
        .default
    }
    component={
      require("../src/packages_old/Ledger/examples/01-ledger.js").default
    }
  />
)}


`;

export default () => <Page>{content}</Page>;
