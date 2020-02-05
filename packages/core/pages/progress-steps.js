import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# ProgressSteps

Most commonly used within the checkout flow at the top of page, and other flows that have number of a few steps. It provides a visual indicator of where user currently is in flow and displays how many steps user has to pass.

## \`ProgressSteps\`

\`ProgressSteps\` component wraps items and adds separators.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/ProgressSteps/examples/01-progress-steps.js")
        .default
    }
    component={
      require("../src/packages_old/ProgressSteps/examples/01-progress-steps.js")
        .default
    }
  />
)}


`;

export default () => <Page>{content}</Page>;
