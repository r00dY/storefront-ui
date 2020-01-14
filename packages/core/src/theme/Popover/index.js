import { Popover$, StatefulPopover$ } from "@commerce-ui/core/Popover";

const rootSx = {
  border: "1px solid black",
  backgroundColor: "yellow",
  p: 3
};

const defaultPlacement = "bottomLeft";

export const Popover = props => (
  <Popover$ placement={defaultPlacement} {...props} sx={{ $root: rootSx }} />
);
export const StatefulPopover = props => (
  <StatefulPopover$
    placement={defaultPlacement}
    {...props}
    sx={{ $root: rootSx }}
  />
);

Popover.PLACEMENT = Popover$.PLACEMENT;
StatefulPopover.PLACEMENT = Popover$.PLACEMENT;
