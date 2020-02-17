import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Pagination

## \`usePagination\`

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/usePagination/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/usePagination/examples/01-standard-use.js")
        .default
    }
  />
)}

## \`Pagination\`

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/Pagination/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/Pagination/examples/01-standard-use.js")
        .default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;
