import React from "react";
import Page from "../packages/core/docs-utils/Page";
import { md, Example, CodeBlock } from "../packages/core/docs-utils/docs";

const content = md`
# Button

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Button/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/Button/examples/01-standard-use.js").default
    }
  />
)}

## Sizing

Important thing is to know how \\\`Button\\\` is sized. If it's a standard button (no href) it will be standard button. If you want to make it 100% width, just apply \\\`fitContainer={true}\\\`. In case of \\\`href\\\`, the button will be \\\`a\\\` tag with \\\`display: block\\\` applied. 

## ButtonGroup

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/ButtonGroup/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/ButtonGroup/examples/01-standard-use.js").default
    }
  />
)}

# \`ButtonRaw\`

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/ButtonRaw/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/ButtonRaw/examples/01-standard-use.js").default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;
