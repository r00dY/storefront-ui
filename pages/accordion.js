import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Accordion

Most basic accordion as raw as it possibly could be.

${<Example code={require("!!raw-loader!../src/core-main/Accordion/examples/01-standard-use.js")} component={require('../src/core-main/Accordion/examples/01-standard-use.js').default} />}

### \`ItemListAccordion\`

Frequently we need to show item list with couple of items hidden and possible to uncollapse.

${<Example code={require("!!raw-loader!../src/core-main/ItemListAccordion/examples/01-standard-use.js")} component={require('../src/core-main/ItemListAccordion/examples/01-standard-use.js').default} />}
`;

export default () => <Page>{content}</Page>;


