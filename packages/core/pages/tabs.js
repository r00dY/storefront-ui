import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Tabs

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/TabBar/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/TabBar/examples/01-standard-use.js").default
    }
  />
)}

`;

export default () => <Page>{content}</Page>;
