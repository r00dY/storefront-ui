import ButtonBase$ from "@commerce-ui/core/ButtonBase";
import { createComponent } from "@commerce-ui/core";

export default createComponent(ButtonBase$, {
  position: "relative",
  font: "body2",
  color: "black",
  overflow: "hidden",
  borderRadius: "6px",
  p: "10px",
  ":before": {
    content: "''",
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    bg: "lightgrey",
    transition: "opacity .3s linear"
  },
  ":hover:before": {
    opacity: 0.5
  }
});
