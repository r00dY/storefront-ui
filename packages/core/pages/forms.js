import React from "react";
import Page from "../docs-utils/Page";
import { md, Example } from "../docs-utils/docs";

const content = md`
# Forms, Inputs and Controls

Right now most of the code related to forms, inputs and controls is taken from base-ui (developed by Uber).

## Input

Standard input field.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Input/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/Input/examples/01-standard-use.js").default
    }
  />
)}

## Textarea

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Textarea/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/Textarea/examples/01-standard-use.js").default
    }
  />
)}

## Checkbox

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Checkbox/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/Checkbox/examples/01-standard-use.js").default
    }
  />
)}

## Radio

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Radio/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/Radio/examples/01-standard-use.js").default
    }
  />
)}

## FormControl

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/FormControl/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/FormControl/examples/01-standard-use.js").default
    }
  />
)}

## Form

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/FormHeader/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/FormHeader/examples/01-standard-use.js").default
    }
  />
)}

## Select Native

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/SelectNative/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/SelectNative/examples/01-standard-use.js")
        .default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;
