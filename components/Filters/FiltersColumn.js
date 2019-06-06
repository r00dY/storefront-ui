import React from "react";
import { FiltersColumn$ } from "storefront-ui/Filters";
import { AccordionHeader } from "../AccordionHeader";
import { ItemListAccordion } from "../ItemListAccordion";

const overrides = {
  Header: AccordionHeader,
  filterComponents: {
    select: ({ filter, onChange }) => (
      <ItemListAccordion
        items={filter.items}
        value={filter.value}
        onChange={onChange}
      />
    ),
    range: ({ filter, onChange }) => <div>range</div>
  }
};

const FiltersColumn = props => (
  <FiltersColumn$ overrides={overrides} {...props} />
);

export default FiltersColumn;
