import { ItemList$ } from "storefront-ui/ItemList";
import { ListItem } from "../ListItem";

const ItemList = props => (
  <ItemList$
    {...props}
    overrides={{
      ListItem: ListItem
    }}
  />
);

export { ItemList };
