import { FiltersColumn$ } from "storefront-ui/Filters";
import { AccordionHeader } from "../AccordionHeader";
import { ItemListAccordion } from "../ItemListAccordion";

import { StatefulInput } from "../Input";
import { FormControl } from "../FormControl";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Range = props => {
  return (
    <div
      css={css`
        position: relative;
        padding: 10px;
        display: flex;
        flex-direction: space-between;
        align-items: center;
      `}
    >
      <div>
        <StatefulInput
          type={"number"}
          placeholder={"from"}
          after={<div>zł</div>}
        />
      </div>

      <div
        css={css`
          width: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        -
      </div>
      <div>
        <StatefulInput type={"number"} placeholder={"to"} />
      </div>
    </div>
  );
};

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
    range: ({ filter, onChange }) => <Range />
  }
};

const FiltersColumn = props => (
  <FiltersColumn$ overrides={overrides} {...props} />
);

export { FiltersColumn };
