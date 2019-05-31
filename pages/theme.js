import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Theme

## Colors

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Theme/examples/01-colors.js")
        .default
    }
    component={require("../src/packages/Theme/examples/01-colors.js").default}
  />
)}

## Spacings

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Theme/examples/02-spacings.js")
        .default
    }
    component={require("../src/packages/Theme/examples/02-spacings.js").default}
  />
)}

`;

export default () => <Page>{content}</Page>;
