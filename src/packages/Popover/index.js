import {
  StatefulPopover,
  Popover,
  ACCESSIBILITY_TYPE,
  PLACEMENT,
  TRIGGER_TYPE,
  STATE_CHANGE_TYPE,
  ANIMATE_IN_TIME,
  ANIMATE_OUT_TIME
} from "../base/popover";

const Popover$ = Popover;
const StatefulPopover$ = StatefulPopover;

Object.assign(Popover$, {
  ACCESSIBILITY_TYPE,
  PLACEMENT,
  TRIGGER_TYPE,
  STATE_CHANGE_TYPE,
  ANIMATE_IN_TIME,
  ANIMATE_OUT_TIME
});
Object.assign(StatefulPopover$, {
  ACCESSIBILITY_TYPE,
  PLACEMENT,
  TRIGGER_TYPE,
  STATE_CHANGE_TYPE,
  ANIMATE_IN_TIME,
  ANIMATE_OUT_TIME
});

export { Popover$, StatefulPopover$ };
