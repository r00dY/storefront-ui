import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Modals / Overlays

They are the same thing.

Below examples how to use them in \`storefront-ui\`.

${(
  <Example
    code={require("!!raw-loader!../src/packages/Modal/examples/01-standard-use.js")}
    component={
      require("../src/packages/Modal/examples/01-standard-use.js").default
    }
  />
)}

`;

export default () => <Page>{content}</Page>;
