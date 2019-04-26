import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Popups

## \`DropdownMenu\`

\`DropdownMenu\` is a special case of popup. All it's responsible for is showing a list of items one under another.

${<Example code={require("!!raw-loader!../src/core-main/DropdownMenu/examples/01-standard-use.js")}
           component={require('../src/core-main/DropdownMenu/examples/01-standard-use.js').default}/>}
           
## \`Popup\`

${<Example code={require("!!raw-loader!../src/core-main/Popup/examples/01-standard-use.js")} component={require('../src/core-main/Popup/examples/01-standard-use.js').default} />}


`;
export default () => <Page>{content}</Page>;


