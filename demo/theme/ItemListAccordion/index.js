import { ItemListAccordion$ } from "storefront-ui/ItemListAccordion";
import { ListItem } from "../ListItem";
import { Button } from "../Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ItemListAccordion = props => (
  <ItemListAccordion$
    {...props}
    overrides={{
      ToggleButton: ({ open, onClick }) => (
        <Button
          kind={"minimal"}
          size="compact"
          onClick={onClick}
          css={css`
            margin-left: 12px;
          `}
        >
          {open ? "- show less" : "+ show more"}
        </Button>
      ),
      ListItem: ListItem
    }}
  />
);

export { ItemListAccordion };
