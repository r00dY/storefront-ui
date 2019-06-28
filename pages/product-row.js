import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";
//
const content = md`

# ProductRow

## \`ProductRow\`

ProductRow is made to display lists of products in such contexts like basket page, mini-basket, order summary page, wishlist.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/ProductRow/examples/01-product-row.js")
        .default
    }
    component={
      require("../src/packages/ProductRow/examples/01-product-row.js").default
    }
  />
)}


\`ProductRow\` comes in two modes: \`"full"\` and \`"compact"\`.

In \`"full"\` mode it unwraps on given \`breakpoint\`. This mode suits to basket page, and product summary, where products are displayed widely.

Below we have example with theme overrides, \`"full"\` mode which breaks above \`"lg"\` breakpoint:

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/ProductRow/examples/02-product-row-themed.js")
        .default
    }
    component={
      require("../src/packages/ProductRow/examples/02-product-row-themed.js")
        .default
    }
  />
)}
\`"compact"\` mode suits best as responsive basket page or mini-basket on desktop:
${(
  <Example
    code={
      require("!!raw-loader!../src/packages/ProductRow/examples/03-product-row-themed.js")
        .default
    }
    component={
      require("../src/packages/ProductRow/examples/03-product-row-themed.js")
        .default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;
