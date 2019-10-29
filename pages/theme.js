import React from "react";
import Page from "../packages/core/docs-utils/Page";
import { md, Example, CodeBlock } from "../packages/core/docs-utils/docs";

const content = md`
# Theme

## Colors

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Theme/examples/01-colors.js")
        .default
    }
    component={require("../packages/core/src/packages/Theme/examples/01-colors.js").default}
  />
)}

## Spacings

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Theme/examples/02-spacings.js")
        .default
    }
    component={require("../packages/core/src/packages/Theme/examples/02-spacings.js").default}
  />
)}

## Fonts

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Theme/examples/03-fonts.js").default
    }
    component={require("../packages/core/src/packages/Theme/examples/03-fonts.js").default}
  />
)}

`;

export default () => <Page>{content}</Page>;
