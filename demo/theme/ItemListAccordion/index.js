import { ItemListAccordion$ } from "storefront-ui/ItemListAccordion";
import { ListItem } from "../ListItem";
import { Button } from "../Button";

const ItemListAccordion = props => (
  <ItemListAccordion$
    {...props}
    overrides={{
      ToggleButton: ({ open, onClick }) => (
        <Button kind={"minimal"} size="compact" fitContainer onClick={onClick}>
          {open ? "- show less" : "+ show more"}
        </Button>
      ),
      ListItem: ListItem
    }}
  />
);

export { ItemListAccordion };
