import React from "react";
import Page from "../packages/core/docs-utils/Page";
import { md, Example, CodeBlock } from "../packages/core/docs-utils/docs";
//
const content = md`

# ProductCard

## \`ProductCard\`

Let's start with raw example

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/ProductCard/examples/01-product-card.js")
        .default
    }
    component={
      require("../packages/core/src/packages/ProductCard/examples/01-product-card.js").default
    }
  />
)}


Now we go with some overrides:

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/ProductCard/examples/02-product-card-themed.js")
        .default
    }
    component={
      require("../packages/core/src/packages/ProductCard/examples/02-product-card-themed.js")
        .default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;
