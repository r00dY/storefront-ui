import React from "react";
import { FiltersRow$ } from "storefront-ui/Filters";
import { ItemsList } from "../ItemsList";
import { Button } from "../Button";
import { Button$ } from "../../src/packages/Button";

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
    <Button$
      fitContainer
      disabled={!filter.value || (filter.value && filter.value.length === 0)}
      kind={"secondary"}
      onClick={() => onChange([])}
      overrides={{
        Root: {}
      }}
    >
      Clear All
    </Button$>
  ),
  filterComponents: {
    select: ({ filter, onChange }) => (
      <ItemsList
        items={filter.items}
        value={filter.value}
        onChange={onChange}
      />
    ),
    range: ({ filter, onChange }) => <div>range</div>
  }
};
const FiltersRow = props => <FiltersRow$ overrides={overrides} {...props} />;
export default FiltersRow;
