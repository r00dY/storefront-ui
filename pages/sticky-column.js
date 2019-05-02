import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# StickyColumn

Commonly used component in e-commerce.

${<Example code={require("!!raw-loader!../src/packages/StickyColumn/examples/01-standard-use.js")} component={require('../src/packages/StickyColumn/examples/01-standard-use.js').default} />}

`;

export default () => <Page>{content}</Page>;


