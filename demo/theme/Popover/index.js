import { Popover$, StatefulPopover$ } from "storefront-ui/Popover";

const overrides = {
  Body: {
    style: ({ $anchorWidth }) => `
      width: 320px;
      max-height: 500px;
      border-radius: 4px;
      overflow: hidden;
    `
  },
  Root: {
    // style: `border-radius: 4px;`
  }
};

export const Popover = props => <Popover$ {...props} overrides={overrides} />;
export const StatefulPopover = props => (
  <StatefulPopover$ {...props} overrides={overrides} />
);

Popover.PLACEMENT = Popover$.PLACEMENT;
StatefulPopover.PLACEMENT = Popover$.PLACEMENT;
