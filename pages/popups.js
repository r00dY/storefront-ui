import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Popups

## \`Popup\`

\`Popup\` is a small window that pops up, grabs focus and is placed close to some trigger element.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Popup/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/Popup/examples/01-standard-use.js").default
    }
  />
)}

## \`DropdownMenu\`

\`DropdownMenu\` is a special case of popup. All it's responsible for is showing a list of items one under another.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/DropdownMenu/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/DropdownMenu/examples/01-standard-use.js")
        .default
    }
  />
)}

`;

export default () => <Page>{content}</Page>;
