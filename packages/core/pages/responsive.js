import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Responsiveness

## \`MediaQuery\`

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/MediaQuery/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/MediaQuery/examples/01-standard-use.js")
        .default
    }
  />
)}

## \`Device\`

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/Device/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/Device/examples/01-standard-use.js").default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;
