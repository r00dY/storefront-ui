import React from "react";
import Page from "../packages/core/docs-utils/Page";
import { md, Example, CodeBlock } from "../packages/core/docs-utils/docs";

const content = md`
# Divider

Most of it's usage is horizontal visual separator of forms blocks or groups of inputs.

## \`Divider\`

Simple usage

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Divider/examples/01-divider.js")
        .default
    }
    component={
      require("../packages/core/src/packages/Divider/examples/01-divider.js").default
    }
  />
)}

With label

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Divider/examples/02-divider-with-label.js")
        .default
    }
    component={
      require("../packages/core/src/packages/Divider/examples/02-divider-with-label.js")
        .default
    }
  />
)}

`;

export default () => <Page>{content}</Page>;
