import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";
//
const content = md`

# ProductRow

## \`ProductRow\`

Let's start with raw example

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/ProductCard/examples/01-product-card.js")
        .default
    }
    component={
      require("../src/packages/ProductCard/examples/01-product-card.js").default
    }
  />
)}


Now we go with some overrides:

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/ProductCard/examples/02-product-card-themed.js")
        .default
    }
    component={
      require("../src/packages/ProductCard/examples/02-product-card-themed.js")
        .default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;
