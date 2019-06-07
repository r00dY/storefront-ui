import React from "react";
import { FilterRow$ } from "storefront-ui/Filters";
import { ItemList } from "../ItemList";
import { Button } from "../Button";

const overrides = {
  Trigger: ({ filter }) => (
    <Button
      kind={filter.value && filter.value.length > 0 ? "primary" : "secondary"}
    >
      {filter.name}
      {filter.value && filter.value.length > 0
        ? ` (${filter.value.length})`
        : ""}
    </Button>
  ),
  PopoverHead: ({ filter, onChange }) => (
    <Button
      fitContainer
      disabled={!filter.value || (filter.value && filter.value.length === 0)}
      kind={"secondary"}
      onClick={() => onChange([])}
    >
      Clear All
    </Button>
  ),
  PopoverFooter: ({ close }) => (
    <Button fitContainer onClick={close}>
      Apply
    </Button>
  ),
  filterComponents: {
    select: ({ filter, onChange }) => (
      <ItemList items={filter.items} value={filter.value} onChange={onChange} />
    ),
    range: ({ filter, onChange }) => <div>range</div>
  }
};
const FilterRow = props => <FilterRow$ overrides={overrides} {...props} />;
export default FilterRow;
