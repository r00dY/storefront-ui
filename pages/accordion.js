import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Accordion

Most basic accordion (\`AccordionRaw\`) as raw as it possibly could be. No state, no headers, no footers, nothing, just collapsible content.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Accordion/examples/01-accordion-raw.js")
        .default
    }
    component={
      require("../src/packages/Accordion/examples/01-accordion-raw.js").default
    }
  />
)}

### \`Accordion\`

\`Accordion\` makes it quicker to add internal state + header.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/Accordion/examples/02-accordion.js")
        .default
    }
    component={
      require("../src/packages/Accordion/examples/02-accordion.js").default
    }
  />
)}


### \`AccordionHeader\`

\`AccordionHeader\` is a special kind of button used in accordions.

${(
  <Example
    code={
      require("!!raw-loader!../src/packages/AccordionHeader/examples/03-accordion-header.js")
        .default
    }
    component={
      require("../src/packages/AccordionHeader/examples/03-accordion-header.js")
        .default
    }
  />
)}


`;

//
// ### \`ItemListAccordion\`
//
// Frequently we need to show item list with couple of items hidden and possible to uncollapse.
//
// ${(
//     <Example
//         code={
//             require("!!raw-loader!../src/packages/ItemListAccordion/examples/01-standard-use.js")
//                 .default
//         }
//         component={
//             require("../src/packages/ItemListAccordion/examples/01-standard-use.js")
//                 .default
//         }
//     />
// )}
export default () => <Page>{content}</Page>;
