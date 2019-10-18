import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# RadioGroup

## \`RadioGroup\`


${(
  <Example
    code={
      require("!!raw-loader!../src/packages/RadioGroup2/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/RadioGroup2/examples/01-standard-use.js").default
    }
  />
)}


`;

export default () => <Page>{content}</Page>;
