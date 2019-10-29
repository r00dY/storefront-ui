import React from "react";
import Page from "../packages/core/docs-utils/Page";
import { md, Example, CodeBlock } from "../packages/core/docs-utils/docs";

const content = md`
# ProgressSteps

Most commonly used within the checkout flow at the top of page, and other flows that have number of a few steps. It provides a visual indicator of where user currently is in flow and displays how many steps user has to pass.

## \`ProgressSteps\`

\`ProgressSteps\` component wraps items and adds separators.

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/ProgressSteps/examples/01-progress-steps.js")
        .default
    }
    component={
      require("../packages/core/src/packages/ProgressSteps/examples/01-progress-steps.js")
        .default
    }
  />
)}


`;

export default () => <Page>{content}</Page>;
