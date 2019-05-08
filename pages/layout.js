import React from "react";
import Page from "../docs-utils/Page";
import { md, Container, Example } from "../docs-utils/docs";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

/**
 * Co z długoscia kontenera jesli bedzie zmienna (menu sie chowa / pojawia?) Tylko procenty ;( ;( ;(
 *
 * W sumie to:
 * - jebac zasasdy a la grid / etc. Nasze komponenty tylko minimalnie niech dostarcza cos a'la Bootstrap grid, Container i czesc, tak samo jak bylo.
 * - nie probojmy rozwiazywac problemow "nierozwiazywalnych", czyli np. snapping to grid czysto w CSS w sliderze etc. No way praktycznie.
 * - skupmy sie na budowaniu komponentow e-commerce
 */

const content = md`
# Layout, Container and Grid

Web design **must** use a grid. Like here:

${(
  <Container>
    <img src={"/static/grid.png"} style={{ width: "100%" }} />
  </Container>
)}

### But why?
- everything will look better thanks to design consistency across pages / devices
- quick iterations and design of new screens without rethinking layout every time
- very fast and easy for developers to implement
- cheap to maintain. You develop the system once, then reuse. No custom layouts per every screen. *The more you have the more you maintain*. Have less.
- responsiveness is easy

## \`Container\`

\`Container\` is a basic visual wrapper for elements. It's centered and have margins.

### Standard use

${(
  <Example
    fullWidth={true}
    code={
      require("!!raw-loader!../src/packages/Container/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/Container/examples/01-standard-use.js").default
    }
  />
)}

By default, \`Container\` margin is \`5vw\`. Later we'll show how to make it custom.

## \`Grid\`

Grid has n fixed width columns separated with fixed width gutters. Every layout should snap its blocks to the grid.

The \`Grid\` behaves exactly the same as Bootstrap grid. For now you can set widths, offsets and order for items.

${(
  <Example
    fullWidth={true}
    code={
      require("!!raw-loader!../src/packages/Grid/examples/01-standard-use.js")
        .default
    }
    component={
      require("../src/packages/Grid/examples/01-standard-use.js").default
    }
  />
)}

## Configuration

By default, width of container is \`90vw\`, grid gutter is \`10px\` and number of columns is 24. These parameters can be changed via  \`layout.container\` property in config.

Configuration can be changed via \`storefront-ui.config.js\` file in a root directory of the project. Example file:

\`\`\`javascript

export default {
    layout: {
        container: rs({ // Here we set custom container width!
            xs: "90vw",
            lg: "85vw",
            xl: 1600 // constant width from xl
        }),
        gutter: rs({
            xs: 10,
            lg: 20
            xl: 30
        }),
        colNumber: 12
    }
};
\`\`\`

### Layout values

You can always access layout variables from \`L\`:

\`\`\`javascript
import { L } from "storefront-ui/config";

L.container // container width
L.gutter // gutter width
L.margin // margin width
L.col // column width
L.cols(10) // 10-columns width
L.cols(4) // 4-columns width
\`\`\`

### Don't use %!

Pls don't use % unit when setting width for \`container\` or \`gutter\`. Use \`vw\` instead.

The reason is that sometimes we want to create some UI element that is snapped to the grid and its width is not calculated relative to the body width. If we used \`%\`, the calculated values would be wrong. They'll be calculated relative to closest positioned ancestor, not window width.

`;

export default () => <Page>{content}</Page>;
