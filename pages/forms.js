import React from "react";
import Page from "../packages/core/docs-utils/Page";
import { md, Example } from "../packages/core/docs-utils/docs";

const content = md`
# Forms, Inputs and Controls

Right now most of the code related to forms, inputs and controls is taken from base-ui (developed by Uber).

## Input

Standard input field.

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Input/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/Input/examples/01-standard-use.js").default
    }
  />
)}

## Textarea

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Textarea/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/Textarea/examples/01-standard-use.js").default
    }
  />
)}

## Checkbox

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Checkbox/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/Checkbox/examples/01-standard-use.js").default
    }
  />
)}

## Radio

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/Radio/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/Radio/examples/01-standard-use.js").default
    }
  />
)}

## FormControl

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/FormControl/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/FormControl/examples/01-standard-use.js").default
    }
  />
)}

## Form

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/FormHeader/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/FormHeader/examples/01-standard-use.js").default
    }
  />
)}

## Select Native

${(
  <Example
    code={
      require("!!raw-loader!../packages/core/src/packages/SelectNative/examples/01-standard-use.js")
        .default
    }
    component={
      require("../packages/core/src/packages/SelectNative/examples/01-standard-use.js")
        .default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;
