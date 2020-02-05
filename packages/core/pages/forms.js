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
      require("!!raw-loader!../src/packages_old/Input/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/Input/examples/01-standard-use.js").default
    }
  />
)}

## Textarea

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/Textarea/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/Textarea/examples/01-standard-use.js")
        .default
    }
  />
)}

## Checkbox

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/Checkbox/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/Checkbox/examples/01-standard-use.js")
        .default
    }
  />
)}

## Radio

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/Radio/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/Radio/examples/01-standard-use.js").default
    }
  />
)}

## FormControl

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/FormControl/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/FormControl/examples/01-standard-use.js")
        .default
    }
  />
)}

## Form

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/FormHeader/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/FormHeader/examples/01-standard-use.js")
        .default
    }
  />
)}

## Select Native

${(
  <Example
    code={
      require("!!raw-loader!../src/packages_old/SelectNative/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages_old/SelectNative/examples/01-standard-use.js")
        .default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;
