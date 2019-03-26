import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Sliders and swipers

\`storefront-ui\` provides a solution to deal with swipers. The component is called \`SwipeableItemsContainer\`.

## Examples of use

${<Example code={require("!!raw-loader!../src/core-main/SwipeableItemsContainer/examples/01-standard-use.js")} component={require('../src/core-main/SwipeableItemsContainer/examples/01-standard-use.js').default} />}

## Hook and state

${<Example code={require("!!raw-loader!../src/core-main/SwipeableItemsContainer/examples/02-hook.js")} component={require('../src/core-main/SwipeableItemsContainer/examples/02-hook.js').default} />}

`;

export default () => <Page>{content}</Page>;


