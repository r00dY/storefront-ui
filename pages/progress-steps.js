import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# ProgressSteps

Progress Steps are made to be checkout pages breadcrumbs.

## \`ProgressSteps\`, \`ProgressStepsItem\`

\`ProgressSteps\` wraps items and manages their state. \`ProgressStepsItem\` can have one of three states: default, completed and current.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/ProgressSteps/examples/01-progress-steps.js")
        .default
    }
    component={
      require("../src/packages/ProgressSteps/examples/01-progress-steps.js")
        .default
    }
  />
)}


`;

export default () => <Page>{content}</Page>;
