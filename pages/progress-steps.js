import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# ProgressSteps

Description

## \`ProgressSteps\`, \`ProgressStepsItem\`

Let's start with simple filter column, so common in all kinds of e-commerce sites.

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
