import React from "react";
import Page from "../packages/core/docs-utils/Page";
import { md, Example, CodeBlock } from "../packages/core/docs-utils/docs";

const content = md`
# Modals / Overlays

They are the same thing.

Below examples how to use them in \`storefront-ui\`.

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Modal/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/Modal/examples/01-standard-use.js").default
    }
  />
)}

## header and footer

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Modal/examples/03-header-and-footer.js")
        .default
    }
    component={
      require("../packages/core/src/packages/Modal/examples/03-header-and-footer.js").default
    }
  />
)}

`;

export default () => <Page>{content}</Page>;
