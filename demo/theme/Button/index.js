import { Button$ } from "storefront-ui/Button";

const overrides = {
  BaseButton: { style: () => `svg {fill: currentColor; }` }
};
const Button = props => <Button$ {...props} overrides={overrides} />;

export { Button };
