import { FiltersColumn$ } from "storefront-ui/Filters";
import { AccordionHeader } from "../AccordionHeader";
import { ItemListAccordion } from "../ItemListAccordion";
import { RangePicker } from "../RangePicker";

import React from "react";

const overrides = {
  Header: AccordionHeader,
  filterComponents: {
    select: ({ filter, onChange }) => (
      <ItemListAccordion
        items={filter.items}
        value={filter.value}
        onChange={onChange}
        multiple={filter.multiple}
      />
    ),
    range: ({ filter, onChange }) => (
      <RangePicker
        value={filter.value}
        onChange={onChange}
        min={filter.min}
        max={filter.max}
        unit={filter.unit}
        neverEmpty={true}
      />
    )
  }
};

const FiltersColumn = props => (
  <FiltersColumn$ overrides={overrides} {...props} />
);

export { FiltersColumn };
