import {
  StatefulPopover,
  Popover,
  ACCESSIBILITY_TYPE,
  PLACEMENT,
  TRIGGER_TYPE,
  STATE_CHANGE_TYPE,
  ANIMATE_IN_TIME,
  ANIMATE_OUT_TIME
} from "../../packages/base/popover";

const mountNode = () => {
  if (typeof document !== "undefined") {
    return document.getElementById("__layers__");
  }
};

const Popover$ = props => <Popover {...props} mountNode={mountNode()} />;
const StatefulPopover$ = props => (
  <StatefulPopover {...props} mountNode={mountNode()} />
);

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
