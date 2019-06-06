import { ItemsList$ } from "storefront-ui/ItemsList";
import { ListItem } from "../ListItem";

const ItemsList = props => (
  <ItemsList$
    {...props}
    overrides={{
      ListItem: ListItem
    }}
  />
);

export { ItemsList };
