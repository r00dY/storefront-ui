import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";
//
const content = md`

# CheckoutLineItemRow

## \`CheckoutLineItemRow\`

CheckoutLineItemRow is made to display lists of products in such contexts like basket page, mini-basket, order summary page, wishlist.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/CheckoutLineItemRow/examples/01-checkout-line-item-row.js")
        .default
    }
    component={
      require("../src/packages_old/CheckoutLineItemRow/examples/01-checkout-line-item-row.js")
        .default
    }
  />
)}

\`CheckoutLineItemRow\` comes in two modes: \`"full"\` and \`"compact"\`.

In \`"full"\` mode it unwraps on given \`breakpoint\`. This mode suits to basket page, and product summary, where products are displayed widely.

Below we have example with theme overrides, \`"full"\` mode which breaks above \`"lg"\` breakpoint:

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/CheckoutLineItemRow/examples/02-checkout-line-item-row.js")
        .default
    }
    component={
      require("../src/packages_old/CheckoutLineItemRow/examples/02-checkout-line-item-row.js")
        .default
    }
  />
)}

\\\`"compact"\\\` mode suits best as responsive basket page or mini-basket on desktop:
${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/CheckoutLineItemRow/examples/03-checkout-line-item-row.js")
        .default
    }
    component={
      require("../src/packages_old/CheckoutLineItemRow/examples/03-checkout-line-item-row.js")
        .default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;
