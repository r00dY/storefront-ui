import { Popover$, StatefulPopover$ } from "@commerce-ui/core/Popover";

const rootSx = {
  border: "1px solid black",
  backgroundColor: "yellow"
};

export const Popover = props => <Popover$ {...props} sx={{ $root: rootSx }} />;
export const StatefulPopover = props => (
  <StatefulPopover$ {...props} sx={{ $root: rootSx }} />
);

Popover.PLACEMENT = Popover$.PLACEMENT;
StatefulPopover.PLACEMENT = Popover$.PLACEMENT;
