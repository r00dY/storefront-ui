import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Sliders and swipers

\`storefront-ui\` provides a solution to deal with swipers. The component is called \`SwipeableItemsContainer\`.

## Examples of use

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/SwipeableItemsContainer/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/SwipeableItemsContainer/examples/01-standard-use.js")
        .default
    }
  />
)}

## Arrows, dots and other controller components

Sliders usually have side components like arrow buttons, dots or progress bars.

### Arrows

\`SwipeableItemsContainer\` allows for quick addition vertically centered arrows.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/SwipeableItemsContainer/examples/03-arrows.js")
        .default
    }
    component={
      require("../src/packages/SwipeableItemsContainer/examples/03-arrows.js")
        .default
    }
  />
)}

Arrows are always wrapped with \`button\` component.

### Controlling swiper by external components

Very often we might need to add some component that will make changes to swiper state (move slides or show active state). We can "connect" to internal swiper state by using \`useSwipeableItemsContainer\` hook. In such case \`SwipeableItemsContainer\` JSX must be passed to the hook, and we can obtain ready-to-use element + state variables and methods as a hook output.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/SwipeableItemsContainer/examples/02-hook.js")
        .default
    }
    component={
      require("../src/packages/SwipeableItemsContainer/examples/02-hook.js")
        .default
    }
  />
)}

### Dots

\`storefront-ui\` ships with a simple but useful component named \`Dots\`. It's frequently used with sliders.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/SwipeableItemsContainer/examples/04-dots.js")
        .default
    }
    component={
      require("../src/packages/SwipeableItemsContainer/examples/04-dots.js")
        .default
    }
  />
)}

### Scrollbar

Some designs require adding scrollbar which works together with swiper.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/SwipeableItemsContainer/examples/05-scrollbar.js")
        .default
    }
    component={
      require("../src/packages/SwipeableItemsContainer/examples/05-scrollbar.js")
        .default
    }
  />
)}

`;

// const content = md`
// # Sliders and swipers
//
// ${<Example code={require("!!raw-loader!../src/core-main/SwipeableItemsContainer/examples/04-tmp.js")} component={require('../src/core-main/SwipeableItemsContainer/examples/04-tmp.js').default} />}
//
// ${<Example code={require("!!raw-loader!../src/core-main/SwipeableItemsContainer/examples/02-hook.js")} component={require('../src/core-main/SwipeableItemsContainer/examples/02-hook.js').default} />}
//
// `;

export default () => <Page>{content}</Page>;
