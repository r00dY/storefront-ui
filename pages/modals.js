import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Modals / Overlays

They are the same thing.

Below examples how to use them in \`storefront-ui\`.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Modal/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/Modal/examples/01-standard-use.js").default
    }
  />
)}

## We can register custom modal looks

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Modal/examples/02-register.js")
        .default
    }
    component={require("../src/packages/Modal/examples/02-register.js").default}
  />
)}

## header and footer

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Modal/examples/03-header-and-footer.js")
        .default
    }
    component={
      require("../src/packages/Modal/examples/03-header-and-footer.js").default
    }
  />
)}

`;

export default () => <Page>{content}</Page>;
