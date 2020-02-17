import Button$ from "@commerce-ui/core/Button";
import { createComponent } from "@commerce-ui/core";

export default createComponent(Button$, {
  $background: ({ isHovered }) => ({
    bg: "coral",
    opacity: isHovered ? 0.85 : 1,
    transition: "opacity .3s"
  }),
  $body: {
    font: "body",
    color: "white",
    p: 3
  }
});
