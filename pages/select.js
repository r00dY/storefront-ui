import React from "react";
import Page from "../packages/core/docs-utils/Page";
import { md, Example, CodeBlock } from "../packages/core/docs-utils/docs";

const content = md`
# Selects

## \`Select\`

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Select/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/Select/examples/01-standard-use.js").default
    }
  />
)}

`;

export default () => <Page>{content}</Page>;
