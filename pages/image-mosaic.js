import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Image Mosaic

${(
  <Example
    code={require("!!raw-loader!../src/packages/ImageMosaic/examples/01-standard-use.js")}
    component={
      require("../src/packages/ImageMosaic/examples/01-standard-use.js").default
    }
  />
)}

`;

export default () => <Page>{content}</Page>;
