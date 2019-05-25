import { FiltersColumn$ } from "storefront-ui/Filters";
import { AccordionHeader } from "../AccordionHeader";
import { ItemListAccordion } from "../ItemListAccordion";

const FiltersColumn = props => (
  <FiltersColumn$
    overrides={{
      Header: AccordionHeader,
      filterComponents: {
        select: ({ filter, onChange }) => (
          <ItemListAccordion items={filter.options} onChange={onChange} />
        ),
        range: ({ filter, onChange }) => <div>range</div>
      }
    }}
    {...props}
  />
);

export { FiltersColumn };
