import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Accordion

Most basic accordion (\`AccordionRaw\`) as raw as it possibly could be. No state, no headers, no footers, nothing, just collapsible content.

${(
  <Example
    code={require("!!raw-loader!../src/packages/Accordion/examples/01-accordion-raw.js")}
    component={
      require("../src/packages/Accordion/examples/01-accordion-raw.js").default
    }
  />
)}

### \`Accordion\`

\`Accordion\` makes it quicker to add internal state + header.

${(
  <Example
    code={require("!!raw-loader!../src/packages/Accordion/examples/02-accordion.js")}
    component={
      require("../src/packages/Accordion/examples/02-accordion.js").default
    }
  />
)}

### \`ItemListAccordion\`

Frequently we need to show item list with couple of items hidden and possible to uncollapse.

${(
  <Example
    code={require("!!raw-loader!../src/packages/ItemListAccordion/examples/01-standard-use.js")}
    component={
      require("../src/packages/ItemListAccordion/examples/01-standard-use.js")
        .default
    }
  />
)}
`;

export default () => <Page>{content}</Page>;

// /** First way -> imperative creation of template */
//
// const desktopFilters = <div>
//
//     {filters.map((filter) => <Accordion header={<div>{filter.name}</div>}>
//
//         { filter.type === 'item-list' && filter.label !== 'color' &&
//             <ItemListAccordion>
//                 {filter.items.map((item) => <ItemListItem onClick={() => onChange(item.id)}>{item.name}</ItemListItem>)}
//             </ItemListAccordion>
//         }
//
//         { filter.type === 'item-list' && filter.label === 'color' &&
//             <ColorsGrid>
//                 {filter.items.map((item) => <Color color={item.color} onClick={() => onChange(item.id)} />)}
//             </ColorsGrid>
//         }
//
//         { filter.type === 'range' &&
//             <InputRange from={filter.from} to={filter.to} onChage={() => onChange(item.id)} error={filter.error} />
//         }
//     </Accordion>)}
//
// </div>;
//
// /** Second way - declarative **/
