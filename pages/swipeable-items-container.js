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


## Arrows, dots and other controller components

Sliders usually have side components like arrow buttons, dots or progress bars.

### Arrows

\`SwipeableItemsContainer\` allows for quick addition vertically centered arrows.

${<Example code={require("!!raw-loader!../src/core-main/SwipeableItemsContainer/examples/03-arrows.js")} component={require('../src/core-main/SwipeableItemsContainer/examples/03-arrows.js').default} />}

### Tmp - test

${<Example code={require("!!raw-loader!../src/core-main/SwipeableItemsContainer/examples/04-tmp.js")}
           component={require('../src/core-main/SwipeableItemsContainer/examples/04-tmp.js').default}/>}
`;

export default () => <Page>{content}</Page>;


